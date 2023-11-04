import HeadTemplate from "@/components/general/HeadTemplate";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { isValidEmail } from "@/utils/helpers";
import { supabase } from "@/services/supabase";
import { TABLES } from "@/constants/tables";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { ENDPOINTS } from "@/constants/endpoints";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToWaitlist = async () => {
    const { name, email } = formData;

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setDisabled(true);
    setLoading(true);

    const { error } = await supabase.from(TABLES.waitlist).insert({
      name,
      email,
    });

    if (error) {
      toast.error("An error occured.");
      return;
    }

    try {
      await (
        await fetch(
          ENDPOINTS.sendWaitlistConfirmation(name.split(" ")[0], email)
        )
      ).json();

      toast.success("You've been added to the waitlist.");
      setFormData({ name: "", email: "" });
    } catch (e) {
      toast.error("An error occured.");
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  };

  return (
    <>
      <HeadTemplate />

      <section className="w-full max-w-[60rem] h-[80vh] flex mx-6 gap-6">
        <div className="w-full md:w-[70%] h-full flex items-center md:items-start justify-center flex-col">
          <p className="mb-6 max-w-lg text-3xl md:text-4xl text-center md:text-left text-blue font-medium">
            Supercharge your event space business
          </p>

          <p className="mb-6 max-w-lg text-lg md:text-xl text-center md:text-left text-white">
            List your venue, effortlessly manage bookings, and securely receive
            payments, all in one place.
          </p>

          <p className="mb-6 max-w-lg text-lg md:text-xl text-center md:text-left text-white">
            Experience the convenience and efficiency of Ventivo that simplifies
            every aspect of managing your venue. From effortless booking
            management to secure payment processing, we are here to support your
            success.
          </p>

          <div className="w-full max-w-lg flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              className="w-full p-3 border-2 bg-transparent text-white outline-none rounded-lg"
              onChange={(e) =>
                setFormData((k) => {
                  return {
                    ...k,
                    name: e.target.value,
                  };
                })
              }
              max={100}
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              className="w-full p-3 border-2 bg-transparent text-white outline-none rounded-lg"
              onChange={(e) =>
                setFormData((k) => {
                  return {
                    ...k,
                    email: e.target.value,
                  };
                })
              }
              max={100}
            />
          </div>

          <button
            className="bg-blue max-w-lg flex items-center justify-center gap-3 w-full text-white py-3.5 my-6 rounded-lg font-medium  disabled:cursor-not-allowed disabled:opacity-70"
            onClick={addToWaitlist}
            disabled={disabled}
          >
            Join the waitlist{" "}
            {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
          </button>

          <div className="flex gap-3">
            <Link href="https://www.instagram.com/ventivo_">
              <FaInstagram className="text-white text-2xl" />
            </Link>
            <Link href="https://twitter.com/ventivo_">
              <FaXTwitter className="text-white text-2xl" />
            </Link>
            <Link href="https://www.facebook.com/ventivo.co">
              <FaFacebookF className="text-blue text-2xl hidden" />
            </Link>
          </div>
        </div>

        <Link
          href="https://unsplash.com/photos/black-and-white-heart-illustration-f8sDFh-So88"
          className="hidden md:block"
          target="_blank"
        >
          <Image
            src={IMAGES.placeholderVertical.src}
            width={IMAGES.placeholderVertical.w}
            height={IMAGES.placeholderVertical.h}
            alt="art"
            className="h-[80vh] w-auto rounded-lg max-h-[50rem]"
          />
        </Link>
      </section>
    </>
  );
};

export default Home;
