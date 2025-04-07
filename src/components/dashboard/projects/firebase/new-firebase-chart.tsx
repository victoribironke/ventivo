import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn, getCollectionFields } from "@/lib/utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FirebaseChartInfo, NewFirebaseChartProps } from "@/types/dashboard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/services/supabase";
import { TABLES } from "@/constants/constants";
import { user_session } from "@/atoms/atoms";
import { useAtomValue } from "jotai";

const NewFirebaseChart = ({ db, p, s, sUC }: NewFirebaseChartProps) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [filters, setFilters] = useState({
  //   field: "",
  //   operator: "<",
  //   value: "",
  // });
  const [loadingFields, setLoadingFields] = useState(false);
  const [fields, setFields] = useState<string[]>([]);
  const userSession = useAtomValue(user_session);
  const buttons = [{ text: "Bar" }, { text: "Pie" }, { text: "Line" }];
  const [formData, setFormData] = useState<FirebaseChartInfo>({
    pathToCollection: "",
    type: "bar",
    field: "",
    name: "",
    filters: [],
  });

  const updateFormData = (text: string, which: string) => {
    setFormData((k) => {
      return { ...k, [which]: text };
    });
  };

  const getFields = async () => {
    setLoadingFields(true);

    const path = formData.pathToCollection.split("/");

    if (path.length % 2 === 0) {
      toast.error("A collection path must have an odd number of segments.");

      return;
    }

    const res = await getCollectionFields(db, formData.pathToCollection);

    setLoadingFields(false);

    if (res === "Failed to get fields.") {
      toast.error(res);
      return;
    }

    setFields(res.sort((a, b) => (a < b ? 1 : -1)));
  };

  const saveChart = async () => {
    setDisabled(true);
    setLoading(true);

    const { data, error } = await supabase
      .from(TABLES.charts)
      .insert({
        chart_info: formData,
        project_id: p.id,
        owner_id: userSession?.user.id,
      })
      .select();

    let err;

    if (data) {
      const { error: e } = await supabase
        .from(TABLES.projects)
        .update({ charts: [...p.charts, data[0].id] })
        .eq("owner_id", userSession?.user.id)
        .eq("slug", s);

      err = e;
    }

    setDisabled(false);
    setLoading(false);

    if (error || err) {
      toast.error("A server error occured.");
      return;
    }

    toast.success("Chart added.");
    // reload();
    sUC(`Created ${formData.name} @ ${Date.now()}`);
  };

  useEffect(() => {
    for (const i in formData) {
      if (formData[i as keyof typeof formData] === "") {
        setDisabled(true);
        return;
      }
    }

    setDisabled(false);
  }, [formData]);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 flex items-center justify-center gap-2">
          <FiPlus className="text-lg" />
          New chart
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>New chart</DialogTitle>
        </DialogHeader>

        <div className="w-full flex items-center justify-center flex-col gap-4 my-2 h-auto max-h-[calc(100vh-10rem)] overflow-x-scroll p-0.5">
          <div className="w-full flex items-end justify-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <Label htmlFor="path">Path to the collection *</Label>
              <Input
                value={formData.pathToCollection}
                name="path"
                onChange={(e) =>
                  updateFormData(e.target.value, "pathToCollection")
                }
              />
            </div>

            <Button
              className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 gap-2"
              onClick={getFields}
              disabled={loadingFields || !formData.pathToCollection}
            >
              {loadingFields && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Get fields
            </Button>
          </div>

          {fields.length > 0 && (
            <>
              <div className="flex flex-col gap-2 w-full">
                <Label>Field</Label>
                <Select
                  value={formData.field}
                  onValueChange={(e) => updateFormData(e, "field")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a field" />
                  </SelectTrigger>
                  <SelectContent className="border">
                    <SelectGroup>
                      <SelectLabel>Fields</SelectLabel>
                      {fields.map((f, i) => (
                        <SelectItem
                          value={f}
                          key={i}
                          className="cursor-pointer"
                        >
                          {f}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full flex items-center justify-center gap-4">
                {buttons.map((b, i) => (
                  <Button
                    className={cn(
                      "border font-normal w-full flex items-center justify-center gap-2",
                      formData.type === b.text.toLowerCase()
                        ? "bg-black text-white border-transparent hover:bg-black/90"
                        : "bg-white text-black hover:bg-white/90"
                    )}
                    key={i}
                    onClick={() => updateFormData(b.text.toLowerCase(), "type")}
                  >
                    {b.text} chart
                  </Button>
                ))}
              </div>

              {/* <div className="flex items-center gap-4">
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
                <SelectContent className={cn("border", bg.className)}>
                  <SelectGroup>
                    <SelectLabel>Operators</SelectLabel>
                    {OPERATORS.map((f, i) => (
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
            </div> */}
            </>
          )}
        </div>

        <DialogFooter className="flex flex-col justify-center gap-4 sm:gap-2">
          <Input
            value={formData.name}
            placeholder="Chart name *"
            onChange={(e) => updateFormData(e.target.value, "name")}
          />

          <Button
            className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 gap-2"
            disabled={disabled}
            onClick={saveChart}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
            Create chart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewFirebaseChart;
