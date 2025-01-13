export type HeadTemplateProps = {
  title?: string;
  meta?: {
    title: string;
    url: string;
    desc: string;
    og_image: string;
  };
};

export type PageLoaderProps = {
  type: "full" | "small";
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  date_published: string;
  description: string;
};
