import HeadTemplate from "@/components/general/HeadTemplate";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { sp } from "./_app";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IMAGES, PAGES } from "@/constants/constants";
import { FaDatabase } from "react-icons/fa6";
import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Hero />

      <section className="w-full flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="bg-white border-2 flex items-center justify-center w-full md:w-1/2 p-6 rounded-xl">
          <p>Document-oriented databases</p>
        </div>
        <div className="bg-white border-2 flex items-center justify-center w-full md:w-1/2 p-6 rounded-xl"></div>
      </section>
    </>
  );
};

export default Home;
