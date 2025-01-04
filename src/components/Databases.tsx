import { SiFirebase } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

const Databases = () => {
  const dbs = {
    documentOriented: [
      {
        icon: SiFirebase,
        color: "#ff9100",
        content: "Firebase",
        isAvailable: true,
      },
      {
        icon: TbBrandMongodb,
        color: "#22c55e",
        content: "MongoDB",
        isAvailable: false,
      },
    ],
    relational: [
      {
        icon: SiPostgresql,
        color: "#3b82f6",
        content: "PostgreSQL",
        isAvailable: false,
      },
      {
        icon: RiSupabaseFill,
        color: "#22c55e",
        content: "Supabase",
        isAvailable: false,
      },
    ],
  };

  return (
    <section className="w-full flex items-stretch justify-center gap-6 flex-col sm:flex-row">
      <div className="bg-white border-2 flex items-center justify-center flex-col gap-6 w-full sm:w-1/2 p-6 rounded-xl">
        <p className="text-lg font-medium">
          <span className="text-firebase-orange">Document-oriented</span>{" "}
          databases
        </p>

        <div className="w-full flex items-center justify-center gap-6">
          {dbs.documentOriented.map((db, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      "aspect-square p-2.5 bg-gray-50 rounded-lg grid place-content-center",
                      db.isAvailable ? "opacity-100" : "opacity-50"
                    )}
                  >
                    <db.icon fill={db.color} size={35} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {db.content} {!db.isAvailable && "(Coming soon)"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      <div className="bg-white border-2 flex items-center justify-center flex-col gap-6 w-full sm:w-1/2 p-6 rounded-xl">
        <p className="text-lg font-medium">
          <span className="text-firebase-orange">Relational</span> databases
        </p>

        <div className="w-full flex items-center justify-center gap-6">
          {dbs.relational.map((db, i) => (
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={cn(
                      "aspect-square p-2.5 bg-gray-50 rounded-lg grid place-content-center",
                      db.isAvailable ? "opacity-100" : "opacity-50"
                    )}
                  >
                    <db.icon fill={db.color} size={35} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {db.content} {!db.isAvailable && "(Coming soon)"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Databases;
