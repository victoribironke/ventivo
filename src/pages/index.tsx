import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Hero />
      <Databases />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
