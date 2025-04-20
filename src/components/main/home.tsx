"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { PAGES } from "@/constants/constants";
import { useEffect, useState } from "react";
import { getUserSession } from "@/lib/supabase";

const Home = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await getUserSession();

      if (data.session) setEmail(data.session.user.email || "");
    })();
  }, []);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-4xl text-center">
        Get <span className="text-firebase-orange">realtime</span> charts from your data
      </h1>

      <p className="sm:text-lg md:text-xl max-w-xl text-center">
        Connect your data source, create your charts and start tracking your key metrics.
      </p>

      <div className="flex items-center justify-center gap-4">
        {email ? (
          <Link href={PAGES.dashboard}>
            <Button variant="outline">
              <img
                src={`https://api.dicebear.com/9.x/glass/svg?seed=${email}`}
                alt="Avatar"
                className="size-4 rounded-full"
              />

              {email}
            </Button>
          </Link>
        ) : (
          <>
            <Link href={PAGES.login}>
              <Button variant="outline">Sign in</Button>
            </Link>

            <Link href={PAGES.signup}>
              <Button className="bg-firebase-orange hover:bg-firebase-orange/90 text-white hover:text-white">
                Get started
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* <Link
        href="https://startupfa.me/s/ventivo?utm_source=ventivo.co"
        target="_blank"
      >
        <img
          src="https://startupfa.me/badges/featured-badge-small.webp"
          alt="Featured on Startup Fame"
          width="224"
          height="36"
        />
      </Link> */}
    </>
  );
};

export default Home;
