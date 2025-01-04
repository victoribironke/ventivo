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
import { TbBrandMongodb } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Hero />
      <Databases />
      <Steps />
      <Pricing />
    </>
  );
};

export default Home;
