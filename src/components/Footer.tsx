import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
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

        <div className="text-sm text-gray-400 flex flex-col md:flex-row items-center gap-2">
          <Link href={PAGES.terms} className="hover:underline">
            Terms
          </Link>
          <span className="hidden md:block">•</span>
          <Link href={PAGES.privacy_policy} className="hover:underline">
            Privacy Policy
          </Link>
          <span className="hidden md:block">•</span>
          <Link
            href={PAGES.twitter}
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Link>
        </div>

        <Link
          href={PAGES.query_generator}
          className="hover:underline text-sm text-firebase-orange mt-2"
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
            className="w-[250px] h-[54px] mt-4"
          />
        </a>
      </div>
    </footer>
  );
};

// const Footer = () => {
//   return (
//     <footer className="w-full max-w-5xl p-4 gap-4 flex items-center justify-center flex-col">
//       <div className="w-full flex items-center justify-center">
//         <Image
//           alt="Logo"
//           src={IMAGES.logo_transparent.src}
//           width={IMAGES.logo_transparent.w}
//           height={IMAGES.logo_transparent.h}
//           className="w-8 h-8"
//         />
//       </div>

//       <p className="text-gray-400 text-sm">
//         ©️ {new Date().getFullYear()} Ventivo.
//       </p>

//       <div className="text-sm text-gray-400 flex items-center gap-2">
//         <Link href={PAGES.terms} className="hover:underline">
//           Terms
//         </Link>
//         •
//         <Link href={PAGES.privacy_policy} className="hover:underline">
//           Privacy Policy
//         </Link>
//         •
//         <Link
//           href={PAGES.twitter}
//           className="hover:underline"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Twitter
//         </Link>
//       </div>
//       <Link
//         href={PAGES.query_generator}
//         className="hover:underline text-sm text-firebase-orange"
//       >
//         Free tool - Firestore query generator
//       </Link>

//       <a
//         href="https://www.producthunt.com/posts/ventivo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ventivo"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=474416&theme=light"
//           alt="Ventivo - Real&#0045;time&#0032;charts&#0032;around&#0032;your&#0032;Firebase&#0032;data | Product Hunt"
//           style={{ width: "250px", height: "54px" }}
//           width="250"
//           height="54"
//         />
//       </a>
//     </footer>
//   );
// };

export default Footer;
