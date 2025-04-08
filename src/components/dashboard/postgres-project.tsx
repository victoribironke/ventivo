"use client";

import { customer_info, search, user_session } from "@/atoms/atoms";
import { PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { Chart, Project } from "@/types/dashboard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAtomValue } from "jotai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { getTables } from "@/services/postgres";
import PageLoader from "../general/page-loader";
import CustomizeCharts from "./projects/customize-project";
import EditPostgresProject from "./projects/postgres/edit-postgres-project";
import DeleteProject from "./projects/delete-project";
import NewPostgresChart from "./projects/postgres/new-postgres-chart";
import ChartComp from "./projects/postgres/postgres-chart";

const PostgresProjectPage = ({ slug }: { slug: string }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [charts, setCharts] = useState<Chart[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [updateCharts, setUpdateCharts] = useState("");
  const userSession = useAtomValue(user_session);
  const customer = useAtomValue(customer_info);
  const searchValue = useAtomValue(search);
  const [tables, setTables] = useState<string[]>([]);

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

        setProject(data[0]);

        const { data: d, error: e } = await supabase
          .from(TABLES.charts)
          .select()
          .eq("project_id", data[0].id);

        if (e) {
          setLoading(false);
          toast.error("A server error occured.");
          return;
        }

        setCharts(d);

        const { data: td, error: te } = await getTables(data[0].project_info);

        if (te) {
          setLoading(false);
          toast.error(te);
          return;
        }

        setTables(td);
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
        <EditPostgresProject project={project} />
        <DeleteProject p={project as Project} />

        {customer[0]?.has_access ? (
          <NewPostgresChart
            p={project as Project}
            s={slug as string}
            tables={tables}
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
          <NewPostgresChart
            p={project as Project}
            s={slug as string}
            tables={tables}
            sUC={setUpdateCharts}
          />
        )}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center gap-4">
        {filteredCharts.map((c, i) => (
          <ChartComp
            chart={c}
            key={i}
            tables={tables}
            p={project as Project}
            sUC={setUpdateCharts}
          />
        ))}
      </div>

      {filteredCharts?.length === 0 && (
        <div className="w-full flex items-center justify-center flex-col border rounded-lg px-6 py-12 gap-8">
          <p>You do not have any charts</p>

          <NewPostgresChart
            p={project as Project}
            s={slug as string}
            tables={tables}
            sUC={setUpdateCharts}
          />
        </div>
      )}
    </>
  );
};

export default PostgresProjectPage;
