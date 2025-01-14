import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function NotionBlockRenderer({
  block,
}: {
  block: PartialBlockObjectResponse | BlockObjectResponse | any;
}) {
  const { id, type } = block;

  // Helper function to render rich text with links
  const renderRichText = (richText: any[]) => {
    return richText.map((rt: any, index: number) => {
      if (rt.href) {
        return (
          <a
            key={index}
            href={rt.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {rt.plain_text}
          </a>
        );
      }
      return <span key={index}>{rt.plain_text}</span>;
    });
  };

  switch (type) {
    case "paragraph": {
      return (
        <p key={id} className="text-base text-gray-800 leading-relaxed mb-4">
          {renderRichText(block.paragraph.rich_text)}
        </p>
      );
    }

    case "heading_1": {
      return (
        <h1 key={id} className="text-3xl font-bold text-gray-900 mb-6">
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    }

    case "heading_2": {
      return (
        <h2 key={id} className="text-2xl font-semibold text-gray-900 mb-4">
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    }

    case "heading_3": {
      return (
        <h3 key={id} className="text-xl font-medium text-gray-900 mb-3">
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    }

    case "bulleted_list_item": {
      return (
        <li
          key={id}
          className="list-disc list-inside text-base text-gray-800 mb-2"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );
    }

    case "numbered_list_item": {
      return (
        <li
          key={id}
          className="list-decimal list-inside text-base text-gray-800 mb-2"
        >
          {renderRichText(block.numbered_list_item.rich_text)}
        </li>
      );
    }

    case "code": {
      const codeContent = block.code.rich_text
        .map((rt: any) => rt.plain_text)
        .join("");
      const language = block.code.language || "plaintext";

      return (
        <div key={id} className="my-4">
          {block.code.language && (
            <span className="text-sm text-gray-400 block mb-2">
              Language: {block.code.language}
            </span>
          )}
          <SyntaxHighlighter
            language={language}
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
    }

    case "quote": {
      return (
        <blockquote
          key={id}
          className="border-l-4 border-gray-400 pl-4 italic text-gray-700 mb-4"
        >
          {renderRichText(block.quote.rich_text)}
        </blockquote>
      );
    }

    case "to_do": {
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
          <span>{renderRichText(block.to_do.rich_text)}</span>
        </div>
      );
    }

    case "divider": {
      return <hr key={id} className="border-t border-gray-300 my-6" />;
    }

    case "bookmark": {
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
    }

    default: {
      return (
        <div key={id} className="text-sm text-gray-500">
          Unsupported block type: {type}
        </div>
      );
    }
  }
}
