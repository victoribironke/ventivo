import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { PAGES } from "@/constants/constants";
import { Switch } from "./ui/switch";
import { useState } from "react";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const tiers = [
    {
      plan: "Free",
      price: 0,
      per: "month",
      features: ["1 project", "3 charts", "Watermark on exported charts"],
    },
    {
      plan: "Pro",
      price: isMonthly ? 4 : 45,
      per: isMonthly ? "month" : "year",
      features: [
        "Unlimited projects",
        "Unlimited charts",
        "No watermark on exported charts",
      ],
    },
  ];

  return (
    <>
      <section className="my-10 py-6 px-10 w-full flex items-start justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-firebase-orange">Simple</span> pricing
        </h1>

        <p className="text-lg">Try for free and upgrade if you need.</p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <p className="text-lg">Monthly</p>
          <Switch
            checked={!isMonthly}
            onCheckedChange={() => setIsMonthly((k) => !k)}
            className="data-[state=checked]:bg-firebase-orange"
          />
          <p className="text-lg">Yearly</p>
        </div>
      </section>

      <section className="w-full flex items-stretch justify-center gap-6 flex-col sm:flex-row">
        {tiers.map((t, i) => (
          <div
            className="bg-white border-2 flex items-start justify-center flex-col gap-4 w-full sm:w-1/2 p-6 rounded-xl"
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
                <li key={j} className="flex items-center text-lg text-gray-700">
                  <IoCheckmarkOutline className="text-firebase-orange mr-2" />{" "}
                  {f}
                </li>
              ))}
            </ul>

            <Link href={PAGES.signup} className="w-full">
              <Button className="bg-firebase-orange hover:bg-firebase-orange/90 font-semibold w-full py-3 rounded-lg text-white">
                Get started
              </Button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Pricing;
