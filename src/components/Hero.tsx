import Link from "next/link";
import { Button } from "./ui/button";
import { PAGES } from "@/constants/constants";

const Hero = () => {
  return (
    <section className="w-full max-w-5xl mt-36 flex items-center justify-center flex-col gap-6">
      <h1 className="max-w-xl xl:max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl text-center">
        Get <span className="text-firebase-orange">real-time charts</span>{" "}
        around your <span className="text-firebase-orange">Firebase</span> data
      </h1>

      <h4 className="max-w-md xl:max-w-lg font-light tracking-tight sm:text-lg xl:text-xl text-center">
        Connect your firestore database and get a dashboard with real-time
        charts to track your key metrics.
      </h4>

      <Link href={PAGES.signup}>
        <Button className="bg-firebase-orange text-white hover:bg-firebase-orange/90 text-lg">
          Get started
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
