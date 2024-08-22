import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getAddSnippet, getValueFromTitle } from "@/lib/utils";
import { AddDataOptions } from "@/types/tools";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import useAutosizeTextArea from "@/hooks/general";
import toast from "react-hot-toast";

const AddData = () => {
  const [snippet, setSnippet] = useState("");
  const [options, setOptions] = useState<AddDataOptions>({
    type: "set-document-(with-known-document-id)",
  });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const tabs = [
    "Set document (with known document ID)",
    "Add document (with unknown document ID)",
  ];

  const updateOptions = (text: string | number | boolean, which: string) => {
    setOptions((k) => {
      return { ...k, [which]: text };
    });
  };

  useAutosizeTextArea(textAreaRef.current, snippet);

  useEffect(() => setSnippet(getAddSnippet(options)), [options]);

  return (
    <div className="w-full flex items-start justify-center flex-col gap-4">
      <div className="w-full border p-3 rounded-lg flex flex-col gap-4 max-w-2xl">
        <p>Options</p>

        <RadioGroup
          defaultValue={getValueFromTitle(tabs[0])}
          className="text-sm flex flex-row flex-wrap"
          onValueChange={(e) => updateOptions(e, "type")}
        >
          {tabs.map((t, i) => {
            const value = getValueFromTitle(t);

            return (
              <div className="flex items-center space-x-2" key={i}>
                <RadioGroupItem value={value} id={value} />
                <label htmlFor={value}>{t}</label>
              </div>
            );
          })}
        </RadioGroup>
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

export default AddData;
