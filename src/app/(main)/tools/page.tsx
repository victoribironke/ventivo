import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getValueFromTitle } from "@/lib/utils";
import GetData from "@/components/main/tools/query-generator/get-data";
import AddData from "@/components/main/tools/query-generator/add-data";
import UpdateData from "@/components/main/tools/query-generator/update-data";
import DeleteData from "@/components/main/tools/query-generator/delete-data";

export const metadata: Metadata = {
  title: "Tools ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Tools ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.tools,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const Page = () => {
  const tabs = ["Get data", "Add data", "Update data", "Delete data"];

  return (
    <section className="w-full max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-6 w-full">
        Firestore query generator
      </h1>

      <Tabs
        defaultValue={getValueFromTitle(tabs[0])}
        className="w-full flex justify-center flex-col"
      >
        <div className="rounded-xl">
          <TabsList className="w-fit h-fit flex flex-wrap border">
            {tabs.map((t, i) => (
              <TabsTrigger
                value={getValueFromTitle(t)}
                key={i}
                className="font-normal data-[state=active]:bg-firebase-orange data-[state=active]:text-white"
              >
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {tabs.map((t, i) => (
          <TabsContent
            value={getValueFromTitle(t)}
            key={i}
            className="w-full mt-4"
          >
            {t === "Get data" && <GetData />}
            {t === "Add data" && <AddData />}
            {t === "Update data" && <UpdateData />}
            {t === "Delete data" && <DeleteData />}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Page;
