import { IMAGES } from "@/constants/images";
import { HeadTemplateProps } from "@/types/general";
import Head from "next/head";

const HeadTemplate = ({ title }: HeadTemplateProps) => {
  return (
    <Head>
      <title>{title ?? "Ventivo"}</title>
      <link rel="shortcut-icon" href={IMAGES.logo.src} type="image/x-icon" />
      <link rel="icon" href={IMAGES.logo.src} type="image/x-icon" />
    </Head>
  );
};

export default HeadTemplate;
