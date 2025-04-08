import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { getCustomer } from "@/lib/supabase";
import { supabase } from "@/services/supabase";
import { TABLES } from "@/constants/constants";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Need to disable bodyParser for the raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to read the body as a string
const getRawBody = async (req: NextRequest): Promise<string> => {
  const reader = req.body?.getReader();
  let rawBody = "";

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      rawBody += new TextDecoder().decode(value);
    }
  }

  return rawBody;
};

export const POST = async (req: NextRequest) => {
  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      console.error("No signature found on the request");
      return NextResponse.json(
        { error: "No signature found on the request" },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        stripeWebhookSecret
      );
    } catch (error: any) {
      console.error(`Webhook signature verification failed. ${error.message}`);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    const data = event.data;
    const eventType = event.type;
    console.log(eventType);

    switch (eventType) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          (data.object as Stripe.Checkout.Session).id,
          {
            expand: ["line_items"],
          }
        );
        const customerId = session?.customer;
        const customer = (await stripe.customers.retrieve(
          customerId as string
        )) as Stripe.Customer;

        let priceId = "";

        if (session?.line_items?.data[0].price)
          priceId = session.line_items.data[0].price.id;

        if (customer.email) {
          const c = await getCustomer(customer.email);

          if (c.length === 0) {
            const { error } = await supabase.from(TABLES.customers).insert({
              email: customer.email,
              name: customer.name,
              customer_id: customerId,
            });

            if (error) throw new Error("Error creating the user.");
          }
        } else {
          throw new Error("No user found.");
        }

        const { error } = await supabase
          .from(TABLES.customers)
          .update({ price_id: priceId, has_access: true })
          .eq("customer_id", customerId);

        if (error) throw new Error("Error updating the user.");

        console.log("Checkout session completed event handled");
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          (data.object as Stripe.Subscription).id
        );

        const { error } = await supabase
          .from(TABLES.customers)
          .update({ has_access: false })
          .eq("customer_id", subscription.customer);

        if (error) throw new Error("Error updating the user.");

        console.log("Customer subscription deleted event handled");
        break;
      }
      default:
        break;
    }

    return NextResponse.json({ status: "success", event: event.type });
  } catch (error: any) {
    console.error(`Error creating or updating the customer. ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
