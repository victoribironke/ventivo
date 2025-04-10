import { app_theme } from "@/atoms/atoms";
import { useAtomValue } from "jotai";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Output = ({ snippet }: { snippet: string }) => {
  const theme = useAtomValue(app_theme);

  return (
    <SyntaxHighlighter
      language="javascript"
      style={theme === "light" ? oneLight : atomDark}
      customStyle={{
        borderRadius: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.5",
        padding: "1rem",
        backgroundColor: theme === "light" ? "#f9f9f9" : "#27272a",
      }}
    >
      {snippet}
    </SyntaxHighlighter>
  );
};

export default Output;
