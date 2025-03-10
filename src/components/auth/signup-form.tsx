"use client";

import { Github, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { isValidEmail } from "@/lib/utils";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { IMAGES, PAGES } from "@/constants/constants";
import {
  getCustomer,
  getUserSession,
  signInWithEmail,
  signInWithGithub,
  signInWithGoogle,
} from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { customer_info, user_session } from "@/atoms/atoms";
import { alreadyLoggedIn } from "../hoc/protected-route";

const SignupForm = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const setUserSession = useSetRecoilState(user_session);
  const setCustomerInfo = useSetRecoilState(customer_info);

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
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link
            href={PAGES.home}
            className="flex flex-col items-center gap-2 font-medium"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <Image
                src={IMAGES.logo.src}
                width={IMAGES.logo.w}
                height={IMAGES.logo.h}
                alt="Logo"
              />
            </div>
            <span className="sr-only">Ventivo</span>
          </Link>
          <h1 className="text-xl font-semibold">Create a free account</h1>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href={PAGES.login} className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            className="w-full"
            onClick={() => signUp("email")}
            disabled={loading}
          >
            Login {loading && <LoaderCircle className="animate-spin" />}
          </Button>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        {/* <div className="grid gap-4 sm:grid-cols-2"> */}

        <Button
          variant="outline"
          className="w-full"
          disabled={loading}
          onClick={() => signUp("github")}
        >
          <Github />
          Continue with Github
          {loading && <LoaderCircle className="animate-spin" />}
        </Button>
        {/* </div> */}
      </div>

      {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  );
};

export default alreadyLoggedIn(SignupForm);
