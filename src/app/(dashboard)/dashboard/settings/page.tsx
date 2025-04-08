import Settings from "@/components/dashboard/settings";
import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Settings ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.settings,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Settings ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const Page = async () => {
  return <Settings />;
};

export default Page;
