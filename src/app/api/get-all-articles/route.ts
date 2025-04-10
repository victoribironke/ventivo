import { notion } from "@/services/notion";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const databaseId = "17a257ef5ba780e4a2ddffbf1b834a8d";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
    });

    const articles = response.results.map((article: any) => {
      const { id, properties } = article;

      return {
        id,
        title: properties?.Title.title[0].plain_text || "",
        date_published: properties?.Date.date.start || "",
        description: properties?.Description.rich_text[0]?.plain_text || "",
      };
    });

    return NextResponse.json({ articles });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
