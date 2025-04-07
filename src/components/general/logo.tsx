import { IMAGES } from "@/constants/constants";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3 font-medium">
      {/* <Link
        href={PAGES.home}
        className="flex items-center justify-center gap-3 font-medium"
      > */}
      {/* <div className="flex p-1.5 bg-white items-center justify-center rounded-md"> */}
      <Image
        src={IMAGES.logo.src}
        width={IMAGES.logo.w}
        height={IMAGES.logo.h}
        alt="Logo"
        className="w-8 h-auto"
      />
      {/* </div> */}
    </div>
  );
};

export default Logo;
