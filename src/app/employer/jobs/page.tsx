import Link from 'next/link';
import { Plus, MoreHorizontal, MapPin, Users } from 'lucide-react';

export default function EmployerJobsPage() {
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      location: 'Remote',
      type: 'Full Time',
      applicants: 45,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Backend Engineer, Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full Time',
      applicants: 12,
      status: 'Active',
    },
    {
      id: 3,
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full Time',
      applicants: 85,
      status: 'Draft',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Jobs</h1>
          <p className="text-muted-foreground">
            Manage your job postings and listings.
          </p>
        </div>
        <button className="bg-foreground text-background flex h-10 items-center gap-2 rounded-md px-4 font-medium">
          <Plus className="h-4 w-4" />
          Create Job
        </button>
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Job Title</th>
                <th className="px-6 py-4 font-medium">Location & Type</th>
                <th className="px-6 py-4 font-medium">Applicants</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-foreground font-semibold">
                      {job.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-muted-foreground flex flex-col gap-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="text-xs">{job.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Users className="text-muted-foreground h-4 w-4" />
                      {job.applicants}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${job.status === 'Active' ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-500' : 'bg-secondary text-secondary-foreground'}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-2">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
