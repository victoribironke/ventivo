import ErrorMessage from "@/components/hoc/ErrorMessage";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Bricolage_Grotesque } from "next/font/google";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export const bg = Bricolage_Grotesque({ display: "swap", subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <Toaster
        toastOptions={{
          className: bg.className,
          // style: {
          //   backgroundColor: "rgb(63 63 70)",
          //   color: "#fff",
          //   border: "1px solid rgb(63 63 70 / 0.4)",
          // },
        }}
      />
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <main
          className={cn(
            "w-full min-h-screen flex justify-start items-center flex-col gap-20 px-6 pb-16",
            bg.className
          )}
        >
          <Head>
            <title>Ventivo</title>
            <meta
              name="google-site-verification"
              content="TXBmC1FVqyiPogzJvLfPdiI5Ot6__fS9z-48FsWmMUU"
            />
          </Head>

          <Component {...pageProps} />
        </main>
      </ErrorBoundary>
    </>
  );
};

export default App;
