import { atom } from "jotai";
import { Session } from "@supabase/supabase-js";
import { Customer } from "@/types/dashboard";

const user_session = atom<Session | null>(null);
const customer_info = atom<Customer[]>([]);
const search = atom("");
const app_theme = atom<"light" | "dark">("light");
// const country = atom("");

export { user_session, customer_info, search, app_theme };
