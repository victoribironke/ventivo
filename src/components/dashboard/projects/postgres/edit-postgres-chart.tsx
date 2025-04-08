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
import { PostgresChartInfo, EditPostgresChartProps } from "@/types/dashboard";
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
import { BsGear } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { getColumns } from "@/services/postgres";

const EditPostgresChart = ({
  tables,
  chart,
  sUC,
  project_info,
}: EditPostgresChartProps) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingColumns, setLoadingColumns] = useState(false);
  const [columns, setColumns] = useState<string[]>([]);
  const buttons = [{ text: "Bar" }, { text: "Pie" }, { text: "Line" }];
  const [formData, setFormData] = useState<PostgresChartInfo>({
    table: (chart.chart_info as PostgresChartInfo).table,
    type: chart.chart_info.type,
    column: (chart.chart_info as PostgresChartInfo).column,
    name: chart.chart_info.name,
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

    const { error } = await supabase
      .from(TABLES.charts)
      .update({ chart_info: formData })
      .eq("id", chart.id);

    setDisabled(false);
    setLoading(false);

    if (error) {
      toast.error("A server error occured.");
      return;
    }

    toast.success("Chart saved.");
    sUC(`Updated ${chart.chart_info.name} @ ${Date.now()}`);
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
      <DialogTrigger asChild>
        <Button className="w-fit border bg-black hover:bg-black/90">
          <BsGear className="text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit chart{" "}
            <Badge className="bg-firebase-orange text-white ml-1">
              {chart.chart_info.name}
            </Badge>
          </DialogTitle>
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
                  project_info,
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
                        ? "bg-firebase-orange text-white border-transparent hover:bg-firebase-orange/90"
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
            Save chart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPostgresChart;
