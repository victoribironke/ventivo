import Login from "@/components/auth/login";
import { BASE_URL, PAGES } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Login ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.login,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
