import { BASE_URL, PAGES } from "@/constants/constants";
import { getAllArticles } from "@/lib/notion";
import { Metadata } from "next";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import slugify from "slugify";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog ~ Ventivo",
  description: "Blog posts for Ventivo.",
  openGraph: {
    title: "Blog ~ Ventivo",
    description: "Blog posts for Ventivo.",
    type: "website",
    url: BASE_URL + PAGES.blog,
    images: [
      {
        url: `${BASE_URL}/api/og?title=${encodeURIComponent("Blog")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog ~ Ventivo",
    description: "Blog posts for Ventivo.",

    images: [
      {
        url: `${BASE_URL}/api/og?title=${encodeURIComponent("Blog")}`,
      },
    ],
  },
};

const Page = async () => {
  const { data } = await getAllArticles();

  return (
    <section className="w-full max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-6">
        Blog
      </h1>

      {data.map((a) => {
        const date = new Date(a.date_published).toLocaleDateString("en-US", {
          dateStyle: "medium",
        });
        const slug = slugify(a.title).toLowerCase();

        return (
          <div
            key={a.id}
            className="flex flex-col sm:flex-row items-start justify-center gap-2 sm:gap-8 group transition-all w-full mb-4"
          >
            <h2 className="mb-2 sm:mt-4 whitespace-nowrap w-full sm:w-1/6">
              {date}
            </h2>

            <Link href={PAGES.blog_post(slug)} className="w-full sm:w-5/6">
              <div className="w-full flex flex-col gap-3 bg-muted/50 hover:bg-muted/60 border rounded-lg p-4">
                <h6 className="text-lg font-medium">{a.title}</h6>

                <p className="text-muted-foreground">{a.description}</p>

                <span className="bg-transparent flex items-center justify-center gap-1 group-hover:gap-2 text-sm w-fit text-firebase-orange hover:bg-transparent hover:underline">
                  Read article <FaAnglesRight fill="#ff9100" size={12} />
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Page;
