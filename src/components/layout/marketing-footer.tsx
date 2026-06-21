import * as React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-border border-t pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="bg-foreground font-heading text-background flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold">
                M
              </div>
              <span className="font-heading text-foreground text-2xl font-bold tracking-tight">
                Mextify<span className="text-foreground/50">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              The premium platform connecting ambitious talent with fast-growing
              companies.
            </p>
          </div>

          {/* Candidates */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">
              Candidates
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Browse Jobs', href: '/jobs' },
                { name: 'Browse Companies', href: '/companies' },
                { name: 'Career Resources', href: '/resources' },
                { name: 'Create Profile', href: '/register' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">
              Employers
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Post a Job', href: '/employer' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Employer Brand', href: '/employer/brand' },
                { name: 'Hiring Guide', href: '/resources/hiring' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground flex items-start text-sm">
                <MapPin className="text-muted-foreground mr-3 h-5 w-5 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </li>
              <li className="text-muted-foreground flex items-center text-sm">
                <Mail className="text-muted-foreground mr-3 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:hello@mextify.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@mextify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mextify. All rights reserved.
          </p>
          <div className="text-muted-foreground flex gap-4 text-sm">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
