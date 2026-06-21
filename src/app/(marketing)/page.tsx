import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Search,
  Users,
  MapPin,
  Star,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Split Layout */}
      <section className="relative flex min-h-[85vh] items-center pt-24 pb-12">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-foreground font-heading text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Find opportunities that move your career forward.
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed md:text-xl">
              The premium platform connecting ambitious talent with fast-growing
              companies. Discover roles, track applications, and build your
              professional profile.
            </p>
            <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-medium transition-colors"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/employer"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-border inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 font-medium transition-colors"
              >
                Hire Talent
              </Link>
            </div>
            <div className="text-muted-foreground mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Trusted by top companies
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Free for candidates
              </div>
            </div>
          </div>

          {/* Right side - Abstract UI representation */}
          <div className="relative hidden md:block">
            <div className="border-border bg-background relative overflow-hidden rounded-xl border p-6 shadow-2xl">
              <div className="border-border mb-6 flex items-center justify-between border-b pb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  Application Tracker
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    company: 'Linear',
                    role: 'Product Designer',
                    status: 'Interview',
                  },
                  {
                    company: 'Stripe',
                    role: 'Frontend Engineer',
                    status: 'In Review',
                  },
                  {
                    company: 'Wellfound',
                    role: 'Product Manager',
                    status: 'Applied',
                  },
                ].map((job, i) => (
                  <div
                    key={i}
                    className="border-border bg-secondary/30 flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-foreground/5 text-foreground flex h-10 w-10 items-center justify-center rounded-md font-bold">
                        {job.company[0]}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">{job.role}</div>
                        <div className="text-muted-foreground text-xs">
                          {job.company}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        job.status === 'Interview'
                          ? 'bg-blue-500/10 text-blue-500'
                          : job.status === 'In Review'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'bg-gray-500/10 text-gray-500'
                      }`}
                    >
                      {job.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-border bg-secondary/20 border-y py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="font-heading text-foreground text-3xl font-bold">
                10,000+
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Opportunities
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-foreground text-3xl font-bold">
                5,000+
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Companies
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-foreground text-3xl font-bold">
                50k+
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Candidates
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-foreground text-3xl font-bold">
                98%
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Placement Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Everything you need to hire and get hired."
            subtitle="Designed for ambitious professionals and the companies that want them."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              title="Professional Profiles"
              description="Build a comprehensive profile that highlights your experience, skills, and portfolio directly to hiring managers."
              icon={<Search className="text-foreground h-6 w-6" />}
              delay={0.1}
            />
            <FeatureCard
              title="Application Tracker"
              description="Never lose track of an opportunity. Monitor your applications from submission to final interview."
              icon={<Briefcase className="text-foreground h-6 w-6" />}
              delay={0.2}
            />
            <FeatureCard
              title="Employer Pipeline"
              description="A streamlined kanban board to manage applicants, leave notes, and collaborate with your hiring team."
              icon={<Users className="text-foreground h-6 w-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Your next opportunity starts here.
          </h2>
          <p className="text-background/80 mx-auto mb-10 max-w-2xl text-lg">
            Join thousands of professionals finding their next role on Mextify.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="bg-background text-foreground hover:bg-background/90 inline-flex items-center justify-center rounded-md px-8 py-3 font-medium transition-colors"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/employer"
              className="text-background border-background hover:bg-background/10 inline-flex items-center justify-center rounded-md border bg-transparent px-8 py-3 font-medium transition-colors"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
