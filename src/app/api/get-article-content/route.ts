import { BASE_URL } from "@/constants/constants";
import { notion } from "@/services/notion";
import { Article } from "@/types/general";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export const GET = async (req: NextRequest) => {
  const { slug } = Object.fromEntries(req.nextUrl.searchParams);

  try {
    const response = await fetch(`${BASE_URL}/api/get-all-articles`); // Corrected route
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // Handle error
    }
    const { articles } = await response.json();

    let content;

    const article = (articles as Article[]).find(
      (a) => slugify(a.title).toLowerCase() === slug
    );

    if (!article) {
      return NextResponse.json({ content: null });
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

    return NextResponse.json({
      content,
      title: article.title,
      date_published: article.date_published,
      description: article.description,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
