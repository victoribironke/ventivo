import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full mt-40 mb-40 p-6">
      <div className="flex w-full flex-col gap-20 md:flex-row md:justify-between">
        <div className="w-full md:w-1/4 flex flex-col gap-8 text-sm">
          <div className="flex">
            <Link href="/" className="mr-auto">
              <Image
                src={IMAGES.logo_transparent.src}
                alt="Ventivo Logo"
                width={IMAGES.logo_transparent.w}
                height={IMAGES.logo_transparent.h}
                className="w-8 aspect-square"
              />
            </Link>
          </div>
          <div className="flex gap-4 mt-2">
            <Link href={PAGES.twitter}>
              <FaXTwitter className="text-xl" />
            </Link>
            <Link href={PAGES.instagram}>
              <FaInstagram className="text-xl" />
            </Link>
            <Link href={PAGES.tiktok}>
              <FaTiktok className="text-xl" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/4 md:flex">
          <nav className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
            <ul>
              <li className="text-lg font-semibold">Resources</li>
              <li className="pt-4 text-base">
                <Link
                  className="flex items-start text-base hover:underline"
                  href={PAGES.blog}
                >
                  Blog
                </Link>
              </li>
              <li className="pt-4 text-base">
                <Link
                  className="flex items-start text-base hover:underline"
                  href="mailto:support@ventivo.co"
                >
                  Support
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-semibold">Legal</li>
              <li className="pt-4 text-base">
                <Link
                  className="flex items-start text-base hover:underline"
                  href={PAGES.terms}
                >
                  Terms
                </Link>
              </li>
              <li className="pt-4 text-base">
                <Link
                  className="flex items-start text-base hover:underline"
                  href={PAGES.privacy_policy}
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-semibold">Tools</li>
              <li className="pt-4 text-base">
                <a
                  className="flex items-start text-base hover:underline"
                  href={PAGES.firestore_query_generator}
                >
                  Firestore query generator
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
