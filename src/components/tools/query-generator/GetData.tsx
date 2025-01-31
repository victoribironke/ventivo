import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { getGetSnippet, getValueFromTitle } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useAutosizeTextArea } from "@/hooks/general";
import toast from "react-hot-toast";
import { GetDataOptions } from "@/types/tools";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const GetData = () => {
  const [snippet, setSnippet] = useState("");
  const [options, setOptions] = useState<GetDataOptions>({
    type: "get-single-document",
    orderBy: "",
    limit: 0,
    realtime: false,
    filters: [],
  });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [filters, setFilters] = useState({ field: "", operator: "<" });
  const tabs = ["Get single document", "Get multiple documents (collection)"];
  const operators = [
    "<",
    "<=",
    "==",
    ">",
    ">=",
    "!=",
    "array-contains",
    "array-contains-any",
    "in",
    "not-in",
  ];

  const updateOptions = (text: string | number | boolean, which: string) => {
    setOptions((k) => {
      return { ...k, [which]: text };
    });
  };

  useAutosizeTextArea(textAreaRef.current, snippet);

  useEffect(() => setSnippet(getGetSnippet(options)), [options]);

  return (
    <div className="w-full flex items-start justify-center flex-col gap-4">
      <div className="w-full border-2 p-3 rounded-xl flex flex-col gap-4 max-w-2xl">
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

        <div className="flex items-center gap-4">
          <p className="text-sm">Realtime:</p>

          <Switch
            checked={options.realtime}
            onCheckedChange={(e) => updateOptions(e, "realtime")}
            className="data-[state=checked]:bg-firebase-orange"
          />
        </div>

        {options.type === "get-multiple-documents-(collection)" && (
          <>
            <div className="flex items-center gap-4">
              <p className="text-sm mb-2">Order by:</p>
              <Input
                value={options.orderBy}
                onChange={(e) => updateOptions(e.target.value, "orderBy")}
                className="w-2/3"
                placeholder="Field to order by"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm">Limit data:</p>
              <Input
                type="number"
                value={options.limit}
                onChange={(e) =>
                  updateOptions(parseInt(e.target.value), "limit")
                }
                className="w-2/3"
                min={0}
                onBlur={(e) =>
                  !(parseInt(e.target.value) >= 0) && updateOptions(0, "limit")
                }
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm">Filter data:</p>

              <Input
                value={filters.field}
                onChange={(e) =>
                  setFilters((k) => {
                    return { ...k, field: e.target.value };
                  })
                }
                className="w-1/5"
                placeholder="Field to filter by"
              />

              <Select
                value={filters.operator}
                onValueChange={(e) =>
                  setFilters((k) => {
                    return { ...k, operator: e };
                  })
                }
              >
                <SelectTrigger className="w-1/3">
                  <SelectValue placeholder="Select an operator" />
                </SelectTrigger>
                <SelectContent className="border">
                  <SelectGroup>
                    <SelectLabel>Operators</SelectLabel>
                    {operators.map((f, i) => (
                      <SelectItem value={f} key={i} className="cursor-pointer">
                        {f}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                className="w-1/5 bg-firebase-orange hover:bg-firebase-orange/90"
                onClick={() =>
                  filters.field &&
                  setOptions((k) => {
                    return { ...k, filters: [...k.filters, filters] };
                  })
                }
              >
                Add
              </Button>
            </div>

            {options.filters.map((f, i) => (
              <div className="text-sm flex gap-1 items-center" key={i}>
                <p className="bg-firebase-orange py-0.5 px-2 text-white rounded">
                  {f.field}
                </p>
                <p className="bg-firebase-orange py-0.5 px-2 mr-2 text-white rounded">
                  {f.operator}
                </p>
                <button
                  className="bg-gray-100 py-0.5 px-1.5 rounded"
                  onClick={() =>
                    setOptions((k) => {
                      return {
                        ...k,
                        filters: k.filters.filter((g) => g !== f),
                      };
                    })
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="w-full border-2 p-3 rounded-xl flex flex-col gap-2">
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
  );
};

export default GetData;
