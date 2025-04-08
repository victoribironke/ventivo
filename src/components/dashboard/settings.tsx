"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeleteAccount from "./delete-account";
import Plans from "./plans";
import { useSearchParams } from "next/navigation";

const Settings = () => {
  const searchParams = useSearchParams();
  const t = searchParams.get("t");

  const tabs = ["Account", "Billing"];

  return (
    <>
      <div className="w-full flex items-center justify-between mb-6">
        <p className="text-xl font-medium">Settings</p>
      </div>

      <div className="w-full max-w-l mb-6 flex items-center justify-center gap-4">
        <Tabs
          defaultValue={t === "account" || t === "billing" ? t : "account"}
          className="w-full flex justify-center flex-col"
        >
          <TabsList className="w-fit h-fit flex flex-wrap border">
            {tabs.map((t, i) => (
              <TabsTrigger
                value={t.toLowerCase()}
                key={i}
                className="font-normal data-[state=active]:bg-firebase-orange data-[state=active]:text-white"
              >
                {t}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((t, i) => (
            <TabsContent
              value={t.toLowerCase()}
              key={i}
              className="w-full mt-4"
            >
              {t === "Account" && <DeleteAccount />}
              {t === "Billing" && <Plans />}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Settings;
