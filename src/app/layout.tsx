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
      <body className="antialiased dark flex items-center justify-center">
        <RecoilRoot>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "hsl(var(--muted) / 0.5)",
                color: "#fff",
              },
            }}
          />

          {children}
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
