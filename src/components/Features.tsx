import { PAGES } from "@/constants/constants";
import Link from "next/link";
import { Button } from "./ui/button";

const Features = () => {
  const features = [
    {
      emoji: "🔗",
      title: "Connect multiple data sources",
      description:
        "Easily link multiple databases to a single dashboard. Currently supporting Firebase and PostgreSQL, with more integrations coming soon!",
    },
    {
      emoji: "🎨",
      title: "Fully customizable charts",
      description:
        "Match your brand’s identity with customizable colors, add pagination for large datasets, and display entity counts directly on your charts.",
    },
    {
      emoji: "⚡",
      title: "Realtime updates",
      description:
        "Your charts stay in sync with your data—see instant updates whenever changes occur in your database.",
    },
    {
      emoji: "📤",
      title: "Export & share",
      description:
        "Capture insights with ease by exporting your chart views as high-quality images to share with your team or audience.",
    },
  ];

  return (
    <section className="w-full mt-40">
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="font-semibold text-4xl lg:text-5xl">
          Powerful features to elevate your data visualization
        </h1>
        <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
          Explore our powerful features—free for individuals with usage limits.
        </p>
        <Link href={PAGES.signup} className="w-full max-w-40">
          <Button className="w-2/3 lg:w-full bg-black text-white rounded-lg hover:bg-black shadow-none">
            Get started
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 md:grid-cols-2 md:px-2">
        {features.map((f, i) => (
          <div className="w-full border bg-gray-100 p-1 rounded-xl" key={i}>
            <div className="border grid h-full grid-rows-[auto_auto_1fr] gap-4 overflow-hidden rounded-lg bg-white p-5">
              <span className="w-fit inline-block text-lg">{f.emoji}</span>
              <p className="break-words text-xl font-medium">{f.title}</p>
              <p className="break-words text-base text-gray-500">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
