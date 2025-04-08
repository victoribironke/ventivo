import Signup from "@/components/auth/signup";
import { BASE_URL, PAGES } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up ~ Ventivo",
  description: "Get realtime charts from your data.",
  openGraph: {
    title: "Sign up ~ Ventivo",
    description: "Get realtime charts from your data.",
    type: "website",
    url: BASE_URL + PAGES.signup,
    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign up ~ Ventivo",
    description: "Get realtime charts from your data.",

    images: [
      {
        url: "https://ventivo.co/og-image.png",
      },
    ],
  },
};

const SignupPage = () => {
  return <Signup />;
};

export default SignupPage;
