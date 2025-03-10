"use client";

import { PAGES } from "@/constants/constants";
import { supabase } from "@/services/supabase";
import { LoaderCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { alreadyLoggedIn } from "../hoc/protected-route";

const Confirm = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const th = searchParams.get("token_hash");
    const t = searchParams.get("type");

    supabase.auth
      .verifyOtp({
        token_hash: th as string,
        type: t as "magiclink",
      })
      .then(({ data, error }) => {
        if (data) {
          toast.success("Link verified.");
          push(PAGES.dashboard);
        }

        if (error) {
          // toast.error("Invalid link.");
          push(PAGES.login);
        }
      })
      .catch(() => {
        toast.error("An error occured.");
        push(PAGES.login);
      });
  }, [searchParams]);

  return (
    <div className="flex gap-6 items-center justify-center">
      <LoaderCircle className="animate-spin" />
      <p>Verifying link...</p>
    </div>
  );
};

export default alreadyLoggedIn(Confirm);
