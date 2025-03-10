import { Button } from "@/components/ui/button";
import { BASE_URL, IMAGES, PAGES } from "@/constants/constants";
import { Metadata } from "next";
import Link from "next/link";
// import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home ~ Ventivo",
  description: "Get realtime charts from your data",
  openGraph: {
    title: "Home ~ Ventivo",
    description: "Get realtime charts from your data",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home ~ Ventivo",
    description: "Get realtime charts from your data",
    images: [
      {
        url: IMAGES.og_image.src,
      },
    ],
    creator: "@victoribironke_",
  },
};

const Home = () => {
  // redirect(PAGES.dashboard);

  return (
    <>
      <Link href={PAGES.login}>
        <Button className="py-3">Login</Button>
      </Link>
    </>
  );
};

export default Home;
