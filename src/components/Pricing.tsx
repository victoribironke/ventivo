import Link from "next/link";
import { Button } from "./ui/button";
import { PAGES } from "@/constants/constants";
import { Switch } from "./ui/switch";
import { useState } from "react";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const features = [
    {
      emoji: "✅",
      title: "Unlimited projects",
      description:
        "Create and manage as many projects as you need, without restrictions.",
    },
    {
      emoji: "📊",
      title: "Unlimited charts",
      description:
        "Build and track unlimited charts to visualize all your key metrics.",
    },
    {
      emoji: "🚀",
      title: "No watermarks",
      description:
        "Export your charts without any branding, giving you a clean and professional look.",
    },
  ];

  return (
    <section className="w-full mt-40 max-w-3xl">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="font-semibold text-4xl lg:text-5xl">Simple pricing</h1>
        <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
          Try for free and upgrade if you need.
        </p>
      </div>

      <div className="mt-8 bg-gray-100 p-1 rounded-xl border">
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
              <p>Monthly</p>
              <Switch
                checked={!isMonthly}
                onCheckedChange={() => setIsMonthly((k) => !k)}
                className="data-[state=checked]:bg-black"
              />
              <p>Yearly</p>
            </div>

            <p>
              <span className="text-3xl font-bold text-firebase-orange">
                ${isMonthly ? 4 : 45}{" "}
              </span>
              / {isMonthly ? "month" : "year"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-6">
            {features.map((f, i) => (
              <div
                className="grid h-full grid-rows-[auto_auto_1fr] gap-2"
                key={i}
              >
                <p className="break-words text-lg font-medium">
                  {f.emoji} {f.title}
                </p>
                <p className="break-words text-base text-gray-500">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <Link href={PAGES.signup} className="w-full">
            <Button className="bg-black text-white rounded-lg hover:bg-black shadow-none w-full">
              Get started for free
            </Button>
          </Link>
          <p className="text-gray-400 text-center mt-2 text-sm">
            Pay ${isMonthly ? 4 : 45} per {isMonthly ? "month" : "year"}. Cancel
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
