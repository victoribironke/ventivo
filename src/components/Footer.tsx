import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl p-4 gap-4 flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center">
        <Image
          alt="Logo"
          src={IMAGES.logo_transparent.src}
          width={IMAGES.logo_transparent.w}
          height={IMAGES.logo_transparent.h}
          className="w-8 h-8"
        />
      </div>

      <p className="text-gray-400 text-sm">
        ©️ {new Date().getFullYear()} Ventivo.
      </p>

      <div className="text-sm text-gray-400 flex items-center gap-2">
        <Link href={PAGES.terms} className="hover:underline">
          Terms
        </Link>
        •
        <Link href={PAGES.privacy_policy} className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
