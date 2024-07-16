import HeadTemplate from "@/components/general/HeadTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES, TABLES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { supabase } from "@/services/supabase";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const JoinWaitlist = async () => {
    setLoading(true);

    const { error } = await supabase.from(TABLES.waitlist).insert({
      email,
    });

    if (error) {
      toast.error("An error occured");
      return;
    }

    toast.success("You've been added to the waitlist");
    setEmail("");

    setLoading(false);
  };

  return (
    <>
      <HeadTemplate title="Home" />

      <div className="w-full min-h-screen flex items-center justify-center flex-col p-6 gap-2">
        <div className="w-full max-w-sm mb-4">
          <Image
            src={IMAGES.logo.src}
            width={IMAGES.logo.w}
            height={IMAGES.logo.h}
            alt="Logo"
            className="w-10 rounded-md self-start"
            priority={true}
          />
        </div>

        <p className="text-3xl font-medium w-full max-w-sm text-white">
          Ventivo
        </p>

        <p className="w-full max-w-sm font-light text-lg text-gray-400 mb-6">
          Get real-time charts around your Firebase data. Join the waitlist.
        </p>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          className="bg-black max-w-sm text-white font-light"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          className="bg-white font-normal text-black w-full max-w-sm hover:bg-white/90 flex items-center justify-center gap-2"
          disabled={loading}
          onClick={JoinWaitlist}
        >
          <p>
            <AiOutlineLoading3Quarters
              className={cn("animate-spin", loading ? "block" : "hidden")}
            />
          </p>
          Join the waitlist
        </Button>
      </div>
    </>
  );
};

export default Home;
