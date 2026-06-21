import { Building, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      role: 'Senior React Developer',
      company: 'Vercel',
      location: 'Remote',
      appliedAt: 'Oct 24, 2024',
      status: 'Interview',
      statusColor: 'bg-indigo-500',
      nextStep: 'Technical Interview on Nov 2, 2024',
    },
    {
      id: 2,
      role: 'Product Engineer',
      company: 'Linear',
      location: 'Remote',
      appliedAt: 'Oct 20, 2024',
      status: 'Assessment',
      statusColor: 'bg-orange-500',
      nextStep: 'Complete Take-home project by Oct 30',
    },
    {
      id: 3,
      role: 'Staff Software Engineer',
      company: 'Stripe',
      location: 'San Francisco, CA',
      appliedAt: 'Oct 15, 2024',
      status: 'Applied',
      statusColor: 'bg-blue-500',
      nextStep: 'Waiting for recruiter review',
    },
    {
      id: 4,
      role: 'Frontend Engineer',
      company: 'Notion',
      location: 'San Francisco, CA',
      appliedAt: 'Sep 28, 2024',
      status: 'Rejected',
      statusColor: 'bg-red-500',
      nextStep: 'Archived',
    },
  ];

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-5xl flex-col space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Applications</h1>
        <p className="text-muted-foreground">
          Track and manage your job applications.
        </p>
      </div>

      <div className="flex gap-4 border-b">
        <button className="border-foreground border-b-2 px-4 py-2 text-sm font-medium">
          Active (3)
        </button>
        <button className="text-muted-foreground hover:text-foreground border-b-2 border-transparent px-4 py-2 text-sm font-medium transition-colors">
          Archived (1)
        </button>
      </div>

      <div className="space-y-4">
        {applications.map((app) => (
          <div key={app.id} className="bg-card rounded-xl border p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div className="flex items-start gap-4">
                <div className="bg-secondary flex h-12 w-12 items-center justify-center rounded-lg text-xl font-bold">
                  {app.company[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{app.role}</h3>
                  <div className="text-muted-foreground mt-1 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Building className="h-4 w-4" />
                      {app.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {app.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 md:items-end">
                <div className="inline-flex items-center gap-2 rounded-full border py-1 pr-3 pl-2 text-sm font-medium">
                  <span className={`h-2 w-2 rounded-full ${app.statusColor}`} />
                  {app.status}
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  Applied {app.appliedAt}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t pt-4 md:flex-row md:items-center">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Next step:</span>
                <span className="text-muted-foreground">{app.nextStep}</span>
              </div>

              <div className="flex w-full gap-3 md:w-auto">
                <button className="hover:bg-secondary flex-1 rounded-md border px-4 py-2 text-sm font-medium transition-colors md:flex-none">
                  Withdraw
                </button>
                <button className="bg-foreground text-background hover:bg-foreground/90 flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors md:flex-none">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
