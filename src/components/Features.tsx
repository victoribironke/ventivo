import { IMAGES } from "@/constants/constants";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkDone, IoCheckmarkDoneOutline } from "react-icons/io5";
import { LuCheckCheck } from "react-icons/lu";

const Features = () => {
  const features = [
    "Read-only access",
    "Real-time",
    "Interactive",
    "Beautiful",
  ];

  return (
    <section className="w-full max-w-5xl flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-4">
        <div className="w-full bg-white p-4 rounded-xl border">
          <Image
            alt="Charts screenshot"
            src={IMAGES.charts_display.src}
            width={IMAGES.charts_display.w}
            height={IMAGES.charts_display.h}
            className="w-full"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        {features.map((f, i) => (
          <p
            className="text-green flex items-center justify-center gap-2"
            key={i}
          >
            {f}{" "}
            {i !== features.length - 1 && (
              <span className="text-firebase-orange">•</span>
            )}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Features;
