'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-ring relative inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors focus-visible:ring-1 focus-visible:outline-none"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </button>
  );
}
