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
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import {
  NewPostgresChartProps,
  PostgresChartInfo,
  PostgresProjectInfo,
} from "@/types/dashboard";
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
import { getColumns } from "@/services/postgres";

const NewPostgresChart = ({ p, s, tables, sUC }: NewPostgresChartProps) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingColumns, setLoadingColumns] = useState(false);
  const [columns, setColumns] = useState<string[]>([]);
  const userSession = useAtomValue(user_session);
  const buttons = [{ text: "Bar" }, { text: "Pie" }, { text: "Line" }];
  const [formData, setFormData] = useState<PostgresChartInfo>({
    table: "",
    type: "bar",
    column: "",
    name: "",
    filters: [],
  });

  const updateFormData = (text: string, which: string) => {
    setFormData((k) => {
      return { ...k, [which]: text };
    });
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
            <div className="w-full flex flex-col gap-2">
              <Label>Table</Label>
              <Select
                value={formData.table}
                onValueChange={(e) => updateFormData(e, "table")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a table" />
                </SelectTrigger>
                <SelectContent className="border">
                  <SelectGroup>
                    <SelectLabel>Tables</SelectLabel>
                    {tables.map((f, i) => (
                      <SelectItem value={f} key={i} className="cursor-pointer">
                        {f}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 gap-2"
              onClick={() =>
                getColumns(
                  p.project_info as PostgresProjectInfo,
                  formData.table,
                  setLoadingColumns,
                  setColumns
                )
              }
              disabled={loadingColumns || !formData.table}
            >
              {loadingColumns && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Get columns
            </Button>
          </div>

          {columns.length > 0 && (
            <>
              <div className="w-full flex flex-col gap-2">
                <Label>Column</Label>
                <Select
                  value={formData.column}
                  onValueChange={(e) => updateFormData(e, "column")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a column" />
                  </SelectTrigger>
                  <SelectContent className="border">
                    <SelectGroup>
                      <SelectLabel>Column</SelectLabel>
                      {columns.map((c, i) => (
                        <SelectItem
                          value={c}
                          key={i}
                          className="cursor-pointer"
                        >
                          {c}
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

export default NewPostgresChart;
