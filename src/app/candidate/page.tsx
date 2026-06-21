'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Briefcase, Eye, TrendingUp } from 'lucide-react';

export default function CandidateDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Welcome back, Udghosh
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your job search today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Applications
            </CardTitle>
            <Briefcase className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-muted-foreground text-xs">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-muted-foreground text-xs">
              +14% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resume Score</CardTitle>
            <FileText className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85/100</div>
            <p className="text-muted-foreground text-xs text-emerald-500">
              Strong match
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interview Rate
            </CardTitle>
            <TrendingUp className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24%</div>
            <p className="text-muted-foreground text-xs">
              Top 10% of candidates
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Application Activity</CardTitle>
            <CardDescription>
              Your application volume over the last 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex h-[300px] items-center justify-center border-t border-dashed pl-2">
            <p className="text-muted-foreground text-sm">
              Chart will be rendered here (Recharts)
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>
              Status of your latest job applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  company: 'Vercel',
                  role: 'Senior Frontend Engineer',
                  status: 'Interviewing',
                  time: '2 days ago',
                },
                {
                  company: 'Stripe',
                  role: 'Staff Software Engineer',
                  status: 'Applied',
                  time: '4 days ago',
                },
                {
                  company: 'Linear',
                  role: 'Product Engineer',
                  status: 'Assessment',
                  time: '1 week ago',
                },
              ].map((app, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-md text-lg font-bold">
                      {app.company[0]}
                    </div>
                    <div>
                      <p className="mb-1 text-sm leading-none font-medium">
                        {app.role}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {app.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-accent/10 text-accent mb-1 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {app.status}
                    </div>
                    <p className="text-muted-foreground text-[10px]">
                      {app.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
