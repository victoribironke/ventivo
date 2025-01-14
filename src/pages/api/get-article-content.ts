import { notion } from "@/services/notion";
import { Article } from "@/types/general";
import { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  try {
    const BASE_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://ventivo.co";

    const { articles } = await (
      await fetch(`${BASE_URL}/api/get-all-articles`)
    ).json();

    let content;

    const article = (articles as Article[]).find(
      (a) => slugify(a.title).toLowerCase() === slug
    );

    if (!article) {
      throw new Error("Invalid slug.");
    }

    let blocks = await notion.blocks.children.list({
      block_id: article.id,
    });

    content = [...blocks.results];

    while (blocks.has_more) {
      blocks = await notion.blocks.children.list({
        block_id: article.id,
        start_cursor: blocks.next_cursor as string | undefined,
      });

      content = [...content, ...blocks.results];
    }

    res.status(200).json({
      content,
      title: article.title,
      date_published: article.date_published,
      description: article.description,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
