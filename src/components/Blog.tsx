import { IMAGES, PAGES } from "@/constants/constants";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Blog = () => {
  const posts = [
    {
      title: "Why Firebase is the Go-To Solution for Developers",
      link: PAGES.blog.firebase_the_best_option,
      image: IMAGES.coding,
    },
    {
      title: "The Importance of Data Visualization in Modern Business",
      link: PAGES.blog.importance_of_data_visualization,
      image: IMAGES.data_visualization,
    },
    {
      title: "Optimizing Firebase Security Rules for Your Application",
      link: PAGES.blog.security_rules,
      image: IMAGES.security_rules,
    },
  ];

  return (
    <section className="w-full max-w-5xl flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-center">
        <span className="text-firebase-orange">Blog</span>
      </h1>

      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6">
        {posts.map((p, i) => (
          <Link href={p.link} key={i}>
            <div className="bg-white rounded-2xl py-6 flex flex-col justify-center items-center gap-6 border group hover:border-firebase-orange">
              <p className="text-lg md:text-xl text-black px-6 font-semibold w-full group-hover:underline">
                {p.title}
              </p>

              <div className="px-6">
                <Image
                  src={p.image.src}
                  width={p.image.w}
                  height={p.image.h}
                  alt="blog image"
                  className="rounded-lg"
                />
              </div>

              <Separator />

              <div className="w-full px-6">
                <Button className="bg-firebase-orange hover:bg-firebase-orange/90 font-normal w-full py-2 px-4 rounded-xl">
                  Read more
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
