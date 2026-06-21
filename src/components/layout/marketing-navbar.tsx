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
  { name: 'Candidates', href: '/jobs' },
  { name: 'Employers', href: '/employer' },
  { name: 'Resources', href: '/resources' },
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
              <div className="bg-foreground font-heading text-background flex h-8 w-8 items-center justify-center rounded-lg text-xl font-bold transition-transform group-hover:scale-105">
                M
              </div>
              <span className="font-heading text-foreground text-2xl font-bold tracking-tight">
                Mextify<span className="text-foreground/50">.</span>
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
                  'hover:text-foreground relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/70',
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-muted inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
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
            className="bg-background border-border overflow-hidden border-b md:hidden"
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
                      ? 'bg-muted text-foreground'
                      : 'text-foreground/80 hover:bg-muted hover:text-foreground',
                  )}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 px-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-secondary text-secondary-foreground rounded-md px-3 py-3 text-center text-base font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-foreground text-background rounded-md px-3 py-3 text-center text-base font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
