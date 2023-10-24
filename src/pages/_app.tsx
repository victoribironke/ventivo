import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Onest } from "next/font/google";
import { classNames } from "@/utils/helpers";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const onest = Onest({ subsets: ["latin"], display: "swap" });
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Toaster toastOptions={{ className: onest.className }} />
        <main
          className={classNames(
            onest.className,
            "min-h-screen w-full flex items-center justify-start"
          )}
        >
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
