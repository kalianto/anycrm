export default function PageTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>{children}</h2>
    </>
  );
}
