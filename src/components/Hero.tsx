import { IMAGES, PAGES } from "@/constants/constants";
import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="bg-gray-100 border w-full mt-14 xl:mt-20 p-2 rounded-xl">
      <div className="bg-white border flex items-center justify-between flex-col lg:flex-row w-full px-8 lg:px-0 lg:py-16 gap-0 lg:gap-10 rounded-lg">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-full lg:w-1/2 py-8 lg:py-0 px-8">
          <div className="z-[3] w-full flex-col items-center p-4 text-center lg:items-start lg:text-left">
            <div className="flex flex-col pb-3.5 items-center text-center lg:items-start gap-4 lg:text-left">
              <h1 className="font-semibold text-5xl leading-none lg:text-6xl">
                Get realtime charts from your data
              </h1>
              <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
                Connect your data source, create your charts and start tracking
                your key metrics.
              </p>
            </div>
            <div className="w-full md:w-auto lg:w-[90%]">
              <Link href={PAGES.signup} className="w-full">
                <Button className="w-2/3 lg:w-full bg-black text-white rounded-lg hover:bg-black shadow-none">
                  Get started
                </Button>
              </Link>
              <p className="mt-4 text-center text-sm text-[#898989]">
                No credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-full lg:w-1/2 overflow-hidden">
          <div className="border rounded-lg overflow-hidden p-2 bg-gray-100 translate-y-8 lg:translate-y-0 lg:translate-x-8">
            <Image
              src={IMAGES.projects_display.src}
              width={IMAGES.projects_display.w}
              height={IMAGES.projects_display.h}
              alt="Dashboard"
              className="border rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
