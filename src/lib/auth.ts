import { LOCAL_STORAGE_KEY, PAGES, ws } from "@/constants/constants";
import { redirect } from "next/navigation";

export const logOut = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);

  ws.close(1000, "Logged out!");

  redirect(PAGES.auth.login);
};
