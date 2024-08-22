import Image from "next/image";
import { IMAGES, PAGES } from "@/constants/constants";
import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="w-full text-white z-10 fixed flex items-center justify-center px-6">
//       <div className="w-full max-w-5xl p-4 relative overflow-hidden backdrop-blur-xl flex items-center justify-between gap-4 border rounded-2xl mt-6 bg-white bg-opacity-5">
//         <Link
//           href={PAGES.home}
//           className="mr-auto flex items-center justify-center gap-4"
//         >
//           <Image
//             alt="Logo"
//             src={IMAGES.logo_transparent.src}
//             width={IMAGES.logo_transparent.w}
//             height={IMAGES.logo_transparent.h}
//             className="w-8 h-8"
//           />
//         </Link>

//         <Link
//           href={PAGES.login}
//           className="hover:bg-gray-100 py-1.5 px-4 rounded-md hidden sm:block"
//         >
//           Login
//         </Link>
//         <Link
//           href={PAGES.signup}
//           className="bg-firebase-orange text-white py-1.5 px-4 rounded-md"
//         >
//           Get started
//         </Link>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-20 bg-white shadow-md">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href={PAGES.home} className="flex items-center gap-2">
          <Image
            alt="Ventivo Logo"
            src={IMAGES.logo_transparent.src}
            width={IMAGES.logo_transparent.w}
            height={IMAGES.logo_transparent.h}
            className="w-10 h-10"
          />
          {/* <span className="text-xl font-bold text-gray-900">Ventivo</span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-700 hover:text-firebase-orange transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-700 hover:text-firebase-orange transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="#blog"
            className="text-gray-700 hover:text-firebase-orange transition-colors duration-300"
          >
            Blog
          </Link>
        </nav>

        <div className="flex gap-4">
          <Link
            href={PAGES.login}
            className="text-gray-700 py-2 px-4 rounded-md hover:text-firebase-orange transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href={PAGES.signup}
            className="bg-firebase-orange text-white py-2 px-6 rounded-full shadow hover:bg-firebase-orange/90 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
