"use client";

import PageLoader from "@/components/general/page-loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PAGES, SIDEBAR_ITEMS } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Logo from "@/components/general/logo";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useSetAtom } from "jotai";
import { Input } from "@/components/ui/input";
import { getUserSession, getCustomer } from "@/lib/supabase";
import { customer_info, search, user_session } from "@/atoms/atoms";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: 10000,
    },
  },
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  const pathname = usePathname();
  const setSearch = useSetAtom(search);

  const setUserSession = useSetAtom(user_session);
  const setCustomerInfo = useSetAtom(customer_info);

  const searchPlaceholder =
    pathname === PAGES.dashboard ? "projects" : "charts";

  // const signOutUser = async () => {
  //   const { error } = await signOut();

  //   if (error) {
  //     toast.error("An error occured.");

  //     return;
  //   }

  //   push(PAGES.login);
  // };

  useEffect(() => {
    (async () => {
      const { data } = await getUserSession();

      if (data.session === null) push(PAGES.login);
      else {
        const customer = await getCustomer(data.session.user.email as string);

        setCustomerInfo(customer);
        setUserSession(data.session);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return <PageLoader type="full" />;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full [--header-height:calc(theme(spacing.14))] bg-[#f5f5f5]">
        <section className="w-full min-h-screen flex items-center flex-col relative pt-[4.5rem]">
          <div className="w-full bg-white border-b p-4 flex items-center justify-center fixed z-50 top-0">
            <div className="w-full max-w-[1280px] flex gap-4 items-center justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden">
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mx-4 md:hidden">
                  {SIDEBAR_ITEMS(pathname).map((s, i) => (
                    <DropdownMenuItem key={i}>
                      <Link href={s.link} key={i} className="w-full">
                        <Button
                          className={cn(
                            "w-full justify-start hover:bg-gray-200 gap-2 px-3",
                            s.isActive ? "bg-main/10 hover:bg-main/10" : ""
                          )}
                          variant="ghost"
                        >
                          <s.icon />
                          {s.title}
                        </Button>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Logo />

              <Input
                className={cn(
                  "max-w-lg rounded-lg focus-within:border-2 focus-within:border-firebase-orange mr-auto",
                  pathname === PAGES.settings ? "hidden" : "block"
                )}
                placeholder={`Search your ${searchPlaceholder}...`}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full bg-gray-100 min-h-[calc(100vh-4rem)] p-4 pb-10 flex items-center flex-col">
            <div className="w-full flex gap-8 max-w-[1280px] h-auto relative">
              <div className="w-80 md:w-2/12 hidden md:flex flex-col gap-2 sticky top-20 h-full">
                {SIDEBAR_ITEMS(pathname).map((s, i) => (
                  <Link href={s.link} key={i}>
                    <Button
                      className={cn(
                        "w-full justify-start hover:bg-gray-200 gap-4 text-base",
                        s.isActive ? "bg-main/10 hover:bg-main/10" : ""
                      )}
                      variant="ghost"
                    >
                      <s.icon />
                      {s.title}
                    </Button>
                  </Link>
                ))}
              </div>

              <div className="w-full md:w-10/12 flex flex-col gap-6">
                {children}
              </div>
            </div>
          </div>
        </section>
      </div>
    </QueryClientProvider>
  );
};

export default RootLayout;
