import Footer from "@/components/main/footer";
import Homepage from "@/components/main/home";
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
  return <Homepage />;
};

export default Home;
