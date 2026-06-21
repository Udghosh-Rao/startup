export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background grid min-h-screen place-items-center p-4 sm:p-8">
      {children}
    </div>
  );
}
