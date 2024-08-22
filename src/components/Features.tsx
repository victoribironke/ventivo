import { IMAGES } from "@/constants/constants";
import Image from "next/image";

const Features = () => {
  const features = [
    "Read-only access",
    "Customizable charts",
    "Real-time updates",
    "Beautifully exported images",
  ];

  return (
    <section className="w-full bg-white py-16" id="features">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
        <div className="lg:w-1/2">
          <Image
            alt="Charts screenshot"
            src={IMAGES.charts_display.src}
            width={IMAGES.charts_display.w}
            height={IMAGES.charts_display.h}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-6">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Why Ventivo?
          </h2>

          <ul className="space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-center text-lg text-gray-700">
                <span className="inline-block w-3 h-3 rounded-full bg-firebase-orange mr-3"></span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// const Features = () => {
//   const features = [
//     "Read-only access",
//     "Real-time",
//     "Interactive",
//     "Beautiful",
//   ];

//   return (
//     <section className="w-full max-w-5xl flex items-center justify-center flex-col gap-6">
//       <div className="flex items-center justify-center flex-col lg:flex-row gap-4">
//         <div className="w-full bg-white rounded-2xl">
//           <Image
//             alt="Charts screenshot"
//             src={IMAGES.charts_display.src}
//             width={IMAGES.charts_display.w}
//             height={IMAGES.charts_display.h}
//             className="w-full rounded-2xl border"
//           />
//         </div>
//       </div>

//       <div className="w-full flex items-center justify-center gap-2 flex-wrap">
//         {features.map((f, i) => (
//           <p
//             className="text-green flex items-center justify-center gap-2"
//             key={i}
//           >
//             {f}{" "}
//             {i !== features.length - 1 && (
//               <span className="text-firebase-orange">•</span>
//             )}
//           </p>
//         ))}
//       </div>
//     </section>
//   );
// };

export default Features;
