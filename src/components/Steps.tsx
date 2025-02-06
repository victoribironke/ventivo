import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      title: "Connect your data source",
      description:
        "Seamlessly integrate with your data, whether it is a document-oriented database like Firebase or a relational database like PostgreSQL.",
    },
    {
      title: "Create your charts",
      description:
        "Choose the fields you want to track from your data and select the chart type that best represents your insights. Customize it to match your needs and start visualizing your metrics.",
    },
    {
      title: "Track your key metrics",
      description:
        "Stay on top of your goals with real-time dashboards. Monitor critical metrics and trends to make data-driven decisions effortlessly.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-4xl lg:text-5xl pb-3">
          It is easy to get started
        </h1>
        <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
          Get up and running in three steps.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div className="w-full border bg-gray-100 p-1 rounded-xl" key={i}>
            <div className="grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-lg bg-white border h-full">
              <div className="p-5">
                <span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm font-bold text-gray-500">
                  0{i + 1}
                </span>
                <p className="text-md mb-1.5 font-semibold">{s.title}</p>
                <p className="text-content-subtle max-w-[300px] text-[#898989] text-[16px]">
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
