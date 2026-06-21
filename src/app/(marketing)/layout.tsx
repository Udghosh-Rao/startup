import { Navbar } from '@/components/layout/marketing-navbar';
import { Footer } from '@/components/layout/marketing-footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
