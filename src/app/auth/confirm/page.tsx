import Confirm from "@/components/auth/confirm";
import LoginForm from "@/components/auth/login-form";
import { BASE_URL, IMAGES, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify magic link ~ Ventivo",
  description: "Verify magic link",
  openGraph: {
    title: "Verify magic link ~ Ventivo",
    description: "Verify magic link",
    type: "website",
    url: BASE_URL + PAGES.confirm,
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify magic link ~ Ventivo",
    description: "Verify magic link",
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
    creator: "@victoribironke_",
  },
};

const ConfirmPage = () => {
  return <Confirm />;
};

export default ConfirmPage;
