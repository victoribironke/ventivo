import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function NotionBlockRenderer({
  block,
}: {
  block: PartialBlockObjectResponse | BlockObjectResponse | any;
}) {
  const { id, type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p key={id} className="text-base text-gray-800 leading-relaxed mb-4">
          {block.paragraph.rich_text.map((rt: any) => rt.plain_text).join("")}
        </p>
      );

    case "heading_1":
      return (
        <h1 key={id} className="text-3xl font-bold text-gray-900 mb-6">
          {block.heading_1.rich_text.map((rt: any) => rt.plain_text).join("")}
        </h1>
      );

    case "heading_2":
      return (
        <h2 key={id} className="text-2xl font-semibold text-gray-900 mb-4">
          {block.heading_2.rich_text.map((rt: any) => rt.plain_text).join("")}
        </h2>
      );

    case "heading_3":
      return (
        <h3 key={id} className="text-xl font-medium text-gray-900 mb-3">
          {block.heading_3.rich_text.map((rt: any) => rt.plain_text).join("")}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li
          key={id}
          className="list-disc list-inside text-base text-gray-800 mb-2"
        >
          {block.bulleted_list_item.rich_text
            .map((rt: any) => rt.plain_text)
            .join("")}
        </li>
      );

    case "numbered_list_item":
      return (
        <li
          key={id}
          className="list-decimal list-inside text-base text-gray-800 mb-2"
        >
          {block.numbered_list_item.rich_text
            .map((rt: any) => rt.plain_text)
            .join("")}
        </li>
      );

    case "image":
      return (
        <img
          key={id}
          src={
            block.image.type === "external"
              ? block.image.external.url
              : block.image.file.url
          }
          alt="Notion Content"
          className="w-full h-auto rounded-lg shadow-md my-6"
        />
      );

    case "video":
      return (
        <video key={id} controls className="w-full rounded-lg shadow-md my-6">
          <source
            src={
              block.video.type === "external"
                ? block.video.external.url
                : block.video.file.url
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      );

    case "code":
      const codeContent = block.code.rich_text
        .map((rt: any) => rt.plain_text)
        .join("");
      const language = block.code.language || "plaintext"; // Use 'plaintext' as a fallback

      return (
        <div key={id} className="my-4">
          {block.code.language && (
            <span className="text-sm text-gray-400 block mb-2">
              Language: {block.code.language}
            </span>
          )}

          <SyntaxHighlighter
            language={language}
            // style={vs}
            customStyle={{
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              lineHeight: "1.5",
              padding: "1rem",
              backgroundColor: "#f9fafb",
            }}
          >
            {codeContent}
          </SyntaxHighlighter>
        </div>
      );

    case "quote":
      return (
        <blockquote
          key={id}
          className="border-l-4 border-gray-400 pl-4 italic text-gray-700 mb-4"
        >
          {block.quote.rich_text.map((rt: any) => rt.plain_text).join("")}
        </blockquote>
      );

    case "to_do":
      return (
        <div
          key={id}
          className="flex items-center space-x-2 text-base text-gray-800 mb-3"
        >
          <input
            type="checkbox"
            checked={block.to_do.checked}
            readOnly
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span>
            {block.to_do.rich_text.map((rt: any) => rt.plain_text).join("")}
          </span>
        </div>
      );

    case "divider":
      return <hr key={id} className="border-t border-gray-300 my-6" />;

    case "embed":
      return (
        <iframe
          key={id}
          src={block.embed.url}
          className="w-full h-96 rounded-lg shadow-md my-6"
          allowFullScreen
        />
      );

    case "file":
      return (
        <a
          key={id}
          href={
            block.file.type === "external"
              ? block.file.external.url
              : block.file.file.url
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Download File
        </a>
      );

    case "bookmark":
      return (
        <a
          key={id}
          href={block.bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition"
        >
          <p className="text-blue-500 underline">{block.bookmark.url}</p>
        </a>
      );

    default:
      return (
        <div key={id} className="text-sm text-gray-500">
          Unsupported block type: {type}
        </div>
      );
  }
}
