import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Database, X } from "lucide-react";
import { IMAGES, PAGES } from "@/constants/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Features from "@/components/Features";
import Image from "next/image";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Header />
      <Hero />
      <Databases />
      <Steps />
      <Features />
      <Pricing />
      {/* FAQ
      Blog */}
      <Footer />
    </>
  );
};

export default Home;
