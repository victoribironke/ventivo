"use client";

import { Button } from "../components/ui/button";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError = ({ reset }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <section className="w-full grid min-h-screen place-items-center px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold text-red">Error.</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              An error occured
            </h1>
            <p className="mt-6 text-lg leading-7">Please refresh the page.</p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Button
                onClick={reset}
                className="bg-firebase-orange hover:bg-firebase-orange/90"
              >
                Refresh
              </Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default GlobalError;
