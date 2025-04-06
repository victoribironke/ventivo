import { Button } from "@/components/ui/button";
import { TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { DeleteChartProps } from "@/types/dashboard";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoTrashOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteChart = ({ chart, p, sUC }: DeleteChartProps) => {
  const [loading, setLoading] = useState(false);

  const deleteChart = async () => {
    setLoading(true);

    const { error } = await supabase
      .from(TABLES.charts)
      .delete()
      .eq("id", chart.id);

    const { error: e } = await supabase
      .from(TABLES.projects)
      .update({ charts: p.charts.filter((c) => c !== chart.id) })
      .eq("id", chart.project_id);

    if (error || e) {
      toast.error("A server error occured.");
      return;
    }

    setLoading(false);
    sUC(`Deleted ${chart.chart_info.name} @ ${Date.now()}`);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-white font-normal w-fit hover:bg-white/90 border text-red">
          <IoTrashOutline />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>Delete a chart</DialogTitle>
        </DialogHeader>

        <div className="my-2">
          Are you sure you want to delete{" "}
          <span className="font-bold">`{chart.chart_info.name}`</span>?
        </div>

        <DialogFooter className="flex flex-col justify-center gap-4 sm:gap-2">
          {/* <Button
            className="bg-white text-black hover:bg-white hover:text-black border-0 w-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button> */}
          <Button
            className="bg-red text-white hover:bg-red hover:text-white border-0 gap-2 w-full"
            disabled={loading}
            onClick={deleteChart}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}{" "}
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteChart;
