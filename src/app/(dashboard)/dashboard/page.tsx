import Dashboard from "@/components/dashboard/dashboard";
import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Dashboard ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.dashboard,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const Page = () => {
  return <Dashboard />;
};

export default Page;
