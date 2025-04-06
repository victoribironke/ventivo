export const getCustomerInfo = async (email: string) => {
  const res = await fetch(`https://api.paystack.co/customer/${email}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
    },
  });

  const json = await res.json();

  return json.status ? json.data : null;
};
