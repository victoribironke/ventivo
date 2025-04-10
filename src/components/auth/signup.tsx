"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { cn, isValidEmail } from "@/lib/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import { PAGES } from "@/constants/constants";
import {
  signInWithEmail,
  signInWithGithub,
  signInWithGoogle,
} from "@/lib/supabase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (type: "email" | "github" | "google") => {
    setLoading(true);

    if (type === "email") {
      if (!isValidEmail(email)) {
        toast.error("Email address is invalid.");
        setLoading(false);

        return;
      }

      // const { data, error: e } = await getFishyDomains();

      // if (!e && !data?.split("\n").includes(email.split("@")[1])) {
      const { error } = await signInWithEmail(email, true);

      if (error) toast.error("A server error occured.");
      else toast.success("A link has been sent to your email.");
      // } else toast.error("You cannot register with that email address.");
    } else if (type === "github") {
      const { error } = await signInWithGithub();

      if (error) {
        toast.error("A server error occured.");
        setLoading(false);

        return;
      }

      push(PAGES.dashboard);
    } else if (type === "google") {
      const { error } = await signInWithGoogle();

      if (error) {
        toast.error("A server error occured.");
        setLoading(false);

        return;
      }

      push(PAGES.dashboard);
    }

    setLoading(false);
  };

  return (
    <div className="w-full bg-muted/30 max-w-xl p-6 flex items-center justify-center flex-col gap-4 rounded-xl border">
      <p className="w-full font-medium text-xl md:text-2xl mb-4">
        Create an account
      </p>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        className="bg-firebase-orange text-white hover:bg-firebase-orange/90 w-full"
        onClick={() => signUp("email")}
        disabled={loading}
      >
        <p>
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", loading ? "block" : "hidden")}
          />
        </p>
        Sign up
      </Button>

      <div className="w-full flex gap-2 items-center justify-center my-2">
        <Separator className="w-[45%] border" />
        <p className="text-gray-400 text-sm">OR</p>
        <Separator className="w-[45%] border" />
      </div>

      <Button
        className="w-full"
        onClick={() => signUp("github")}
        disabled={loading}
        variant="outline"
      >
        <p>
          <FaGithub className={cn("text-lg", loading ? "hidden" : "block")} />
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", loading ? "block" : "hidden")}
          />
        </p>
        Github
      </Button>

      {/* <Button
          className="bg-zinc-700 text-white w-full font-normal max-w-sm hover:bg-zinc-700/90 flex items-center justify-center gap-2"
          onClick={() => signUp("google")}
          disabled={loading}
        >
          <p>
            <FaGoogle className={cn("text-lg", loading ? "hidden" : "block")} />
            <AiOutlineLoading3Quarters
              className={cn("animate-spin", loading ? "block" : "hidden")}
            />
          </p>
          Google
        </Button> */}

      <Link
        href={PAGES.login}
        className="mt-4 underline underline-offset-4 text-sm text-gray-400"
      >
        Already have an account? Login
      </Link>
    </div>
  );
};

export default SignUp;
