import Confirm from "@/components/auth/confirm";
import { BASE_URL, PAGES } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm auth token ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Confirm auth token ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.confirm,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confirm auth token ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const ConfirmPage = () => {
  return <Confirm />;
};

export default ConfirmPage;
