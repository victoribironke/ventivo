import CountUp from "react-countup";

const Statistics = ({ c, p }: { c: number; p: number }) => {
  return (
    <section className="w-full max-w-5xl flex items-center justify-around gap-6">
      <div className="flex items-center justify-center flex-col gap-2">
        <CountUp end={p} className="text-6xl text-firebase-orange font-bold" />
        <p className="uppercase text-gray-400 text-xl text-center">
          Projects created
        </p>
      </div>

      <div className="flex items-center justify-center flex-col gap-2">
        <CountUp end={c} className="text-6xl text-firebase-orange font-bold" />
        <p className="uppercase text-gray-400 text-xl text-center">
          Charts generated
        </p>
      </div>
    </section>
  );
};

export default Statistics;
