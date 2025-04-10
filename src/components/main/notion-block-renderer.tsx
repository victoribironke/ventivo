import { app_theme } from "@/atoms/atoms";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { useAtomValue } from "jotai";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const NotionBlockRenderer = ({
  block,
}: {
  block: PartialBlockObjectResponse | BlockObjectResponse | any;
}) => {
  const { id, type } = block;

  const theme = useAtomValue(app_theme);

  const renderRichText = (richTextArray: any[]) => {
    return richTextArray.map((rt, index) => {
      const { bold, italic, underline, strikethrough, code, color } =
        rt.annotations || {};
      const style: React.CSSProperties = {};

      if (color && color !== "default") {
        style.color = color === "gray" ? "#6b7280" : color; // Tailwind gray-500
      }

      if (rt.href) {
        return (
          <a
            key={index}
            href={rt.href}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "text-blue-600 dark:text-blue-400 underline",
              bold ? "font-bold" : "",
              italic ? "italic" : "",
              underline ? "underline" : "",
              strikethrough ? "line-through" : "",
            ].join(" ")}
          >
            {rt.plain_text}
          </a>
        );
      }

      return (
        <span
          key={index}
          style={style}
          className={[
            bold ? "font-bold" : "",
            italic ? "italic" : "",
            underline ? "underline" : "",
            strikethrough ? "line-through" : "",
            code
              ? "font-mono bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-1 py-0.5 rounded text-sm"
              : "",
          ].join(" ")}
        >
          {rt.plain_text}
        </span>
      );
    });
  };

  switch (type) {
    case "paragraph":
      return (
        <p
          key={id}
          className="text-base text-gray-800 dark:text-gray-300 leading-relaxed mb-4"
        >
          {renderRichText(block.paragraph.rich_text)}
        </p>
      );

    case "heading_1":
      return (
        <h1
          key={id}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );

    case "heading_2":
      return (
        <h2
          key={id}
          className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
        >
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );

    case "heading_3":
      return (
        <h3
          key={id}
          className="text-xl font-medium text-gray-700 dark:text-gray-100 mb-3"
        >
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li
          key={id}
          className="list-disc list-inside text-base text-gray-800 dark:text-gray-300 mb-2"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );

    case "numbered_list_item":
      return (
        <li
          key={id}
          className="list-decimal list-inside text-base text-gray-800 dark:text-gray-300 mb-2"
        >
          {renderRichText(block.numbered_list_item.rich_text)}
        </li>
      );

    case "quote":
      return (
        <blockquote
          key={id}
          className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 mb-4"
        >
          {renderRichText(block.quote.rich_text)}
        </blockquote>
      );

    case "to_do":
      return (
        <div
          key={id}
          className="flex items-start space-x-2 text-base text-gray-800 dark:text-gray-300 mb-3"
        >
          <input
            type="checkbox"
            checked={block.to_do.checked}
            readOnly
            className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 bg-white dark:bg-gray-900 border-gray-400 dark:border-gray-700"
          />
          <span>{renderRichText(block.to_do.rich_text)}</span>
        </div>
      );

    case "code": {
      const codeContent = block.code.rich_text
        .map((rt: any) => rt.plain_text)
        .join("");
      const language = block.code.language || "plaintext";

      return (
        <div key={id} className="my-4">
          {block.code.language && (
            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">
              Language: {block.code.language}
            </span>
          )}
          <SyntaxHighlighter
            language={language}
            style={theme === "light" ? oneLight : vscDarkPlus}
            customStyle={{
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              lineHeight: "1.5",
              padding: "1rem",
              backgroundColor: theme === "light" ? "#f9f9f9" : "#1e1e1e",
            }}
          >
            {codeContent}
          </SyntaxHighlighter>
        </div>
      );
    }

    case "image":
      return (
        <img
          key={id}
          src={
            block.image.type === "external"
              ? block.image.external.url
              : block.image.file.url
          }
          alt={block.image.caption[0] ? block.image.caption[0].plain_text : ""}
          className="w-full my-4 rounded-lg"
        />
      );

    case "divider":
      return (
        <hr
          key={id}
          className="border-t border-gray-300 dark:border-gray-700 my-6"
        />
      );

    default:
      return (
        <div key={id} className="text-sm text-gray-500 dark:text-gray-400">
          Unsupported block type: {type}
        </div>
      );
  }
};

export default NotionBlockRenderer;
