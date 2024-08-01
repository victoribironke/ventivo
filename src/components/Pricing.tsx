import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import { PAGES } from "@/constants/constants";
import { IoCheckmarkOutline } from "react-icons/io5";
import { cn, formatNumber } from "@/lib/utils";

const Pricing = ({ country }: { country: string }) => {
  const pricing = [
    {
      title: "Free",
      features: ["1 project", "3 charts", "Future feature updates"],
      price: 0,
    },
    {
      title: "Pro",
      features: [
        "Unlimited projects",
        "Unlimited charts",
        "Future feature updates",
      ],
      price: country === "Nigeria" ? 7500 : 50000,
    },
  ];

  return (
    <section className="w-full max-w-5xl flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-center">
        <span className="text-firebase-orange">Simple</span> Pricing
      </h1>

      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6">
        {pricing.map((p, i) => (
          <div
            className={cn(
              "bg-white rounded-2xl py-6 flex flex-col justify-center items-center gap-6",
              i === 1
                ? "border-2 border-firebase-orange col-span-1 xl:col-span-2"
                : "border"
            )}
            key={i}
          >
            <p className="text-xl md:text-2xl text-black px-6 font-semibold w-full text-left">
              {p.title}
            </p>

            <p className="w-full flex gap-1 items-end px-6">
              <span className="text-firebase-orange text-4xl md:text-5xl font-bold">
                ₦{formatNumber(p.price)}
              </span>
              {p.price !== 0 && (
                <span className="text-gray-400">billed once</span>
              )}
            </p>

            <Separator />

            <div className="w-full px-6 flex flex-col gap-2">
              {p.features.map((f, j) => (
                <p key={j} className="flex items-center gap-2">
                  <IoCheckmarkOutline /> {f}
                </p>
              ))}
            </div>

            <Separator />

            <div className="w-full px-6">
              <Link href={PAGES.signup}>
                <Button className="bg-firebase-orange hover:bg-firebase-orange/90 font-normal w-full py-2 px-4 rounded-xl">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
