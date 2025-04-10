const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col relative gap-8">
      {children}
    </main>
  );
};

export default RootLayout;
