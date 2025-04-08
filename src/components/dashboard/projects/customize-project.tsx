import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { DEFAULT_SETTINGS, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { CustomizeChartsProps } from "@/types/dashboard";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomizeCharts = ({ project, sUC }: CustomizeChartsProps) => {
  const { bar, line } = project?.customization || DEFAULT_SETTINGS;
  const [barSettings, setBarSettings] = useState(bar);
  const [lineSettings, setLineSettings] = useState(line);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const updateBarSettings = (text: any, which: string) => {
    setBarSettings((k) => {
      return { ...k, [which]: text };
    });
  };

  const updateLineSettings = (text: any, which: string) => {
    setLineSettings((k) => {
      return { ...k, [which]: text };
    });
  };

  const saveCustomizations = async () => {
    setLoading(true);

    const { error } = await supabase
      .from(TABLES.projects)
      .update({
        customization: {
          bar: barSettings,
          line: lineSettings,
        },
      })
      .eq("id", project?.id);

    setLoading(false);

    if (error) {
      toast.error("A server error occured.");
      return;
    }

    sUC(`Updated ${project?.project_info.projectName} @ ${Date.now()}`);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-fit border bg-black hover:bg-black/90 text-white">
          Customize
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Customization panel</SheetTitle>
          <SheetDescription>
            Configure the appearance of the charts
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 mb-6 max-h-[calc(100vh-10rem)] overflow-scroll flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Bar charts</p>

            <div className="flex items-center justify-between">
              <p className="text-sm">Main color</p>

              <Input
                type="color"
                className="w-3/5"
                value={barSettings.color}
                onChange={(e) => updateBarSettings(e.target.value, "color")}
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm">Show count</p>

              <Switch
                checked={barSettings.showCount}
                onCheckedChange={(e) => updateBarSettings(e, "showCount")}
                className="data-[state=checked]:bg-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm">Paginate bars</p>

              <Switch
                checked={barSettings.paginateBars}
                onCheckedChange={(e) => updateBarSettings(e, "paginateBars")}
                className="data-[state=checked]:bg-white"
              />
            </div>

            {barSettings.paginateBars && (
              <div className="flex items-center justify-between">
                <p className="text-sm">Bars per page</p>

                <Input
                  type="number"
                  value={barSettings.barsPerPage}
                  onChange={(e) =>
                    updateBarSettings(parseInt(e.target.value), "barsPerPage")
                  }
                  className="w-1/3"
                  min={1}
                  onBlur={(e) =>
                    !(parseInt(e.target.value) >= 1) &&
                    updateBarSettings(1, "barsPerPage")
                  }
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold">Line charts</p>

            <div className="flex items-center justify-between">
              <p className="text-sm">Main color</p>

              <Input
                type="color"
                className="w-3/5"
                value={lineSettings.color}
                onChange={(e) => updateLineSettings(e.target.value, "color")}
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm">Show count</p>

              <Switch
                checked={lineSettings.showCount}
                onCheckedChange={(e) => updateLineSettings(e, "showCount")}
                className="data-[state=checked]:bg-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm">Paginate dots</p>

              <Switch
                checked={lineSettings.paginateDots}
                onCheckedChange={(e) => updateLineSettings(e, "paginateDots")}
                className="data-[state=checked]:bg-white"
              />
            </div>

            {lineSettings.paginateDots && (
              <div className="flex items-center justify-between">
                <p className="text-sm">Dots per page</p>

                <Input
                  type="number"
                  value={lineSettings.dotsPerPage}
                  onChange={(e) =>
                    updateLineSettings(parseInt(e.target.value), "dotsPerPage")
                  }
                  className="w-1/3"
                  min={1}
                  onBlur={(e) =>
                    !(parseInt(e.target.value) >= 1) &&
                    updateLineSettings(1, "dotsPerPage")
                  }
                />
              </div>
            )}
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="bg-firebase-orange font-normal text-white w-full max-w-[10rem] hover:bg-firebase-orange/90 flex items-center justify-center gap-2"
              onClick={saveCustomizations}
              disabled={loading}
            >
              {loading && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Save customization
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CustomizeCharts;
