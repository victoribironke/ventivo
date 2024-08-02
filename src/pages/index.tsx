import HeadTemplate from "@/components/general/HeadTemplate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";

// export const getStaticProps = async () => {
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabase = createClient(supabaseUrl, supabaseKey);
// const { count: projects } = await supabase
//   .from(TABLES.projects)
//   .select("*", { count: "exact", head: true });
// const { count: charts } = await supabase
//   .from(TABLES.charts)
//   .select("*", { count: "exact", head: true });
// let country;
// try {
//   const res = await fetch("http://ip-api.com/json");
//   const json: UserLocation = await res.json();
//   if (json.status === "success") country = json.country;
//   else country = "Nigeria";
// } catch (e) {
//   country = "Nigeria";
// }
// return { props: { country } };
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
