import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type PageLoaderProps = {
  type: "full" | "small";
};

// export type UserLocation = {
//   status: "success" | undefined;
//   country: string;
//   countryCode: string;
//   region: string;
//   regionName: string;
//   city: string;
//   zip: string;
//   lat: number;
//   lon: number;
//   timezone: string;
//   isp: string;
//   org: string;
//   as: string;
//   query: string;
// };

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
