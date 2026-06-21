import Link from 'next/link';
import { ArrowRight, Briefcase, Bot, Building2, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24 pb-32">
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-5 dark:opacity-10" />

        <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center md:px-6">
          <div className="bg-accent/10 text-accent mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              Meet the new standard in hiring
            </span>
          </div>

          <h1 className="text-foreground font-heading mb-8 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            The AI-Powered <br className="hidden md:block" />
            <span className="from-accent bg-gradient-to-r to-purple-500 bg-clip-text text-transparent">
              Career Operating System
            </span>
          </h1>

          <p className="text-muted-foreground mb-10 max-w-2xl text-xl leading-relaxed">
            We don&apos;t just help you apply. We help you become undeniable.
            Mextify matches elite talent with world-class companies using
            advanced AI.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/register"
              className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/employers"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium transition-colors"
            >
              I&apos;m Hiring
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Supercharge Your Career"
            subtitle="Everything you need to land your dream job, powered by artificial intelligence."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              title="AI Resume Optimization"
              description="Our ATS-aware AI rewrites and optimizes your resume to beat the algorithms and catch the recruiter's eye."
              icon={<Bot className="text-accent h-6 w-6" />}
              delay={0.1}
            />
            <FeatureCard
              title="Smart Job Matching"
              description="Stop endlessly scrolling. We analyze your skills and match you with jobs where you have the highest probability of success."
              icon={<Briefcase className="text-accent h-6 w-6" />}
              delay={0.2}
            />
            <FeatureCard
              title="Direct Employer Access"
              description="Get your profile directly in front of hiring managers at top companies without dealing with external recruiters."
              icon={<Building2 className="text-accent h-6 w-6" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
