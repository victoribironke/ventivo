import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Feedback = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="cursor-pointer text-sm py-1 px-2.5 rounded-md font-light hover:bg-gray-100">
          Feedback
        </div>
      </DialogTrigger>
      <DialogContent className="w-full border">
        <DialogHeader>
          <DialogTitle>Feedback / request</DialogTitle>
        </DialogHeader>

        <p className="text-sm">
          Please send your feedback or requests to hello@ventivo.co.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
