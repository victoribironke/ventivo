import { getDeleteSnippet } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useAutosizeTextArea } from "@/hooks/general";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const DeleteData = () => {
  const [snippet, setSnippet] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, snippet);

  useEffect(() => setSnippet(getDeleteSnippet()), []);

  return (
    <div className="w-full flex items-start justify-center flex-col gap-4">
      <div className="p-1 border bg-gray-100 rounded-xl w-full max-w-2xl">
        <div className="w-full border-2 p-3 rounded-lg bg-white flex flex-col gap-4">
          <p>Options</p>
        </div>
      </div>

      <div className="p-1 border bg-gray-100 rounded-xl w-full">
        <div className="w-full border p-3 rounded-lg flex flex-col gap-2 bg-white">
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
            // style={vs}
            customStyle={{
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              lineHeight: "1.5",
              padding: "1rem",
              backgroundColor: "#f9fafb",
            }}
          >
            {snippet}
          </SyntaxHighlighter>

          <Button
            className="w-1/5 bg-firebase-orange hover:bg-firebase-orange/90"
            onClick={() => {
              navigator.clipboard.writeText(snippet);
              toast.success("Copied to clipboard.");
            }}
          >
            Copy snippet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteData;
