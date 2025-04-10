import { BASE_URL } from "@/constants/constants";
import { Article, BlogPostData } from "@/types/general";

export const getAllArticles = async () => {
  try {
    const { articles } = await (
      await fetch(`${BASE_URL}/api/get-all-articles`)
    ).json();

    return { data: articles as Article[], error: null };
  } catch (e) {
    console.error(e);
    return { data: [] as Article[], error: "A server error occured." };
  }
};

export const getArticleContent = async (slug: string) => {
  try {
    const data: BlogPostData = await (
      await fetch(`${BASE_URL}/api/get-article-content?slug=${slug}`)
    ).json();

    return { data, error: null };
  } catch (e) {
    console.error(e);
    return {
      data: {
        content: [],
        title: "Article not found",
        date_published: new Date().toISOString(),
        description: "",
      },
      error: "A server error occured.",
    };
  }
};
