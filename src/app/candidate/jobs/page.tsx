import {
  Search,
  MapPin,
  Building,
  Clock,
  ChevronRight,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

export default function JobsSearchPage() {
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'Vercel',
      location: 'Remote',
      type: 'Full Time',
      salary: '$140k - $180k',
      tags: ['React', 'Next.js', 'TypeScript'],
      postedAt: '2 hours ago',
    },
    {
      id: 2,
      title: 'Backend Engineer, Infrastructure',
      company: 'Stripe',
      location: 'San Francisco, CA',
      type: 'Full Time',
      salary: '$160k - $210k',
      tags: ['Go', 'Kubernetes', 'AWS'],
      postedAt: '5 hours ago',
    },
    {
      id: 3,
      title: 'Product Designer',
      company: 'Linear',
      location: 'Remote',
      type: 'Full Time',
      salary: '$130k - $170k',
      tags: ['Figma', 'UI/UX', 'Design Systems'],
      postedAt: '1 day ago',
    },
    {
      id: 4,
      title: 'Staff Machine Learning Engineer',
      company: 'OpenAI',
      location: 'San Francisco, CA',
      type: 'Full Time',
      salary: '$200k - $300k',
      tags: ['Python', 'PyTorch', 'LLMs'],
      postedAt: '2 days ago',
    },
  ];

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Find Jobs</h1>
        <p className="text-muted-foreground">
          Discover your next career opportunity.
        </p>
      </div>

      <div className="bg-card flex flex-col gap-4 rounded-xl border p-4 shadow-sm md:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-3 left-3 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by job title, skill, or company..."
            className="bg-background focus:ring-accent h-11 w-full rounded-md border pr-4 pl-10 text-sm outline-none focus:ring-2"
          />
        </div>
        <div className="relative flex-1 md:max-w-xs">
          <MapPin className="text-muted-foreground absolute top-3 left-3 h-5 w-5" />
          <input
            type="text"
            placeholder="Location or 'Remote'"
            className="bg-background focus:ring-accent h-11 w-full rounded-md border pr-4 pl-10 text-sm outline-none focus:ring-2"
          />
        </div>
        <button className="bg-accent text-accent-foreground hover:bg-accent/90 h-11 rounded-md px-8 font-medium transition-colors">
          Search
        </button>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 hidden space-y-6 md:block">
          <div>
            <h3 className="mb-3 font-semibold">Job Type</h3>
            <div className="space-y-2">
              {['Full Time', 'Contract', 'Part Time', 'Internship'].map(
                (type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="border-muted-foreground/30 text-accent focus:ring-accent rounded"
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ),
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Work Mode</h3>
            <div className="space-y-2">
              {['Remote', 'Hybrid', 'On-site'].map((mode) => (
                <label key={mode} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="border-muted-foreground/30 text-accent focus:ring-accent rounded"
                  />
                  <span className="text-sm">{mode}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 space-y-4 md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">{jobs.length} jobs found</h2>
            <select className="bg-background rounded-md border px-3 py-1.5 text-sm">
              <option>Most relevant</option>
              <option>Most recent</option>
              <option>Highest salary</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/candidate/jobs/${job.id}`}
                className="block"
              >
                <div className="bg-card hover:border-accent/50 group cursor-pointer rounded-xl border p-5 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="group-hover:text-accent text-xl font-bold transition-colors">
                        {job.title}
                      </h3>
                      <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Building className="h-4 w-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="text-foreground flex items-center gap-1.5 font-medium">
                          <DollarSign className="h-4 w-4 text-emerald-500" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="bg-secondary text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {job.postedAt}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
