import Footer from "@/components/Footer";
import HeadTemplate from "@/components/general/HeadTemplate";
import Hero from "@/components/Hero";
import { PAGES } from "@/constants/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getValueFromTitle } from "@/lib/utils";
import GetData from "@/components/tools/query-generator/GetData";
import AddData from "@/components/tools/query-generator/AddData";
import UpdateData from "@/components/tools/query-generator/UpdateData";
import DeleteData from "@/components/tools/query-generator/DeleteData";

const QueryGenerator = () => {
  const meta = {
    title: "Cloud Firestore Query Generator ~ Ventivo",
    url: PAGES.firestore_query_generator,
    desc: "Simple query generator for Firebase firestore and realtime database.",
    og_image: "https://ventivo.co/query-generator.png",
  };

  const tabs = ["Get data", "Add data", "Update data", "Delete data"];

  return (
    <>
      <HeadTemplate meta={meta} />

      <Hero />

      <section className="w-full mx-auto my-36 flex justify-center flex-col">
        <h1 className="text-4xl font-bold mb-6 text-firebase-orange">
          Cloud Firestore Query Generator
        </h1>

        <Tabs
          defaultValue={getValueFromTitle(tabs[0])}
          className="w-full flex justify-center flex-col"
        >
          <TabsList className="w-fit h-fit flex flex-wrap bg-gray-50 border-2">
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

      <Footer />
    </>
  );
};

export default QueryGenerator;
