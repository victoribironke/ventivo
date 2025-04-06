import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { EditProjectProps } from "@/types/dashboard";
import { Badge } from "@/components/ui/badge";

const EditFirebaseProject = ({ project }: EditProjectProps) => {
  const fields = [
    { title: "API key", selector: "apiKey" },
    { title: "Auth domain", selector: "authDomain" },
    { title: "Project ID", selector: "projectId" },
    { title: "Storage bucket", selector: "storageBucket" },
    { title: "Messaging sender ID", selector: "messagingSenderId" },
    { title: "App ID", selector: "appId" },
    { title: "Email", selector: "email" },
    { title: "Password", selector: "password" },
  ];
  const initialState = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    projectName: "",
    email: "",
    password: "",
  };
  const { push, asPath, reload } = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    project?.project_info ?? initialState
  );
  const [slug, setSlug] = useState(project?.slug ?? "");
  const snippet = `
    match /{document=**} {
      allow read: if request.auth.uid == "[USER-UID]";
      // This will grant read access to all collections and subcollections for only the created user.
    }
  `;

  const updateFormData = (text: string, which: string) => {
    setFormData((k) => {
      return { ...k, [which]: text };
    });
  };

  const saveProject = async () => {
    setDisabled(true);
    setLoading(true);

    const { error } = await supabase
      .from(TABLES.projects)
      .update({ project_info: formData, slug })
      .eq("id", project?.id);

    setDisabled(false);
    setLoading(false);

    if (error) {
      toast.error("A server error occured.");
      return;
    }

    toast.success("Project saved.");

    asPath.includes(slug) ? reload() : push(PAGES.project.firebase(slug));
  };

  useEffect(() => {
    if (formData.projectName)
      setSlug(
        `${formData.projectName
          .toLowerCase()
          .trim()
          .split(" ")
          .join("-")}-${project?.slug.split("-").at(-1)}`
      );
    else setSlug("");

    for (let i in formData) {
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
        <Button className="bg-white font-normal text-black w-fit hover:bg-white/90 border">
          <BsGear className="text-lg" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit project{" "}
            <Badge className="bg-firebase-orange text-white ml-1">
              {project?.project_info.projectName}
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-firebase-orange">
            Edit the details of your firebase project
          </DialogDescription>
        </DialogHeader>

        <div className="w-full flex items-center justify-center flex-col my-2 h-auto max-h-[calc(100vh-10rem)] overflow-x-scroll p-0.5">
          <div className="grid grid-cols-2 items-center justify-center w-full gap-x-4 gap-y-6">
            {fields.map((f, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <Label htmlFor={f.selector}>{f.title} *</Label>
                <Input
                  className="max-w-sm outline-none focus:outline-none"
                  value={formData[f.selector as keyof typeof formData]}
                  name={f.selector}
                  onChange={(e) => updateFormData(e.target.value, f.selector)}
                />
              </div>
            ))}
          </div>

          <button
            className="text-sm hover:underline flex items-center justify-center gap-2 text-firebase-orange self-start mt-2"
            onClick={() => {
              navigator.clipboard.writeText(snippet);
              toast.success("Copied to clipboard.");
            }}
          >
            <IoCopyOutline />
            Copy snippet
          </button>
        </div>

        <DialogFooter className="flex flex-col justify-center gap-4 sm:gap-2">
          <div className="flex flex-col gap-2 w-full">
            <Input
              value={formData.projectName}
              name="projectName"
              placeholder="Project name *"
              onChange={(e) => updateFormData(e.target.value, "projectName")}
            />
            <Label htmlFor="projectName" className="font-normal">
              Slug: {slug}
            </Label>
          </div>
          <Button
            className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 gap-2"
            disabled={disabled}
            onClick={saveProject}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
            Save project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditFirebaseProject;
