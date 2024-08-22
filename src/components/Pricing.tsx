import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import { PAGES } from "@/constants/constants";
import { IoCheckmarkOutline } from "react-icons/io5";
import { cn, formatNumber } from "@/lib/utils";

const Pricing = () => {
  const pricing = [
    {
      title: "Free",
      features: ["1 project", "3 charts", "Watermark on exported charts"],
      price: 0,
    },
    {
      title: "Pro",
      features: [
        "Unlimited projects",
        "Unlimited charts",
        "No watermark on exported charts",
      ],
      price: 60,
    },
  ];

  return (
    <section className="w-full bg-white py-16" id="pricing">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">
          <span className="text-firebase-orange">Simple</span> Pricing
        </h1>

        <div className="w-full grid md:grid-cols-2 gap-10">
          {pricing.map((p, i) => (
            <div
              key={i}
              className={cn(
                "bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col items-center gap-8",
                i === 1 ? "border-2 border-firebase-orange" : "border"
              )}
            >
              <div className="flex flex-col items-center">
                <p className="text-2xl font-semibold text-gray-900">
                  {p.title}
                </p>
                <p className="text-5xl font-bold text-firebase-orange mt-4">
                  ${formatNumber(p.price)}
                </p>
                <p className="text-gray-500 mt-2">
                  {p.price === 0 ? "Free forever" : "One-time payment"}
                </p>
              </div>

              <ul className="w-full flex flex-col gap-4">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center text-lg text-gray-700"
                  >
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
        </div>
      </div>
    </section>
  );
};

// const Pricing = () => {
//   const pricing = [
//     {
//       title: "Free",
//       features: ["1 project", "3 charts", "Watermark on exported charts"],
//       price: 0,
//     },
//     {
//       title: "Pro",
//       features: [
//         "Unlimited projects",
//         "Unlimited charts",
//         "No watermark on exported charts",
//       ],
//       price: 60,
//     },
//   ];

//   return (
//     <section className="w-full max-w-5xl flex flex-col gap-8">
//       <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-center">
//         <span className="text-firebase-orange">Simple</span> Pricing
//       </h1>

//       <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6">
//         {pricing.map((p, i) => (
//           <div
//             className={cn(
//               "bg-white rounded-2xl py-6 flex flex-col justify-center items-center gap-6",
//               i === 1
//                 ? "border-2 border-firebase-orange col-span-1 xl:col-span-2"
//                 : "border"
//             )}
//             key={i}
//           >
//             <p className="text-xl md:text-2xl text-black px-6 font-semibold w-full text-left">
//               {p.title}
//             </p>

//             <p className="w-full flex gap-1 items-end px-6">
//               <span className="text-firebase-orange text-4xl md:text-5xl font-bold">
//                 ${formatNumber(p.price)}
//               </span>
//               {p.price !== 0 && (
//                 <span className="text-gray-400">one-time payment</span>
//               )}
//             </p>

//             <Separator />

//             <div className="w-full px-6 flex flex-col gap-2">
//               {p.features.map((f, j) => (
//                 <p key={j} className="flex items-center gap-2">
//                   <IoCheckmarkOutline /> {f}
//                 </p>
//               ))}
//             </div>

//             <Separator />

//             <div className="w-full px-6">
//               <Link href={PAGES.signup}>
//                 <Button className="bg-firebase-orange hover:bg-firebase-orange/90 font-normal w-full py-2 px-4 rounded-xl">
//                   Get started
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

export default Pricing;
