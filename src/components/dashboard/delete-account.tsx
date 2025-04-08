import { user_session } from "@/atoms/atoms";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { useAtomValue } from "jotai";

const DeleteAccount = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const userSession = useAtomValue(user_session);

  const deleteAccount = async () => {
    setLoading(true);

    const { data: projects, error } = await supabase
      .from(TABLES.projects)
      .select()
      .eq("owner_id", userSession?.user.id);

    if (projects) {
      const { error: e1 } = await supabase
        .from(TABLES.projects)
        .delete()
        .in(
          "id",
          projects.map((p) => p.id)
        );

      const { error: e2 } = await supabase
        .from(TABLES.charts)
        .delete()
        .in(
          "project_id",
          projects.map((p) => p.id)
        );

      if (e1 || e2) {
        toast.error("A server error occured.");
        return;
      }
    }

    if (error) {
      toast.error("A server error occured.");
      return;
    }

    setLoading(false);
    push(PAGES.dashboard);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red font-normal w-fit hover:bg-red/90 text-white flex items-center justify-center gap-2">
          <FiAlertTriangle /> Delete data
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full border">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete your data</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your data? This action will delete
            all your projects and charts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-black text-white hover:bg-black hover:text-white w-full">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red text-white hover:bg-red hover:text-white gap-2 w-full"
            disabled={loading}
            onClick={deleteAccount}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}{" "}
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAccount;
