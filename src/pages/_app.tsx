import ErrorMessage from "@/components/hoc/ErrorMessage";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bricolage_Grotesque } from "next/font/google";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";

export const bg = Bricolage_Grotesque({ display: "swap", subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Toaster
        toastOptions={{
          className: bg.className,
          style: {
            backgroundColor: "rgb(63 63 70)",
            color: "#fff",
            border: "1px solid rgb(63 63 70 / 0.4)",
          },
        }}
      />
      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <main className={cn("w-full min-h-screen", bg.className)}>
          <Component {...pageProps} />
        </main>
      </ErrorBoundary>
    </>
  );
};

export default App;
