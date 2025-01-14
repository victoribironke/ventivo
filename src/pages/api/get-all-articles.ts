import { notion } from "@/services/notion";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const databaseId = "17a257ef5ba780e4a2ddffbf1b834a8d";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
    });

    const articles = response.results.map((article) => {
      const { id, properties } = article as any;

      return {
        id,
        title: properties?.Title.title[0].plain_text || "",
        date_published: properties?.Date.date.start || "",
        description: properties?.Description.rich_text[0]?.plain_text || "",
      };
    });

    res.status(200).json({ articles });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
};
