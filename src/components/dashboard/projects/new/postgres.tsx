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
import { BiLogoPostgresql } from "react-icons/bi";
import { testConnection } from "@/services/postgres";

const uniqueURL = generateUniqueURL();

const NewPostgresProject = () => {
  const [disabled, setDisabled] = useState(false);
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const userSession = useAtomValue(user_session);
  // const [connectionString, setConnectionString] = useState("");
  const [test, setTest] = useState({ testing: false, tested: false });
  const [formData, setFormData] = useState({
    host: "",
    port: "",
    databaseName: "",
    user: "",
    password: "",
    projectName: "",
  });

  const updateFormData = (text: string, which: string) => {
    setFormData((k) => {
      return { ...k, [which]: text };
    });
  };

  const testPGConnection = async () => {
    setTest({ testing: true, tested: false });

    const { data, error } = await testConnection(formData);

    if (error) {
      setTest({ testing: false, tested: false });
      toast.error(error);
      return;
    }

    setTest({ testing: false, tested: true });
    toast.success(data);
  };

  const saveProject = async () => {
    setDisabled(true);
    setLoading(true);

    const { error } = await supabase.from(TABLES.projects).insert({
      owner_id: userSession?.user.id,
      project_info: formData,
      slug,
      charts: [],
      type: "postgres",
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
        <Button className="w-full bg-transparent hover:bg-muted text-white flex justify-start gap-4">
          <BiLogoPostgresql fill="#3b82f6" />
          <p>PostgreSQL</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border max-w-2xl">
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
          <DialogDescription className="text-firebase-orange">
            Fill in the details of your postgres project
          </DialogDescription>
        </DialogHeader>

        <div className="w-full flex items-center justify-center flex-col my-2 h-auto max-h-[calc(100vh-10rem)] overflow-x-scroll p-0.5">
          {/* <div className="w-full flex flex-col gap-2 mb-4">
            <Label htmlFor="connectionString">Connection string</Label>
            <p className="text-sm text-gray-400">
              Paste the connection string to populate the fields below
            </p>
            <Input
              className="outline-none focus:outline-none"
              value={connectionString}
              name="connectionString"
              placeholder="dialect://user:password@host:port/database"
              onChange={(e) => setConnectionString(e.target.value)}
            />
          </div> */}

          <div className="grid grid-cols-2 items-center justify-center w-full gap-x-4 gap-y-6">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="user">User *</Label>
              <Input
                className="outline-none focus:outline-none"
                value={formData.user}
                name="user"
                onChange={(e) => updateFormData(e.target.value, "user")}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                className="outline-none focus:outline-none"
                value={formData.password}
                name="password"
                onChange={(e) => updateFormData(e.target.value, "password")}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center justify-center w-full gap-x-4 gap-y-6 my-4">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="host">Host *</Label>
              <Input
                className="outline-none focus:outline-none"
                value={formData.host}
                name="host"
                onChange={(e) => updateFormData(e.target.value, "host")}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="port">Port *</Label>
              <Input
                className="outline-none focus:outline-none"
                value={formData.port}
                name="port"
                type="number"
                onChange={(e) => updateFormData(e.target.value, "port")}
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="databaseName">Database name *</Label>
            <Input
              className="outline-none focus:outline-none"
              value={formData.databaseName}
              name="databaseName"
              onChange={(e) => updateFormData(e.target.value, "databaseName")}
            />
          </div>

          <Button
            className="bg-firebase-orange mt-4 text-white w-full hover:bg-firebase-orange/90 gap-2"
            disabled={test.testing}
            onClick={testPGConnection}
          >
            {test.testing && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Test connection
          </Button>
        </div>

        {test.tested && (
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
              {loading && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Create project
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewPostgresProject;
