"use client";

import { Suspense, useEffect, useState } from "react";
import { PAGES } from "@/constants/constants";
import { useRouter } from "next/navigation";
import Logo from "@/components/general/logo";
import { customer_info, user_session } from "@/atoms/atoms";
import { useSetAtom } from "jotai";
import PageLoader from "@/components/general/page-loader";
import { getCustomer, getUserSession } from "@/lib/supabase";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { push } = useRouter();
  const setUserSession = useSetAtom(user_session);
  const setCustomerInfo = useSetAtom(customer_info);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getUserSession();

      if (data.session) {
        const customer = await getCustomer(data.session.user.email as string);

        setCustomerInfo(customer);
        setUserSession(data.session);

        push(PAGES.dashboard);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return <PageLoader type="full" />;

  return (
    <Suspense>
      <div className="w-full grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <Logo />

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm">{children}</div>
          </div>
        </div>

        {/* <div className="relative hidden bg-muted lg:block">
            <Image
              src={IMAGES.auth_image.src}
              width={IMAGES.auth_image.w}
              height={IMAGES.auth_image.h}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div> */}
      </div>
    </Suspense>
  );
};

export default RootLayout;
