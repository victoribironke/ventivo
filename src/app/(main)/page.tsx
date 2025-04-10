import Footer from "@/components/main/footer";
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
    </>
  );
};

export default Home;
