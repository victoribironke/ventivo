import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Home ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const Home = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-4xl text-center">
        Get <span className="text-firebase-orange">realtime</span> charts from
        your data
      </h1>

      <p className="sm:text-lg md:text-xl max-w-xl text-center">
        Connect your data source, create your charts and start tracking your key
        metrics.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button variant="outline">Sign in</Button>
        <Button className="bg-firebase-orange hover:bg-firebase-orange/90 text-white hover:text-white">
          Get started
        </Button>
      </div>

      <Separator className="max-w-2xl" />

      <div className="w-full flex items-center justify-center gap-4 flex-wrap max-w-2xl">
        <Link href={PAGES.blog} className="w-fit hover:text-firebase-orange">
          Blog
        </Link>

        <span>/</span>

        <Link href={PAGES.terms} className="w-fit hover:text-firebase-orange">
          Terms
        </Link>

        <span>/</span>

        <Link
          href={PAGES.privacy_policy}
          className="w-fit hover:text-firebase-orange"
        >
          Privacy policy
        </Link>

        <span>/</span>

        <Link href={PAGES.tools} className="w-fit hover:text-firebase-orange">
          Tools
        </Link>

        <span>/</span>

        <Link href={PAGES.twitter} className="w-fit hover:text-firebase-orange">
          Twitter
        </Link>

        <span>/</span>

        <Link
          href={PAGES.instagram}
          className="w-fit hover:text-firebase-orange"
        >
          Instagram
        </Link>

        <span>/</span>

        <Link href={PAGES.twitter} className="w-fit hover:text-firebase-orange">
          Twitter
        </Link>
      </div>
    </>
  );
};

export default Home;
