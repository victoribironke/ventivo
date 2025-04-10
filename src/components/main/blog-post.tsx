"use client";

import { BlogPostData } from "@/types/general";
import NotionBlockRenderer from "./notion-block-renderer";

const BlogPost = ({ data }: { data: BlogPostData }) => {
  const d = data.date_published || new Date().toISOString();

  const date = new Date(d).toLocaleDateString("en-US", {
    dateStyle: "full",
  });

  if (!data.content)
    return (
      <>
        <h1 className="w-full max-w-3xl text-center text-3xl md:text-4xl font-semibold px-4">
          Article not found
        </h1>

        <p className="w-full text-center text-muted-foreground px-4">{date}</p>
      </>
    );

  return (
    <>
      <h1 className="w-full max-w-3xl text-center text-3xl md:text-4xl font-semibold px-4">
        {data.title}
      </h1>

      <p className="w-full text-center text-muted-foreground px-4">{date}</p>

      <div className="w-full max-w-3xl space-y-6">
        {data.content.map((block) => (
          <NotionBlockRenderer key={block.id} block={block} />
        ))}
      </div>
    </>
  );
};

export default BlogPost;
