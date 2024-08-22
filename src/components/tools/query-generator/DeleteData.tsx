import { getDeleteSnippet } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import useAutosizeTextArea from "@/hooks/general";
import toast from "react-hot-toast";

const DeleteData = () => {
  const [snippet, setSnippet] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, snippet);

  useEffect(() => setSnippet(getDeleteSnippet()), []);

  return (
    <div className="w-full flex items-start justify-center flex-col gap-4">
      <div className="w-full border p-3 rounded-lg flex flex-col gap-4 max-w-2xl">
        <p>Options</p>
      </div>

      <div className="w-full border p-3 rounded-lg flex flex-col gap-2">
        <p>Output</p>

        <textarea
          value={snippet}
          className="text-sm font-mono p-3 bg-gray-100 rounded-md resize-none"
          disabled
          rows={1}
          ref={textAreaRef}
        />

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
  );
};

export default DeleteData;
