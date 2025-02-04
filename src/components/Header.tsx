import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white border flex items-center justify-between flex-col w-full p-2 gap-20 rounded-xl fixed max-w-7xl">
      <div className="w-full flex items-center justify-between gap-4">
        <Link href="/" className="mr-auto">
          <Image
            src={IMAGES.logo_transparent.src}
            alt="Ventivo Logo"
            width={IMAGES.logo_transparent.w}
            height={IMAGES.logo_transparent.h}
            className="w-8 aspect-square"
          />
        </Link>

        <Link href={PAGES.login}>
          <Button className="bg-white text-black shadow-none p-0 hover:bg-white hover:underline">
            Log in
          </Button>
        </Link>

        <Link href={PAGES.signup}>
          <Button className="bg-black text-white rounded-lg hover:bg-black shadow-none">
            Get started
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
