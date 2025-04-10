import Link from "next/link";
import { Separator } from "../ui/separator";
import { PAGES } from "@/constants/constants";

const Footer = () => {
  return (
    <>
      <Separator className="max-w-3xl" />

      <div className="w-full flex items-center justify-center gap-4 flex-wrap max-w-3xl">
        <Link href={PAGES.blog} className="w-fit hover:text-firebase-orange">
          Blog
        </Link>

        <span>/</span>

        <Link href={PAGES.terms} className="w-fit hover:text-firebase-orange">
          Terms
        </Link>

        <span>/</span>

        <Link
          href={PAGES.privacy_policy}
          className="w-fit hover:text-firebase-orange"
        >
          Privacy policy
        </Link>

        <span>/</span>

        <Link href={PAGES.tools} className="w-fit hover:text-firebase-orange">
          Tools
        </Link>

        <span>/</span>

        <Link href={PAGES.twitter} className="w-fit hover:text-firebase-orange">
          Twitter
        </Link>

        <span>/</span>

        <Link
          href={PAGES.instagram}
          className="w-fit hover:text-firebase-orange"
        >
          Instagram
        </Link>

        <span>/</span>

        <Link href={PAGES.twitter} className="w-fit hover:text-firebase-orange">
          Twitter
        </Link>
      </div>
    </>
  );
};

export default Footer;
