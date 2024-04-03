export default function PageHeading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex items-center py-4'>
      <h1 className='text-lg font-semibold md:text-2xl'>{children}</h1>
    </div>
  );
}