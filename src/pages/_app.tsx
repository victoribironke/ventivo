import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Manrope } from "next/font/google";
import { classNames } from "@/utils/helpers";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Toaster toastOptions={{ className: manrope.className }} />
        <main
          className={classNames(
            manrope.className,
            "min-h-screen w-full flex items-center justify-center py-6"
          )}
        >
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
