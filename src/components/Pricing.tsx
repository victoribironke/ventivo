import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";
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
        <h1 className="font-medium text-4xl lg:text-5xl">Simple pricing</h1>
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
              / month
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

          <Button className="bg-black text-white rounded-lg hover:bg-black shadow-none w-full">
            Get started for free
          </Button>
          <p className="text-gray-400 text-center mt-2 text-sm">
            Pay ${isMonthly ? 4 : 45} per month. Cancel anytime
          </p>
        </div>
      </div>
    </section>
    // <>
    //   <section className="my-10 py-6 px-10 w-full flex items-start justify-center flex-col gap-4">
    //     <h1 className="text-4xl font-bold text-gray-900">
    //       <span className="text-firebase-orange">Simple</span> pricing
    //     </h1>

    //     <p className="text-lg">Try for free and upgrade if you need.</p>

    //     <div className="flex items-center justify-center gap-4 mt-4">
    //       <p className="text-lg">Monthly</p>
    //       <Switch
    //         checked={!isMonthly}
    //         onCheckedChange={() => setIsMonthly((k) => !k)}
    //         className="data-[state=checked]:bg-firebase-orange"
    //       />
    //       <p className="text-lg">Yearly</p>
    //     </div>
    //   </section>

    //   <section className="w-full flex items-stretch justify-center gap-6 flex-col sm:flex-row">
    //     {tiers.map((t, i) => (
    //       <div
    //         className="bg-white border-2 flex items-start justify-center flex-col gap-4 w-full sm:w-1/2 p-6 rounded-xl"
    //         key={i}
    //       >
    //         <h1 className="font-semibold text-lg text-firebase-orange">
    //           {t.plan}
    //         </h1>

    //         <ul className="w-full flex flex-col gap-4 my-6">
    //           {t.features.map((f, j) => (
    //             <li key={j} className="flex items-center text-lg text-gray-700">
    //               <IoCheckmarkOutline className="text-firebase-orange mr-2" />{" "}
    //               {f}
    //             </li>
    //           ))}
    //         </ul>

    //         <Link href={PAGES.signup} className="w-full">
    //           <Button className="bg-firebase-orange hover:bg-firebase-orange/90 font-semibold w-full py-3 rounded-lg text-white">
    //             Get started
    //           </Button>
    //         </Link>
    //       </div>
    //     ))}
    //   </section>
    // </>
  );
};

export default Pricing;
