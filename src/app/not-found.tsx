import Link from 'next/link';
import { SearchX, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="bg-secondary mb-8 flex h-24 w-24 items-center justify-center rounded-full">
        <SearchX className="text-muted-foreground h-10 w-10" />
      </div>

      <h1 className="font-heading mb-4 text-7xl font-bold tracking-tight">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-semibold">Page not found</h2>

      <p className="text-muted-foreground mb-10 max-w-md leading-relaxed">
        The page you are looking for doesn&apos;t exist, has been moved, or is
        temporarily unavailable.
      </p>

      <Link
        href="/"
        className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-md px-6 py-3 font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Homepage
      </Link>
    </div>
  );
}
