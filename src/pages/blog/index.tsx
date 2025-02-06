import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Header from "@/components/Header";
import { PAGES } from "@/constants/constants";
import { Article } from "@/types/general";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import slugify from "slugify";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ventivo.co";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { articles } = await (
      await fetch(`${BASE_URL}/api/get-all-articles`)
    ).json();

    return {
      props: {
        articles,
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        articles: [],
      },
    };
  }
};

const Blog = ({ articles }: { articles: Article[] }) => {
  const ogImage = `${BASE_URL}/api/og?title=${encodeURIComponent("Blog")}`;

  const meta = {
    title: "Blog ~ Ventivo",
    url: PAGES.blog,
    desc: "Blog posts for Ventivo.",
    og_image: ogImage,
  };

  return (
    <>
      <HeadTemplate meta={meta} />

      <Header />

      <main className="mt-40 mb-20 max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-12">
          Blog
        </h1>

        <section className="flex flex-col items-center justify-center gap-8">
          {articles.map((a) => {
            const date = new Date(a.date_published).toLocaleDateString(
              "en-US",
              { dateStyle: "medium" }
            );
            const slug = slugify(a.title).toLowerCase();

            return (
              <div
                key={a.id}
                className="flex flex-col sm:flex-row items-start justify-center gap-2 sm:gap-8 group transition-all w-full"
              >
                <h2 className="text-gray-600 mb-2 sm:mt-4 whitespace-nowrap w-full sm:w-1/6">
                  {date}
                </h2>

                <Link href={PAGES.blog_post(slug)} className="w-full sm:w-5/6">
                  <div className="w-full flex flex-col gap-3 bg-white hover:bg-gray-50 border rounded-lg p-4">
                    <h6 className="text-lg font-medium">{a.title}</h6>

                    <p className="text-gray-600">{a.description}</p>

                    <span className="bg-transparent flex items-center justify-center gap-1 group-hover:gap-2 text-sm w-fit text-blue hover:bg-transparent hover:underline">
                      Read article <FaAnglesRight fill="#3b82f6" size={12} />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
