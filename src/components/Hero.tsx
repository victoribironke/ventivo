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
  const { pathname } = useRouter();

  const steps = [
    {
      content: "Connect your data source",
      icon: Database,
      color: "#3b82f6",
    },
    {
      content: "Create your charts",
      icon: ChartLine,
      color: "#ffc400",
    },
    {
      content: "Track your key metrics",
      icon: FileChartColumnIncreasing,
      color: "#22c55e",
    },
  ];

  return (
    <section className="bg-white border flex items-center justify-between flex-col w-full py-20 px-3 gap-20 rounded-xl">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-full flex items-center justify-evenly gap-4">
          {steps.map((s, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="aspect-square p-2.5 bg-gray-50 rounded-lg grid place-content-center">
                    <s.icon color={s.color} size={35} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{s.content}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        <h1 className="text-5xl font-extrabold text-center text-gray-900 leading-tight">
          Get <span className="text-firebase-orange">realtime charts</span>
          <br /> from your data
        </h1>

        <p className="max-w-lg text-lg text-center text-gray-700">
          Connect your data source, create your charts and start tracking your
          key metrics.
        </p>

        <Link href={PAGES.signup}>
          <Button className="bg-firebase-orange text-white py-3 px-8 rounded-lg hover:scale-105 hover:bg-firebase-orange transition">
            Get started
          </Button>
        </Link>
      </div>

      <div className="text-gray-400">
        Built by{" "}
        <Link
          href="https://victoribironke.com"
          className="underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          Victor Ibironke
        </Link>
      </div>
    </section>
  );
};

export default Hero;
