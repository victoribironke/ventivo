import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Database } from "lucide-react";
import { PAGES } from "@/constants/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Features from "@/components/Features";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Header />
      <Hero />
      <Steps />
      <Features />

      {/* <Databases />
      <Pricing />
      <Footer /> */}
    </>
  );
};

export default Home;
