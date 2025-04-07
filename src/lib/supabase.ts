import { BASE_URL, PAGES, TABLES } from "@/constants/constants";
import { supabase } from "@/services/supabase";

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();

  return { data };
};

export const getUserSession = async () => {
  const { data } = await supabase.auth.getSession();

  return { data };
};

export const signInWithEmail = async (email: string, create: boolean) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: create,
      emailRedirectTo: BASE_URL + PAGES.confirm,
    },
  });

  return { data, error };
};

export const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: BASE_URL + PAGES.confirm },
  });

  return { data, error };
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: BASE_URL + PAGES.confirm },
  });

  return { data, error };
};

export const getCustomer = async (email: string) => {
  const { data, error } = await supabase
    .from(TABLES.customers)
    .select()
    .eq("email", email);

  if (error) return [];

  return data;
};

export const signOut = () => supabase.auth.signOut();
