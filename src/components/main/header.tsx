import { IMAGES, PAGES } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full max-w-3xl grid place-items-center">
      <Link href={PAGES.home}>
        <Image
          src={IMAGES.logo.src}
          width={IMAGES.logo.w}
          height={IMAGES.logo.h}
          alt="Logo"
          className="w-12 h-auto"
        />
      </Link>
    </div>
  );
};

export default Header;
