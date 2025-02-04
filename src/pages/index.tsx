import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import Databases from "@/components/Databases";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <HeadTemplate />

      <Header />
      <Hero />
      <Databases />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
