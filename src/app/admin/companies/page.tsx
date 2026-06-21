'use client';

import {
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Clock,
  Building2,
} from 'lucide-react';
import { useState } from 'react';

const companies = [
  {
    id: 1,
    name: 'TechStart Inc.',
    domain: 'techstart.io',
    size: '11-50',
    industry: 'Technology',
    status: 'PENDING',
    jobs: 3,
    created: 'Jun 18, 2026',
  },
  {
    id: 2,
    name: 'Stripe Technologies',
    domain: 'stripe.com',
    size: '1000+',
    industry: 'Finance',
    status: 'VERIFIED',
    jobs: 24,
    created: 'Jun 12, 2026',
  },
  {
    id: 3,
    name: 'Linear',
    domain: 'linear.app',
    size: '50-200',
    industry: 'Technology',
    status: 'VERIFIED',
    jobs: 8,
    created: 'Jun 10, 2026',
  },
  {
    id: 4,
    name: 'Notion Labs',
    domain: 'notion.so',
    size: '201-1000',
    industry: 'Technology',
    status: 'VERIFIED',
    jobs: 15,
    created: 'Jun 5, 2026',
  },
  {
    id: 5,
    name: 'Scammy LLC',
    domain: 'scammy.biz',
    size: '1-10',
    industry: 'Unknown',
    status: 'REJECTED',
    jobs: 0,
    created: 'Jun 16, 2026',
  },
  {
    id: 6,
    name: 'GreenEnergy Co',
    domain: 'greenenergy.co',
    size: '11-50',
    industry: 'Energy',
    status: 'PENDING',
    jobs: 2,
    created: 'Jun 19, 2026',
  },
];

const statusConfig = {
  VERIFIED: {
    label: 'Verified',
    icon: CheckCircle2,
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  PENDING: {
    label: 'Pending',
    icon: Clock,
    color: 'bg-warning/10 text-warning border-warning/20',
  },
  REJECTED: {
    label: 'Rejected',
    icon: XCircle,
    color: 'bg-destructive/10 text-destructive border-destructive/20',
  },
};

export default function AdminCompaniesPage() {
  const [filter, setFilter] = useState<
    'ALL' | 'PENDING' | 'VERIFIED' | 'REJECTED'
  >('ALL');

  const filtered =
    filter === 'ALL' ? companies : companies.filter((c) => c.status === filter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Company Verification
        </h1>
        <p className="text-muted-foreground">
          Review and verify employer accounts.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {(['ALL', 'PENDING', 'VERIFIED', 'REJECTED'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`h-9 rounded-md px-4 text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-foreground text-background'
                : 'hover:bg-secondary border'
            }`}
          >
            {f === 'ALL' ? 'All' : f.charAt(0) + f.slice(1).toLowerCase()}
            <span className="ml-2 text-xs opacity-60">
              {f === 'ALL'
                ? companies.length
                : companies.filter((c) => c.status === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Industry</th>
                <th className="px-6 py-4 font-medium">Size</th>
                <th className="px-6 py-4 font-medium">Jobs</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Registered</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {filtered.map((company) => {
                const config =
                  statusConfig[company.status as keyof typeof statusConfig];
                const StatusIcon = config.icon;
                return (
                  <tr
                    key={company.id}
                    className="hover:bg-secondary/20 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-lg">
                          <Building2 className="text-muted-foreground h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-foreground font-semibold">
                            {company.name}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {company.domain}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-muted-foreground px-6 py-4">
                      {company.industry}
                    </td>
                    <td className="text-muted-foreground px-6 py-4">
                      {company.size}
                    </td>
                    <td className="px-6 py-4 font-medium">{company.jobs}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${config.color}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {config.label}
                      </span>
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-xs">
                      {company.created}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {company.status === 'PENDING' && (
                          <>
                            <button className="rounded-md p-1.5 text-emerald-500 transition-colors hover:bg-emerald-500/10">
                              <CheckCircle2 className="h-4 w-4" />
                            </button>
                            <button className="text-destructive hover:bg-destructive/10 rounded-md p-1.5 transition-colors">
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        <button className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-1.5">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
