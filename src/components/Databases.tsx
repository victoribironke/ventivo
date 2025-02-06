import { SiAppwrite, SiFirebase } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
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
      {
        icon: SiAppwrite,
        color: "#ef4444",
        content: "Appwrite",
        isAvailable: false,
      },
    ],
    relational: [
      {
        icon: BiLogoPostgresql,
        color: "#3b82f6",
        content: "PostgreSQL",
        isAvailable: true,
      },
      {
        icon: RiSupabaseFill,
        color: "#22c55e",
        content: "Supabase",
        isAvailable: true,
      },
      {
        icon: IoEllipsisHorizontal,
        color: "#ff9100",
        content: "More",
        isAvailable: true,
      },
    ],
  };

  return (
    <section className="w-full max-w-3xl flex items-stretch justify-center gap-6 flex-col sm:flex-row">
      <div className="p-1 bg-gray-100 rounded-xl border sm:w-1/2">
        <div className="bg-white border flex items-center justify-center flex-col gap-6 w-full p-6 rounded-lg">
          <p className="text-lg font-medium text-center">
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
      </div>

      <div className="p-1 bg-gray-100 rounded-xl border w-full sm:w-1/2">
        <div className="bg-white border flex items-center justify-center flex-col gap-6 w-full p-6 rounded-lg">
          <p className="text-lg font-medium text-center">
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
      </div>
    </section>
  );
};

export default Databases;
