import { atom } from "jotai";
import { Session } from "@supabase/supabase-js";
import { Customer } from "@/types/dashboard";

export const user_session = atom<Session | null>(null);

export const customer_info = atom<Customer[]>([]);

export const search = atom("");

export const country = atom("");
