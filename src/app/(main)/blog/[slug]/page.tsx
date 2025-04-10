import FirebaseProjectPage from "@/components/dashboard/firebase-project";
import BlogPost from "@/components/main/blog-post";
import { BASE_URL, PAGES } from "@/constants/constants";
import { getArticleContent } from "@/lib/notion";
import { BlogPostData } from "@/types/general";
import { Metadata } from "next";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await props.params;

  const data: BlogPostData = await (
    await fetch(`${BASE_URL}/api/get-article-content?slug=${slug}`)
  ).json();

  if (!data.content)
    return {
      title: "Article not found ~ Ventivo",
      description: "This article was not found.",
      openGraph: {
        title: "Article not found ~ Ventivo",
        description: "This article was not found.",
        type: "website",
        url: BASE_URL + PAGES.blog_post(slug),
        images: [
          {
            url: `${BASE_URL}/api/og?title=${encodeURIComponent("")}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Article not found ~ Ventivo",
        description: "This article was not found.",

        images: [
          {
            url: `${BASE_URL}/api/og?title=${encodeURIComponent("")}`,
          },
        ],
      },
    };

  return {
    title: `${data.title} ~ Ventivo`,
    description: data.description,
    openGraph: {
      title: `${data.title} ~ Ventivo`,
      description: data.description,
      type: "website",
      url: BASE_URL + PAGES.blog_post(slug),
      images: [
        {
          url: `${BASE_URL}/api/og?title=${encodeURIComponent(data.title)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} ~ Ventivo`,
      description: data.description,

      images: [
        {
          url: `${BASE_URL}/api/og?title=${encodeURIComponent(data.title)}`,
        },
      ],
    },
  };
};

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const { data } = await getArticleContent(slug);

  if (!data) return <></>;

  return <BlogPost data={data} />;
};

export default Page;
