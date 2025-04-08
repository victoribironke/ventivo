import PostgresProjectPage from "@/components/dashboard/postgres-project";
import { BASE_URL, PAGES } from "@/constants/constants";
import { Metadata } from "next";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await props.params;

  return {
    title: `Project (${slug}) ~ Ventivo`,
    description: "Get realtime charts from your data.",
    openGraph: {
      title: `Project (${slug}) ~ Ventivo`,
      description: "Get realtime charts from your data.",
      type: "website",
      url: BASE_URL + PAGES.project.postgres(slug),
      images: [
        {
          url: "https://ventivo.co/og-image.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Project (${slug}) ~ Ventivo`,
      description: "Get realtime charts from your data.",

      images: [
        {
          url: "https://ventivo.co/og-image.png",
        },
      ],
    },
  };
};

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  return <PostgresProjectPage slug={slug} />;
};

export default Page;
