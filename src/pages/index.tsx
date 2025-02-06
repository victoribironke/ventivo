import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Database } from "lucide-react";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Header />
      <Hero />
      <Steps />

      {/* <Databases />
      <Pricing />
      <Footer /> */}
    </>
  );
};

export default Home;
