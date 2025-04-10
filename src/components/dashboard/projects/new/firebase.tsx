"use client";

import { user_session } from "@/atoms/atoms";
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
import { TABLES } from "@/constants/constants";
import { generateUniqueURL } from "@/lib/utils";
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAtomValue } from "jotai";
import { IoCopyOutline } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";

const uniqueURL = generateUniqueURL();

const NewFirebaseProject = () => {
  const fields = [
    { title: "API key", selector: "apiKey" },
    { title: "Auth domain", selector: "authDomain" },
    { title: "Project ID", selector: "projectId" },
    { title: "Storage bucket", selector: "storageBucket" },
    { title: "Messaging sender ID", selector: "messagingSenderId" },
    { title: "App ID", selector: "appId" },
  ];
  const [disabled, setDisabled] = useState(false);
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const userSession = useAtomValue(user_session);
  const [formData, setFormData] = useState({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    projectName: "",
    email: "",
    password: "",
  });
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

    const { error } = await supabase.from(TABLES.projects).insert({
      owner_id: userSession?.user.id,
      project_info: formData,
      slug,
      charts: [],
      type: "firebase",
    });

    setDisabled(false);
    setLoading(false);

    if (error) {
      toast.error("A server error occured.");
      return;
    }

    toast.success("Project added.");
    window.location.reload();
  };

  useEffect(() => {
    if (formData.projectName)
      setSlug(
        `${formData.projectName
          .toLowerCase()
          .trim()
          .split(" ")
          .join("-")}-${uniqueURL}`
      );
    else setSlug("");

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
        <Button className="w-full bg-transparent hover:bg-muted text-black dark:text-white flex justify-start gap-4 shadow-none">
          <SiFirebase fill="#ff9100" />
          <p>Firebase</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
          <DialogDescription className="text-firebase-orange">
            Fill in the details of your firebase project
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

          <div className="w-full flex items-center justify-center gap-3 mt-4 flex-col">
            <p className="text-sm font-normal">
              To grant secure read access, create a user with an email and
              password and copy this snippet to your firestore security rules
            </p>

            <div className="grid grid-cols-2 items-center justify-center w-full gap-x-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-normal">
                  Email *
                </Label>
                <Input
                  className="max-w-sm"
                  value={formData.email}
                  name="email"
                  onChange={(e) => updateFormData(e.target.value, "email")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="font-normal">
                  Password *
                </Label>
                <Input
                  className="max-w-sm"
                  value={formData.password}
                  name="password"
                  onChange={(e) => updateFormData(e.target.value, "password")}
                />
              </div>
            </div>

            <button
              className="text-sm hover:underline flex items-center justify-center gap-2 text-firebase-orange self-start"
              onClick={() => {
                navigator.clipboard.writeText(snippet);
                toast.success("Copied to clipboard.");
              }}
            >
              <IoCopyOutline />
              Copy snippet
            </button>
          </div>
        </div>

        <DialogFooter className="flex flex-col justify-center gap-4 sm:gap-2">
          <div className="flex flex-col gap-2 w-full">
            <Input
              value={formData.projectName}
              name="projectName"
              placeholder="Project name *"
              onChange={(e) => updateFormData(e.target.value, "projectName")}
            />
            <Label htmlFor="projectName">Slug: {slug}</Label>
          </div>
          <Button
            className="bg-firebase-orange text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 gap-2"
            disabled={disabled}
            onClick={saveProject}
          >
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
            Create project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewFirebaseProject;
