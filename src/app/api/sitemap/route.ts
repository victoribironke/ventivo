import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { getAllArticles } from "@/lib/notion";

export const GET = async (request: Request) => {
  const staticRoutes = [
    { url: "/", changefreq: "daily", priority: 0.8 },
    { url: "/privacy-policy", changefreq: "daily", priority: 0.8 },
    { url: "/terms", changefreq: "daily", priority: 0.8 },
    { url: "/blog", changefreq: "daily", priority: 0.8 },
    { url: "/tools", changefreq: "daily", priority: 0.8 },
  ];

  const { data } = await getAllArticles();

  const links = [
    ...staticRoutes,
    ...data.map((post) => {
      return {
        url: `/blog/${slugify(post.title).toLowerCase()}`,
        changefreq: "weekly",
        priority: 0.6,
      };
    }),
  ];

  const stream = new SitemapStream({
    hostname: `https://${request.headers.get("host") || "ventivo.co"}`,
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false,
    },
  });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
