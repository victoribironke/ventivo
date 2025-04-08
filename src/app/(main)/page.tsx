import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
  redirect(PAGES.login);
};

export default Home;
