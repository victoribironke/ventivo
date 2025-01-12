import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      href: PAGES.twitter,
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: PAGES.instagram,
      icon: FaInstagram,
    },
    {
      name: "TikTok",
      href: PAGES.tiktok,
      icon: FaTiktok,
    },
  ];

  return (
    <footer className="w-full my-10">
      <div className="mx-auto flex flex-col items-center text-center gap-6">
        <Image
          alt="Logo"
          src={IMAGES.logo_transparent.src}
          width={IMAGES.logo_transparent.w}
          height={IMAGES.logo_transparent.h}
          className="w-10 h-10"
        />

        <p className="text-gray-400 text-sm">
          ©️ {new Date().getFullYear()} Ventivo.
        </p>

        <div className="text-sm text-gray-400 flex flex-row items-center gap-2">
          <Link href={PAGES.terms} className="hover:underline">
            Terms
          </Link>
          <span>•</span>
          <Link href={PAGES.privacy_policy} className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-row items-center gap-6">
          {socials.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <s.icon size={20} fill="#374151" />
            </Link>
          ))}
        </div>

        <Link
          href={PAGES.firestore_query_generator}
          className="hover:underline text-sm text-firebase-orange"
        >
          Free tool - Firestore Query Generator
        </Link>

        <a
          href="https://www.producthunt.com/posts/ventivo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ventivo"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=474416&theme=light"
            alt="Ventivo - Real-time charts around your Firebase data | Product Hunt"
            className="w-[250px] h-[54px]"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
