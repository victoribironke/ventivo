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

export const redeemCode = async (email: string, code: string) => {
  const { data, error } = await supabase
    .from(TABLES.coupons)
    .select()
    .eq("code", code);

  if (error || data.length === 0) return { data: null, error: "Invalid code." };

  if (data[0].used)
    return { data: null, error: "This code has been redeemed." };

  await supabase.from(TABLES.coupons).update({ used: true }).eq("code", code);

  const c = await getCustomer(email);

  if (c.length === 0) {
    await supabase.from(TABLES.customers).insert({
      email,
      name: "",
      customer_id: `CUS_appsumo_${Date.now()}`,
    });
  }

  await supabase
    .from(TABLES.customers)
    .update({ plan_id: `PLN_appsumo_${Date.now()}`, has_access: true })
    .eq("email", email);

  return { data: "Your code has been redeemed.", error: null };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  return { error };
};
