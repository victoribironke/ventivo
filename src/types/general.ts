import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

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
  date_published: string;
  description: string;
};

export type BlogPostData = {
  content: (PartialBlockObjectResponse | BlockObjectResponse)[];
  title: string;
  date_published: string;
  description: string;
};

export type Language =
  | "markup"
  | "bash"
  | "clike"
  | "c"
  | "cpp"
  | "css"
  | "javascript"
  | "jsx"
  | "coffeescript"
  | "actionscript"
  | "css-extr"
  | "diff"
  | "git"
  | "go"
  | "graphql"
  | "handlebars"
  | "json"
  | "less"
  | "makefile"
  | "markdown"
  | "objectivec"
  | "ocaml"
  | "python"
  | "reason"
  | "sass"
  | "scss"
  | "sql"
  | "stylus"
  | "tsx"
  | "typescript"
  | "wasm"
  | "yaml";
