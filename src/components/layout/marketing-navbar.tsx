'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'For Employers', href: '/#employers' },
  { name: 'Pricing', href: '/pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/80 border-border fixed top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="bg-accent font-heading flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold text-white transition-transform group-hover:scale-105">
                N
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Nextify<span className="text-accent">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'hover:text-accent relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === link.href ? 'text-accent' : 'text-foreground/80',
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="bg-accent absolute right-0 bottom-0 left-0 h-0.5"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent hover:bg-muted focus:ring-accent inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-background border-border border-b md:hidden"
          >
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-md px-3 py-3 text-base font-medium',
                    pathname === link.href
                      ? 'bg-muted text-accent'
                      : 'text-foreground hover:bg-muted',
                  )}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground mt-4 rounded-md px-3 py-3 text-center text-base font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
