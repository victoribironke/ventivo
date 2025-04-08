"use client";

import { customer_info, search, user_session } from "@/atoms/atoms";
import { PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { Chart, FirebaseProjectInfo, Project } from "@/types/dashboard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAtomValue } from "jotai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { setupFirebase } from "@/lib/utils";
import { Firestore } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import PageLoader from "../general/page-loader";
import CustomizeCharts from "./projects/customize-project";
import EditFirebaseProject from "./projects/firebase/edit-firebase-project";
import DeleteProject from "./projects/delete-project";
import NewFirebaseChart from "./projects/firebase/new-firebase-chart";
import ChartComp from "./projects/firebase/firebase-chart";

const FirebaseProjectPage = ({ slug }: { slug: string }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [charts, setCharts] = useState<Chart[]>([]);
  const [loading, setLoading] = useState(true);
  const [db, setDB] = useState<Firestore | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [updateCharts, setUpdateCharts] = useState("");
  const userSession = useAtomValue(user_session);
  const customer = useAtomValue(customer_info);
  const searchValue = useAtomValue(search);

  const filteredCharts = charts.filter((c) =>
    c.chart_info.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (slug) {
        const { data, error } = await supabase
          .from(TABLES.projects)
          .select()
          .eq("owner_id", userSession?.user.id)
          .eq("slug", slug);

        if (data?.length === 0) {
          setLoading(false);

          setNotFound(true);
          return;
        }

        if (error) {
          setLoading(false);

          toast.error("A server error occured.");
          return;
        }

        const { project_info, id } = data[0] as Project;

        setProject(data[0]);

        const res = await setupFirebase(
          project_info as FirebaseProjectInfo,
          (project_info as FirebaseProjectInfo).email,
          project_info.password
        );

        if (res === "An error occured") {
          toast.error("Your firebase credentials are wrong. Please edit them.");
          setLoading(false);

          return;
        }

        const { data: d, error: e } = await supabase
          .from(TABLES.charts)
          .select()
          .eq("project_id", id);

        if (e) {
          setLoading(false);

          toast.error("A server error occured.");
          return;
        }

        setCharts(d);
        setDB(res.db);
        setLoading(false);
      }
    })();
  }, [slug, updateCharts]);

  if (loading) return <PageLoader type="full" />;

  if (notFound)
    return (
      <>
        <Alert className="border">
          <AlertTitle className="text-firebase-orange text-lg">
            Project not found
          </AlertTitle>
          <AlertDescription>No project found with that slug</AlertDescription>
        </Alert>
      </>
    );

  return (
    <>
      <div className="w-full flex items-center justify-between mb-6 gap-4">
        <p className="text-xl font-medium flex items-center justify-center gap-2 mr-auto">
          {project?.project_info.projectName}{" "}
          <div className="size-7 bg-firebase-orange border p-1 flex items-center justify-center text-xs rounded-full font-medium whitespace-nowrap">
            {project?.charts.length}
          </div>
        </p>

        <CustomizeCharts project={project} sUC={setUpdateCharts} />
        <EditFirebaseProject project={project} />
        <DeleteProject p={project as Project} />
        {customer[0]?.has_access ? (
          <NewFirebaseChart
            db={db as Firestore}
            p={project as Project}
            s={slug as string}
            sUC={setUpdateCharts}
          />
        ) : charts.length >= 3 ? (
          <Link href={`${PAGES.settings}?t=billing`}>
            <Button className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 flex items-center justify-center gap-2">
              <FiPlus className="text-lg" />
              New chart
            </Button>
          </Link>
        ) : (
          <NewFirebaseChart
            db={db as Firestore}
            p={project as Project}
            s={slug as string}
            sUC={setUpdateCharts}
          />
        )}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
        {filteredCharts.map((c, i) => (
          <ChartComp
            chart={c}
            key={i}
            db={db as Firestore}
            p={project as Project}
            sUC={setUpdateCharts}
          />
        ))}
      </div>

      {filteredCharts?.length === 0 && (
        <div className="w-full flex items-center justify-center flex-col border rounded-lg px-6 py-12 gap-8">
          <p>You do not have any charts</p>

          <NewFirebaseChart
            db={db as Firestore}
            p={project as Project}
            s={slug as string}
            sUC={setUpdateCharts}
          />
        </div>
      )}
    </>
  );
};

export default FirebaseProjectPage;
