import { IMAGES } from "@/constants/constants";
import { HeadTemplateProps } from "@/types/general";
import Head from "next/head";

const HeadTemplate = ({ title }: HeadTemplateProps) => {
  return (
    <Head>
      <title>{title ? `${title} ~ Ventivo` : "Ventivo"}</title>
      <link
        rel="shortcut-icon"
        href={IMAGES.logo_transparent.src}
        type="image/x-icon"
      />
      <link rel="icon" href={IMAGES.logo_transparent.src} type="image/x-icon" />
      <meta
        name="description"
        content="Get real-time charts around your Firebase data."
      />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://ventivo.co" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ventivo" />
      <meta
        property="og:description"
        content="Get real-time charts around your Firebase data."
      />
      <meta property="og:image" content="https://ventivo.co/og-image.png" />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ventivo.co" />
      <meta property="twitter:url" content="https://ventivo.co" />
      <meta name="twitter:title" content="Ventivo" />
      <meta
        name="twitter:description"
        content="Get real-time charts around your Firebase data."
      />
      <meta name="twitter:image" content="https://ventivo.co/og-image.png" />
    </Head>
  );
};

export default HeadTemplate;
