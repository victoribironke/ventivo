import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { useAtomValue } from "jotai";
import { cn } from "@/lib/utils";
import { customer_info, user_session } from "@/atoms/atoms";

const Plans = () => {
  const userSession = useAtomValue(user_session);
  const customer = useAtomValue(customer_info);
  let plan;

  if (customer.length === 0 || customer[0].has_access === false) plan = "Free";
  else plan = "Yearly";

  const tiers = [
    {
      plan: "Free",
      price: 0,
      per: "month",
      features: ["1 project", "3 charts", "Watermark on exported charts"],
      paymentLink:
        "https://billing.stripe.com/p/login/00g5oeakt7NU3mweUU?prefilled_email=" +
        userSession?.user.email,
      priceId: "",
      isCurrent: plan === "Free",
    },
    {
      plan: "Pro",
      price: 45,
      per: "year",
      features: [
        "Unlimited projects",
        "Unlimited charts",
        "No watermark on exported charts",
      ],
      paymentLink:
        "https://buy.stripe.com/8wM7u3adoaaW2ze8ww?prefilled_email=" +
        userSession?.user.email,
      priceId: "price_1QeveiKBQOuJW2sTl7UtIa78",
      isCurrent: plan === "Yearly",
    },
  ];

  return (
    <section className="w-full max-w-3xl gap-6">
      <div className="w-full flex items-stretch justify-center gap-6 flex-col sm:flex-row mb-6">
        {tiers.map((t, i) => (
          <div
            className="bg-muted/50 border flex items-start justify-center flex-col gap-4 w-full sm:w-1/2 p-6 rounded-xl"
            key={i}
          >
            <h1 className="font-semibold text-lg text-firebase-orange">
              {t.plan}
            </h1>

            <p className="text-lg">
              <span className="text-3xl font-extrabold text-firebase-orange">
                $ {t.price}{" "}
              </span>
              / {t.per}
            </p>

            <ul className="w-full flex flex-col gap-4 my-6">
              {t.features.map((f, j) => (
                <li key={j} className="flex items-center">
                  <IoCheckmarkOutline className="text-firebase-orange mr-2" />{" "}
                  {f}
                </li>
              ))}
            </ul>

            <Link href={t.isCurrent ? "" : t.paymentLink} className="w-full">
              <Button
                className={cn(
                  "font-semibold w-full py-3 rounded-lg text-white",
                  t.isCurrent
                    ? "bg-black hover:bg-black"
                    : "bg-firebase-orange hover:bg-firebase-orange/90"
                )}
                disabled={t.isCurrent}
              >
                {t.isCurrent ? "Current plan" : "Change plan"}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {customer.length !== 0 && (
        <Link
          href={
            "https://billing.stripe.com/p/login/00g5oeakt7NU3mweUU?prefilled_email=" +
            userSession?.user.email
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="font-semibold w-full max-w-[10rem] py-3 rounded-lg text-white bg-blue hover:bg-blue">
            Billing
          </Button>
        </Link>
      )}
    </section>
  );
};

export default Plans;
