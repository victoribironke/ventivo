import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FiPlus } from "react-icons/fi";
import NewFirebaseProject from "./new/firebase";
import NewPostgresProject from "./new/postgres";

const NewProject = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 flex items-center justify-center gap-2">
          <FiPlus className="text-lg" />
          New project
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
          <DialogDescription className="text-firebase-orange">
            Select a data source to create a new project
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-4 items-center justify-center w-full gap-4 my-2 h-auto max-h-[calc(100vh-15rem)] overflow-x-scroll p-0.5">
          <NewFirebaseProject />
          <NewPostgresProject />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewProject;
