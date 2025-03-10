import { atom } from "recoil";
import { Session } from "@supabase/supabase-js";
import { Customer } from "@/types/dashboard";

export const user_session = atom<Session | null>({
  key: "user session",
  default: null,
});

export const customer_info = atom<Customer[]>({
  key: "has customer upgraded",
  default: [],
});

export const search = atom({
  key: "search",
  default: "",
});

export const country = atom({
  key: "country",
  default: "",
});
