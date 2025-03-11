"use client";

import { checkAuthentication } from "@/components/hoc/protected-route";

const Page = () => {
  return <p>hi</p>;
};

// export default Page;
export default checkAuthentication(Page);
