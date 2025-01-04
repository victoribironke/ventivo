import { ChartLine, Database, FileChartColumnIncreasing } from "lucide-react";

const Steps = () => {
  return (
    <section className="flex items-center justify-between flex-col w-full gap-6">
      <div className="w-full flex items-stretch justify-center gap-6">
        <div className="w-1/4 aspect-square bg-white border-2 rounded-xl grid place-content-center">
          <Database color="#3b82f6" size={120} />
        </div>

        <div className="w-3/4 bg-white border-2 rounded-xl"></div>
      </div>

      <div className="w-full flex items-stretch justify-center gap-6">
        <div className="w-3/4 bg-white border-2 rounded-xl"></div>

        <div className="w-1/4 aspect-square bg-white border-2 rounded-xl grid place-content-center">
          <ChartLine color="#eab308" size={120} />
        </div>
      </div>

      <div className="w-full flex items-stretch justify-center gap-6">
        <div className="w-1/4 aspect-square bg-white border-2 rounded-xl grid place-content-center">
          <FileChartColumnIncreasing color="#22c55e" size={120} />
        </div>

        <div className="w-3/4 bg-white border-2 rounded-xl"></div>
      </div>
    </section>
  );
};

export default Steps;
