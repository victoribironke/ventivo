"use client";

import { BlogPostData } from "@/types/general";
import NotionBlockRenderer from "./notion-block-renderer";

const BlogPost = ({ data }: { data: BlogPostData }) => {
  const date = new Date(data.date_published).toLocaleDateString("en-US", {
    dateStyle: "full",
  });

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
