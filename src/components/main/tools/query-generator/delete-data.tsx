"use client";

import { getDeleteSnippet } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useAutosizeTextArea } from "@/hooks/general";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DeleteData = () => {
  const [snippet, setSnippet] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, snippet);

  useEffect(() => setSnippet(getDeleteSnippet()), []);

  return (
    <div className="w-full flex items-start justify-center flex-col gap-4">
      <div className="w-full border p-3 rounded-xl flex flex-col gap-4">
        <p>Options</p>
      </div>

      <div className="w-full p-3 rounded-xl border flex flex-col gap-2">
        <p>Output</p>

        {/* <textarea
          value={snippet}
          className="text-sm font-mono p-3 bg-gray-50 rounded-md resize-none"
          disabled
          rows={1}
          ref={textAreaRef}
        /> */}

        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={{
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            padding: "1rem",
            backgroundColor: "#27272a",
          }}
        >
          {snippet}
        </SyntaxHighlighter>

        <Button
          className="w-1/5 bg-firebase-orange hover:bg-firebase-orange/90 text-white hover:text-white"
          onClick={() => {
            navigator.clipboard.writeText(snippet);
            toast.success("Copied to clipboard.");
          }}
        >
          Copy snippet
        </Button>
      </div>
    </div>
  );
};

export default DeleteData;
