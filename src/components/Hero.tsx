import Link from "next/link";
import { Button } from "./ui/button";
import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="w-full max-w-5xl mt-36 flex items-center justify-center flex-col gap-6">
//       <h1 className="max-w-xl xl:max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl text-center">
//         Get <span className="text-firebase-orange">real-time charts</span>{" "}
//         around your <span className="text-firebase-orange">Firebase</span> data
//       </h1>

//       <h4 className="max-w-md xl:max-w-lg font-light tracking-tight sm:text-lg xl:text-xl text-center">
//         Connect your firestore database and get a dashboard with real-time
//         charts to track your key metrics.
//       </h4>

//       <Link href={PAGES.signup}>
//         <Button className="bg-firebase-orange text-white hover:bg-firebase-orange/90 text-lg">
//           Get started
//         </Button>
//       </Link>
//     </section>
//   );
// };

const Hero = () => {
  return (
    <section className="w-full bg-white mt-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight">
          Visualize Your{" "}
          <span className="text-firebase-orange">Firebase Data</span> in
          Real-Time
        </h1>

        <p className="max-w-xl text-lg text-center text-gray-700">
          Effortlessly generate real-time charts and dashboards from your
          Firestore data. Stay on top of your app’s key metrics with intuitive
          and customizable visualizations.
        </p>

        <div className="flex gap-6">
          <Link href={PAGES.signup}>
            <Button className="bg-firebase-orange text-white py-3 px-8 rounded-full shadow-lg hover:bg-firebase-orange/90 transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
