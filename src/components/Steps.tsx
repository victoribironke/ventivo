import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";

const Steps = () => {
  return (
    <section className="flex items-center justify-between flex-col w-full gap-6">
      <div className="w-full flex items-stretch justify-center flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl grid place-content-center">
          <Database color="#3b82f6" size={60} className="sm:hidden" />
          <Database color="#3b82f6" size={120} className="hidden sm:block" />
        </div>

        <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6"></div>
      </div>

      <div className="w-full flex items-stretch justify-center flex-col-reverse sm:flex-row gap-6">
        <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6"></div>

        <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl grid place-content-center">
          <ChartLine color="#eab308" size={60} className="sm:hidden" />
          <ChartLine color="#eab308" size={120} className="hidden sm:block" />
        </div>
      </div>

      <div className="w-full flex items-stretch justify-center flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/4 sm:aspect-square p-4 bg-white border-2 rounded-xl grid place-content-center">
          <FileChartColumnIncreasing
            color="#22c55e"
            size={60}
            className="sm:hidden"
          />
          <FileChartColumnIncreasing
            color="#22c55e"
            size={120}
            className="hidden sm:block"
          />
        </div>

        <div className="w-full sm:w-3/4 bg-white border-2 rounded-xl p-6"></div>
      </div>
    </section>
  );
};

export default Steps;
