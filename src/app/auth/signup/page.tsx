import LoginForm from "@/components/auth/login-form";
import SignupForm from "@/components/auth/signup-form";
import { BASE_URL, IMAGES, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up ~ Ventivo",
  description: "Create a free account",
  openGraph: {
    title: "Sign up ~ Ventivo",
    description: "Create a free account",
    type: "website",
    url: BASE_URL + PAGES.signup,
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign up ~ Ventivo",
    description: "Create a free account",
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
    creator: "@victoribironke_",
  },
};

const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;
