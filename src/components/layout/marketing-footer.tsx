import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-border border-t pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="bg-accent font-heading flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold text-white">
                N
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Nextify<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              Building the future through technology, intelligence, and
              innovation. We deliver cutting-edge solutions for enterprise
              clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'Features', href: '/#features' },
                { name: 'For Employers', href: '/#employers' },
                { name: 'Pricing', href: '/pricing' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent group flex items-center text-sm transition-colors"
                  >
                    <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Areas */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">
              Expertise
            </h3>
            <ul className="space-y-3">
              {[
                'Software Engineering',
                'Artificial Intelligence',
                'Data Science',
                'Quantitative Finance',
                'Technology Consulting',
              ].map((area) => (
                <li key={area}>
                  <span className="text-muted-foreground flex items-center text-sm">
                    <span className="bg-accent mr-2 h-1.5 w-1.5 rounded-full" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground flex items-start text-sm">
                <MapPin className="text-accent mr-3 h-5 w-5 flex-shrink-0" />
                <span>
                  100 Innovation Drive
                  <br />
                  Suite 400
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="text-muted-foreground flex items-center text-sm">
                <Phone className="text-accent mr-3 h-5 w-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-muted-foreground flex items-center text-sm">
                <Mail className="text-accent mr-3 h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:contact@nextify.tech"
                  className="hover:text-accent transition-colors"
                >
                  contact@nextify.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Nextify Technologies. All rights reserved.
          </p>
          <div className="text-muted-foreground flex gap-4 text-sm">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
