import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { PAGES, TABLES } from "@/constants/constants";
import { Article, BlogPostData } from "@/types/general";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
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
  //   console.log(data);
  // UPDATE THIS WHEN THE DATA COMES BACK
  const meta = {
    title: data.title,
    url: PAGES.blog_post(slugify(data.title).toLowerCase()),
    desc: data.description,
    og_image: "https://ventivo.co/og-image.png", // figure out a way to get this
  };

  //   const {
  //     query: { slug },
  //   } = useRouter();
  //   console.log(data.content[0]);

  return (
    <>
      <HeadTemplate meta={meta} />

      <Hero />

      <main className="my-20 max-w-3xl w-full"></main>

      <Footer />
    </>
  );
};

export default BlogPost;
