'use client';

import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Briefcase,
  MapPin,
} from 'lucide-react';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'Stripe',
    location: 'Remote',
    type: 'Full Time',
    salary: '$150k-$200k',
    status: 'ACTIVE',
    reports: 0,
    posted: 'Jun 15, 2026',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Linear',
    location: 'San Francisco',
    type: 'Full Time',
    salary: '$130k-$180k',
    status: 'ACTIVE',
    reports: 0,
    posted: 'Jun 12, 2026',
  },
  {
    id: 3,
    title: 'Product Designer',
    company: 'Notion',
    location: 'New York',
    type: 'Full Time',
    salary: '$120k-$160k',
    status: 'ACTIVE',
    reports: 0,
    posted: 'Jun 10, 2026',
  },
  {
    id: 4,
    title: 'EARN $10K DAILY!!!',
    company: 'Scammy LLC',
    location: 'Remote',
    type: 'Full Time',
    salary: '$999k',
    status: 'FLAGGED',
    reports: 5,
    posted: 'Jun 16, 2026',
  },
  {
    id: 5,
    title: 'Growth Marketer',
    company: 'TechStart',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k-$110k',
    status: 'PENDING',
    reports: 0,
    posted: 'Jun 18, 2026',
  },
  {
    id: 6,
    title: 'Data Engineer',
    company: 'Stripe',
    location: 'Remote',
    type: 'Full Time',
    salary: '$140k-$190k',
    status: 'ACTIVE',
    reports: 0,
    posted: 'Jun 14, 2026',
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    company: 'GreenEnergy Co',
    location: 'Austin',
    type: 'Full Time',
    salary: '$110k-$150k',
    status: 'PENDING',
    reports: 0,
    posted: 'Jun 19, 2026',
  },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  ACTIVE: {
    label: 'Active',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  PENDING: {
    label: 'Pending Review',
    color: 'bg-warning/10 text-warning border-warning/20',
  },
  FLAGGED: {
    label: 'Flagged',
    color: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  HIDDEN: { label: 'Hidden', color: 'bg-secondary text-muted-foreground' },
};

export default function AdminJobsPage() {
  const [filter, setFilter] = useState<string>('ALL');

  const filtered =
    filter === 'ALL' ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Job Moderation
        </h1>
        <p className="text-muted-foreground">
          Review, approve, and moderate job postings.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {['ALL', 'PENDING', 'ACTIVE', 'FLAGGED'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`h-9 rounded-md px-4 text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-foreground text-background'
                : 'hover:bg-secondary border'
            }`}
          >
            {f === 'ALL' ? 'All Jobs' : f.charAt(0) + f.slice(1).toLowerCase()}
            <span className="ml-2 text-xs opacity-60">
              {f === 'ALL'
                ? jobs.length
                : jobs.filter((j) => j.status === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Job</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Salary</th>
                <th className="px-6 py-4 font-medium">Reports</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Posted</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {filtered.map((job) => {
                const config = statusConfig[job.status];
                return (
                  <tr
                    key={job.id}
                    className={`hover:bg-secondary/20 transition-colors ${job.status === 'FLAGGED' ? 'bg-destructive/5' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-foreground font-semibold">
                          {job.title}
                        </p>
                        <div className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-muted-foreground px-6 py-4">
                      {job.company}
                    </td>
                    <td className="px-6 py-4 text-xs font-medium">
                      {job.salary}
                    </td>
                    <td className="px-6 py-4">
                      {job.reports > 0 ? (
                        <span className="bg-destructive/10 text-destructive inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold">
                          {job.reports} reports
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-xs">
                          None
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${config.color}`}
                      >
                        {config.label}
                      </span>
                    </td>
                    <td className="text-muted-foreground px-6 py-4 text-xs">
                      {job.posted}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1">
                        <button
                          className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-1.5 transition-colors"
                          title="Preview"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {(job.status === 'PENDING' ||
                          job.status === 'FLAGGED') && (
                          <button
                            className="rounded-md p-1.5 text-emerald-500 transition-colors hover:bg-emerald-500/10"
                            title="Approve"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                          </button>
                        )}
                        {job.status !== 'HIDDEN' && (
                          <button
                            className="text-destructive hover:bg-destructive/10 rounded-md p-1.5 transition-colors"
                            title="Hide"
                          >
                            <EyeOff className="h-4 w-4" />
                          </button>
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
        <div className="bg-secondary/30 flex items-center justify-between border-t px-6 py-4">
          <p className="text-muted-foreground text-xs">
            Showing {filtered.length} of {jobs.length} jobs
          </p>
          <div className="flex gap-2">
            <button
              className="hover:bg-secondary h-8 rounded-md border px-3 text-xs font-medium disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button
              className="hover:bg-secondary h-8 rounded-md border px-3 text-xs font-medium disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
