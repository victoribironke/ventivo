import HeadTemplate from "@/components/general/HeadTemplate";
import PageLoader from "@/components/general/PageLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES, TABLES } from "@/constants/constants";
import { cn, isValidEmail } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { createClient } from "@supabase/supabase-js";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import { FaCheck } from "react-icons/fa";
import Blog from "@/components/Blog";

// export const getStaticProps = async () => {
//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
//   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
//   const supabase = createClient(supabaseUrl, supabaseKey);

//   const { count: projects } = await supabase
//     .from(TABLES.projects)
//     .select("*", { count: "exact", head: true });

//   const { count: charts } = await supabase
//     .from(TABLES.charts)
//     .select("*", { count: "exact", head: true });

//   return { props: { charts, projects } };
// };

const Home = () => {
  return (
    <>
      <HeadTemplate title="Charts around your Firebase data" />

      <Header />
      <Hero />
      {/* <Statistics c={charts} p={projects} /> */}
      <Features />
      <Steps />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
