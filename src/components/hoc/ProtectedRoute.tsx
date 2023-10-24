import { PAGES } from "@/constants/pages";
import { getUserSession } from "@/utils/supabase";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PageLoader from "../general/PageLoader";

// Check if user is logged in
export const checkAuthentication = (ProtectedComponent: () => JSX.Element) => {
  return function CheckIfTheUserIsLoggedIn(props: object) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      (async () => {
        const { data } = await getUserSession();

        if (data.session === null) {
          router.push(PAGES.login);
          return null;
        }

        setIsLoading(false);
      })();
    });

    if (isLoading) {
      return <PageLoader type="full" />;
    }

    return <ProtectedComponent {...props} />;
  };
};

// Prevents already logged in user access to auth modals
export const alreadyLoggedIn = (ProtectedComponent: () => JSX.Element) => {
  return function StopLoggedInUsersAccessToAuthModals(props: object) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      (async () => {
        const { data } = await getUserSession();

        if (data.session) {
          router.push(PAGES.dashboard);
          return null;
        }

        setIsLoading(false);
      })();
    });

    if (isLoading) {
      return <PageLoader type="small" />;
    }

    return <ProtectedComponent {...props} />;
  };
};
