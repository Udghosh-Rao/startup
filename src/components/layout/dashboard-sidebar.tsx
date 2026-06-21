'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  CANDIDATE_NAV_LINKS,
  EMPLOYER_NAV_LINKS,
  ADMIN_NAV_LINKS,
} from '@/lib/constants';
import * as Icons from 'lucide-react';
import { Sparkles } from 'lucide-react';

interface SidebarProps {
  role: 'CANDIDATE' | 'EMPLOYER' | 'ADMIN';
  className?: string;
}

export function DashboardSidebar({ role, className }: SidebarProps) {
  const pathname = usePathname();

  const links =
    role === 'CANDIDATE'
      ? CANDIDATE_NAV_LINKS
      : role === 'EMPLOYER'
        ? EMPLOYER_NAV_LINKS
        : ADMIN_NAV_LINKS;

  return (
    <aside
      className={cn(
        'bg-card sticky top-0 hidden h-screen w-64 flex-col border-r md:flex',
        className,
      )}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/"
          className="font-heading flex items-center gap-2 text-xl font-bold"
        >
          <Sparkles className="text-accent h-5 w-5" />
          <span>Mextify</span>
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-4">
          {links.map((link) => {
            const Icon = Icons[
              link.icon as keyof typeof Icons
            ] as React.ElementType;
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium">
            UR
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Udghosh Rao</span>
            <span className="text-muted-foreground text-xs capitalize">
              {role.toLowerCase()}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
