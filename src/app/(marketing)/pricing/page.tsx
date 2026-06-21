import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Invest in your career or find your next top performer."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Candidate Plan */}
          <div className="bg-card relative flex flex-col rounded-2xl border p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">Candidate</h3>
              <p className="text-muted-foreground">
                For ambitious professionals looking to get hired.
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tight">$0</span>
              <span className="text-muted-foreground font-medium">
                /forever
              </span>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>AI-powered resume optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Smart job matching algorithm</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Direct application to top employers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Basic profile analytics</span>
              </li>
            </ul>

            <Link
              href="/register"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full rounded-md py-3 text-center font-medium transition-colors"
            >
              Join for Free
            </Link>
          </div>

          {/* Employer Plan */}
          <div className="border-accent bg-card relative flex flex-col rounded-2xl border-2 p-8 shadow-lg">
            <div className="bg-accent text-accent-foreground absolute top-0 right-8 inline-flex -translate-y-1/2 items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold">
              <Sparkles className="h-4 w-4" />
              Most Popular
            </div>

            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">Employer Pro</h3>
              <p className="text-muted-foreground">
                For companies ready to scale their engineering teams.
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-extrabold tracking-tight">
                $499
              </span>
              <span className="text-muted-foreground font-medium">/month</span>
            </div>

            <ul className="mb-8 flex-1 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Unlimited job postings</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Access to elite pre-vetted talent pool</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>AI applicant ranking & matching</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Automated interview scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent h-5 w-5 shrink-0" />
                <span>Custom technical assessments</span>
              </li>
            </ul>

            <Link
              href="/register"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full rounded-md py-3 text-center font-medium shadow-md transition-colors"
            >
              Start Hiring
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
