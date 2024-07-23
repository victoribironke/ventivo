const Steps = () => {
  const steps = [
    {
      title: "Create a user",
      desc: "Create a new user to grant read-only access to your collections",
    },
    {
      title: "Add your credentials",
      desc: "Fill in your web app's config details, give your project a name and update your security rules",
    },
    {
      title: "Create a chart",
      desc: "Enter the path to the collection you want to track, select the field and the type of chart",
    },
    {
      title: "Track your metrics",
      desc: "That's it. Your real-time chart is ready.",
    },
  ];

  return (
    <section className="w-full max-w-5xl flex flex-col gap-6">
      <h1 className="text-xl font-semibold tracking-tight sm:text-2xl xl:text-3xl text-center">
        Start tracking in <span className="text-firebase-orange">4 easy</span>{" "}
        steps
      </h1>

      <div className="w-full gap-4 grid md:grid-cols-2 grid-cols-1">
        {steps.map((s, i) => {
          return (
            <div
              key={i}
              className="w-full flex items-start lg:gap-x-4 gap-x-4 bg-white border rounded-2xl p-4"
            >
              <p className="bg-green bg-opacity-10 border-green text-green flex items-center justify-center rounded-md w-16 aspect-square borde">
                {i + 1}
              </p>
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="text-xl font-semibold text-firebase-orange">
                  {s.title}
                </h3>

                <p className="text-gray-500">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
