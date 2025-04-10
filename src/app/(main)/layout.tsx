import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col relative gap-8 p-6 md:py-12">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
