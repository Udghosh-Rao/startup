'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Briefcase, Eye, UserPlus } from 'lucide-react';

export default function EmployerDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Employer Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your job postings and applicants.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-muted-foreground text-xs">1 closing this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applicants
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-muted-foreground text-xs">+34 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Views</CardTitle>
            <Eye className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-muted-foreground text-xs">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Matches</CardTitle>
            <UserPlus className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-muted-foreground text-xs text-emerald-500">
              AI suggested
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Applicant Funnel</CardTitle>
            <CardDescription>
              Pipeline conversion across all active roles.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex h-[300px] items-center justify-center border-t border-dashed pl-2">
            <p className="text-muted-foreground text-sm">
              Pipeline chart will render here
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
            <CardDescription>
              Latest candidates to apply to your roles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: 'Alice Johnson',
                  role: 'Senior React Developer',
                  match: '94%',
                  time: '2 hours ago',
                },
                {
                  name: 'Bob Smith',
                  role: 'Backend Engineer',
                  match: '88%',
                  time: '5 hours ago',
                },
                {
                  name: 'Charlie Davis',
                  role: 'Product Designer',
                  match: '72%',
                  time: '1 day ago',
                },
              ].map((applicant, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                      {applicant.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="mb-1 text-sm leading-none font-medium">
                        {applicant.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {applicant.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 inline-flex items-center rounded-full border bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">
                      {applicant.match} Match
                    </div>
                    <p className="text-muted-foreground text-[10px]">
                      {applicant.time}
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
