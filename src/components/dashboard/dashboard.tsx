"use client";

import { customer_info, search, user_session } from "@/atoms/atoms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ICONS, LINKS, PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { Project } from "@/types/dashboard";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { useAtomValue } from "jotai";
import PageLoader from "../general/page-loader";
import NewProject from "./projects/new-project";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const userSession = useAtomValue(user_session);
  const customer = useAtomValue(customer_info);
  const searchValue = useAtomValue(search);

  const filteredProjects = projects.filter((p) =>
    p.project_info.projectName.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from(TABLES.projects)
        .select()
        .eq("owner_id", userSession?.user.id);

      setLoading(false);

      if (error) {
        toast.error("A server error occured.");
        return;
      }

      setProjects(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <PageLoader type="full" />;

  return (
    <>
      <div className="w-full flex items-center justify-between mb-6">
        <p className="text-xl font-medium flex items-center justify-center gap-2">
          Projects{" "}
          <div className="size-7 bg-firebase-orange border p-1 flex items-center justify-center text-xs rounded-full font-medium whitespace-nowrap">
            {projects.length}
          </div>
        </p>

        {customer[0]?.has_access ? (
          <NewProject />
        ) : projects.length >= 1 ? (
          <Link href={`${PAGES.settings}?t=billing`}>
            <Button className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 flex items-center justify-center gap-2">
              <FiPlus className="text-lg" />
              New project
            </Button>
          </Link>
        ) : (
          <NewProject />
        )}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4">
        {filteredProjects.map((p, i) => {
          const icon = ICONS(p.type);
          const link = LINKS(p.type, p.slug);

          return (
            <Link
              href={link}
              key={i}
              className="w-full max flex flex-col shadow gap-16 rounded-lg p-4 backdrop-blur-sm border bg-muted/50 hover:bg-muted/60 transition-all duration-200 ease-in-out"
            >
              <div className="w-full flex items-center justify-between">
                <p>{p.project_info.projectName}</p>

                <FaAngleRight className="text-sm text-firebase-orange" />
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-sm">
                  {p.charts.length} chart{p.charts.length !== 1 && "s"}
                </p>

                <icon.icon fill={icon.color} size={22.5} />
              </div>
            </Link>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="w-full flex items-center justify-center flex-col border rounded-lg px-6 py-12 gap-8">
          <p>You do not have any projects</p>

          <NewProject />
        </div>
      )}
    </>
  );
};

export default Dashboard;
