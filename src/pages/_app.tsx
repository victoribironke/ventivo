import ErrorMessage from "@/components/hoc/ErrorMessage";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

// export const bg = { subsets: ["latin"] };

// // Instrument_Sans({ display: "swap", subsets: ["latin"] });
// export const sp = Spectral({
//   display: "swap",
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <Analytics />
        <Toaster
          toastOptions={
            {
              // className: bg.className,
              // style: {
              //   backgroundColor: "rgb(63 63 70)",
              //   color: "#fff",
              //   border: "1px solid rgb(63 63 70 / 0.4)",
              // },
            }
          }
        />
        <main className="w-full min-h-screen flex justify-start items-center flex-col gap-6 p-6 max-w-6xl">
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
