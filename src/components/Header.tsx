import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { IMAGES, PAGES } from "@/constants/constants";
import toast from "react-hot-toast";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full text-white z-10 fixed flex items-center justify-center px-6">
      <div className="w-full max-w-5xl p-4 relative overflow-hidden backdrop-blur-xl flex items-center justify-between gap-4 border rounded-2xl mt-6 bg-white bg-opacity-5">
        <Link
          href={PAGES.home}
          className="mr-auto flex items-center justify-center gap-4"
        >
          <Image
            alt="Logo"
            src={IMAGES.logo_transparent.src}
            width={IMAGES.logo_transparent.w}
            height={IMAGES.logo_transparent.h}
            className="w-8 h-8"
          />
        </Link>

        <Link
          href={PAGES.login}
          className="hover:bg-gray-100 py-1.5 px-4 rounded-md"
        >
          Login
        </Link>
        <Link
          href={PAGES.signup}
          className="bg-firebase-orange text-white py-1.5 px-4 rounded-md"
        >
          Get started
        </Link>
      </div>
    </header>
  );
};

export default Header;
