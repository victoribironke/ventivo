const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full min-h-screen flex items-center flex-col relative pt-20">
      {children}
    </main>
  );
};

export default RootLayout;
