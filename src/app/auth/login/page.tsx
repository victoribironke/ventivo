import { customer_info, user_session } from "@/atoms/atoms";
import LoginForm from "@/components/auth/login-form";
import { BASE_URL, IMAGES, PAGES } from "@/constants/constants";
import { getCustomer, getUserSession } from "@/lib/supabase";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { useSetRecoilState } from "recoil";

export const metadata: Metadata = {
  title: "Login ~ Ventivo",
  description: "Login to your account",
  openGraph: {
    title: "Login ~ Ventivo",
    description: "Login to your account",
    type: "website",
    url: BASE_URL + PAGES.login,
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login ~ Ventivo",
    description: "Login to your account",
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
    creator: "@victoribironke_",
  },
};

const LoginPage = async () => {
  return <LoginForm />;
};

export default LoginPage;
