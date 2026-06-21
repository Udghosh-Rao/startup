'use client';

import { Bell, Menu, Search } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function DashboardHeader() {
  return (
    <header className="bg-card sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 md:px-8">
      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:bg-secondary -ml-2 rounded-md p-2 md:hidden">
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative hidden items-center md:flex">
          <Search className="text-muted-foreground absolute left-3 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="focus:ring-accent/50 h-9 w-64 rounded-md border bg-transparent pr-4 pl-9 text-sm transition-all outline-none focus:ring-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:bg-secondary relative rounded-full p-2 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="bg-destructive border-card absolute top-1.5 right-1.5 h-2 w-2 rounded-full border-2" />
        </button>

        <ThemeToggle />
      </div>
    </header>
  );
}
