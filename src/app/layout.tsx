"use client";

import { Toaster } from "react-hot-toast";
import "./globals.css";
import { RecoilRoot } from "recoil";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased dark">
        <RecoilRoot>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "hsl(var(--muted) / 0.5)",
                color: "#fff",
              },
            }}
          />

          <main className="w-full min-h-screen flex items-center justify-center">
            {children}
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
