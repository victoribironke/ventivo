import { Button } from "@/components/ui/button";
import { PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { DeleteProjectProps } from "@/types/dashboard";
import { useRouter } from "next/navigation";
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

const DeleteProject = ({ p }: DeleteProjectProps) => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const deleteProject = async () => {
    setLoading(true);

    const { error: e } = await supabase
      .from(TABLES.projects)
      .delete()
      .eq("id", p.id);

    const { error } = await supabase
      .from(TABLES.charts)
      .delete()
      .in("id", p.charts);

    if (error || e) {
      toast.error("A server error occured.");
      return;
    }

    setLoading(false);
    push(PAGES.dashboard);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit border bg-white hover:bg-white/90 dark:bg-black hover:dark:bg-black/90 text-red">
          <IoTrashOutline />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>Delete this project</DialogTitle>
        </DialogHeader>

        <div className="my-2">
          Are you sure you want to delete{" "}
          <span className="font-bold">`{p.project_info.projectName}`</span>?
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
            onClick={deleteProject}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}{" "}
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProject;
