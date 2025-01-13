import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { PAGES, TABLES } from "@/constants/constants";
import Link from "next/link";

const Blog = () => {
  const meta = {
    title: "Blog ~ Ventivo",
    url: PAGES.blog,
    desc: "Blog posts for Ventivo.",
    og_image: "https://ventivo.co/og-image.png",
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <Hero />

      <main className="my-20 max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-12">
          Blog
        </h1>

        <div className="flex flex-col items-center justify-center gap-8">
          <section className="flex flex-col sm:flex-row items-start justify-center gap-2 sm:gap-8">
            <h2 className="text-gray-600 mb-2 sm:mt-4 whitespace-nowrap w-full sm:w-1/6">
              Jan 13, 2025
            </h2>

            <Link href={""} className="w-full sm:w-5/6">
              <div className="w-full flex flex-col gap-2 bg-white hover:bg-gray-50 border transition rounded-lg p-4">
                <h6 className="text-lg font-medium">
                  This is the title of the blog
                </h6>

                <p className="text-gray-600">
                  Welcome to Ventivo. These Terms of Service govern your use of
                  our application and services. By using Ventivo, you agree to
                  comply with and be bound by these terms.
                </p>

                <Button className="bg-transparent w-fit text-blue hover:bg-transparent hover:underline p-0">
                  Read article
                </Button>
              </div>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
