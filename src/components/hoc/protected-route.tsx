import { PAGES } from "@/constants/constants";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import PageLoader from "../general/page-loader";
import { JSX } from "react";
import { getUserSession, getCustomer } from "@/lib/supabase";
import { useSetRecoilState } from "recoil";
import { customer_info, user_session } from "@/atoms/atoms";

// Check if user is logged in
export const checkAuthentication = (ProtectedComponent: any) => {
  return function CheckIfTheUserIsLoggedIn(props: object) {
    const [isLoading, setIsLoading] = useState(true);
    const setUserSession = useSetRecoilState(user_session);
    const setCustomerInfo = useSetRecoilState(customer_info);

    useEffect(() => {
      (async () => {
        const { data } = await getUserSession();

        if (data.session === null) redirect(PAGES.login);
        else {
          const customer = await getCustomer(data.session.user.email as string);

          setCustomerInfo(customer);
          setUserSession(data.session);
        }

        setIsLoading(false);
      })();
    });

    if (isLoading) {
      return <PageLoader fullScreen />;
    }

    return <ProtectedComponent {...props} />;
  };
};

// Prevents already logged in user access to auth modals
export const alreadyLoggedIn = (ProtectedComponent: () => JSX.Element) => {
  return function StopLoggedInUsersAccessToAuthModals(props: object) {
    const [isLoading, setIsLoading] = useState(true);
    const setUserSession = useSetRecoilState(user_session);
    const setCustomerInfo = useSetRecoilState(customer_info);

    useEffect(() => {
      (async () => {
        const { data } = await getUserSession();

        if (data.session) {
          const customer = await getCustomer(data.session.user.email as string);

          setCustomerInfo(customer);
          setUserSession(data.session);

          redirect(PAGES.dashboard);
        }

        setIsLoading(false);
      })();
    });

    if (isLoading) {
      return <PageLoader fullScreen />;
    }

    return <ProtectedComponent {...props} />;
  };
};
