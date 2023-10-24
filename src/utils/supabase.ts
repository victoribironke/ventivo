import { supabase } from "@/services/supabase";

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();

  return { data };
};

export const getUserSession = async () => {
  const { data } = await supabase.auth.getSession();

  return { data };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  return { error };
};
