import NotionBlockRenderer from "@/components/blog/NotionBlockRenderer";
import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import { PAGES } from "@/constants/constants";
import { BlogPostData } from "@/types/general";
import { GetServerSideProps } from "next";
import slugify from "slugify";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ventivo.co";

  try {
    const data = await (
      await fetch(`${BASE_URL}/api/get-article-content?slug=${slug}`)
    ).json();

    if (!data.content) {
      return {
        props: {},
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
      notFound: true,
    };
  }
};

const BlogPost = ({ data }: { data: BlogPostData }) => {
  // UPDATE THIS WHEN THE DATA COMES BACK
  const meta = {
    title: data.title,
    url: PAGES.blog_post(slugify(data.title).toLowerCase()),
    desc: data.description,
    og_image: "https://ventivo.co/og-image.png", // figure out a way to get this
  };

  const date = new Date(data.date_published).toLocaleDateString("en-US", {
    dateStyle: "full",
  });

  return (
    <>
      <HeadTemplate meta={meta} />

      <Hero />

      <main className="my-20 max-w-3xl w-full space-y-4">
        <h1 className="w-full text-center text-4xl font-bold text-gray-800 px-4">
          {data.title}
        </h1>

        <p className="w-full text-center text-gray-400 px-4">{date}</p>

        <div className="p-4 space-y-6">
          {data.content.map((block) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
