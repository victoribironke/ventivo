import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";

const Steps = () => {
  return (
    <>
      <section className="my-10 py-6 px-10 w-full flex items-start justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-900">
          It's <span className="text-firebase-orange">easy</span> to get started
        </h1>

        <p className="text-lg">Get up and running in three steps.</p>
      </section>

      <section className="flex items-center justify-between flex-col w-full gap-6">
        <div className="w-full flex items-stretch justify-center flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl place-content-center hidden sm:grid">
            <Database color="#3b82f6" size={60} className="sm:hidden" />
            <Database color="#3b82f6" size={100} className="hidden sm:block" />
          </div>

          <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6 flex items-start justify-center flex-col gap-4">
            <h3 className="text-3xl font-semibold">
              <span className="text-blue">Connect</span> your data source
            </h3>

            <p>
              Seamlessly integrate with your data, whether it is a
              document-oriented database like Firebase or a relational database
              like PostgreSQL. Get set up in minutes and start pulling your data
              effortlessly.
            </p>
          </div>
        </div>

        <div className="w-full flex items-stretch justify-center flex-col-reverse sm:flex-row gap-6">
          <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6 flex items-start justify-center flex-col gap-4">
            <h3 className="text-3xl font-semibold">
              <span className="text-firebase-yellow">Create</span> your charts
            </h3>

            <p>
              Choose the fields you want to track from your data and select the
              chart type that best represents your insights. Customize it to
              match your needs and start visualizing your metrics.
            </p>
          </div>

          <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl hidden sm:grid place-content-center">
            <ChartLine color="#ffc400" size={60} className="sm:hidden" />
            <ChartLine color="#ffc400" size={100} className="hidden sm:block" />
          </div>
        </div>

        <div className="w-full flex items-stretch justify-center flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl hidden sm:grid place-content-center">
            <FileChartColumnIncreasing
              color="#22c55e"
              size={60}
              className="sm:hidden"
            />
            <FileChartColumnIncreasing
              color="#22c55e"
              size={100}
              className="hidden sm:block"
            />
          </div>

          <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6 flex items-start justify-center flex-col gap-4">
            <h3 className="text-3xl font-semibold">
              <span className="text-green">Track</span> your key metrics
            </h3>

            <p>
              Stay on top of your goals with real-time dashboards. Monitor
              critical metrics and trends to make data-driven decisions
              effortlessly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
