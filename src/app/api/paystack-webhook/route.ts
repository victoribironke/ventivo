import { NextResponse, NextRequest } from "next/server";
import { getCustomer } from "@/lib/supabase";
import { supabase } from "@/services/supabase";
import { TABLES } from "@/constants/constants";
import crypto from "crypto";

const secretKey =
  process.env.NODE_ENV === "development"
    ? process.env.PAYSTACK_TEST_SECRET_KEY
    : process.env.PAYSTACK_LIVE_SECRET_KEY;

const verifySignature = (eventData: any, signature: string): boolean => {
  const hmac = crypto.createHmac("sha512", secretKey!);

  const expectedSignature = hmac
    .update(JSON.stringify(eventData))
    .digest("hex");

  return expectedSignature === signature;
};

export const POST = async (req: NextRequest) => {
  try {
    const eventData = await req.json();
    const signature = req.headers.get("x-paystack-signature");

    if (!signature) {
      console.error("No signature found on the request");
      return NextResponse.json(
        { error: "No signature found on the request" },
        { status: 400 }
      );
    }

    if (!verifySignature(eventData, signature)) {
      console.error("Webhook signature verification failed.");
      return NextResponse.json(
        { error: "Webhook signature verification failed." },
        { status: 401 }
      );
    }

    const eventType = eventData.event;

    console.log(eventType);

    switch (eventType) {
      case "charge.success": {
        const data = eventData.data;
        const { email, customer_code, first_name, last_name } = data.customer;
        const { plan_code } = data.plan;

        const c = await getCustomer(email);

        if (c.length === 0) {
          const { error } = await supabase.from(TABLES.customers).insert({
            email: email,
            name: first_name + " " + last_name,
            customer_id: customer_code,
          });

          if (error) throw new Error("Error creating the user.");
        }

        const { error } = await supabase
          .from(TABLES.customers)
          .update({ plan_id: plan_code, has_access: true })
          .eq("customer_id", customer_code);

        if (error) throw new Error("Error updating the user.");

        console.log("Checkout session completed event handled");
        break;
      }
      case "subscription.not_renew": {
        const data = eventData.data;
        const { customer_code } = data.customer;

        const { error } = await supabase
          .from(TABLES.customers)
          .update({ has_access: false })
          .eq("customer_id", customer_code);

        if (error) throw new Error("Error updating the user.");

        console.log("Customer subscription deleted event handled");
        break;
      }
      default:
        break;
    }

    return NextResponse.json({ status: "success", event: eventType });
  } catch (error: any) {
    console.error(`Error creating or updating the customer. ${error.message}`);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
