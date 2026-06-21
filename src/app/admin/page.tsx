'use client';

import {
  Users,
  Building2,
  Briefcase,
  Flag,
  TrendingUp,
  Shield,
  Activity,
  AlertTriangle,
} from 'lucide-react';

const stats = [
  {
    label: 'Total Users',
    value: '12,847',
    change: '+342 this month',
    icon: Users,
    trend: 'up',
  },
  {
    label: 'Verified Companies',
    value: '1,204',
    change: '+28 pending',
    icon: Building2,
    trend: 'neutral',
  },
  {
    label: 'Active Jobs',
    value: '3,891',
    change: '+156 this week',
    icon: Briefcase,
    trend: 'up',
  },
  {
    label: 'Open Reports',
    value: '14',
    change: '3 critical',
    icon: Flag,
    trend: 'down',
  },
];

const recentActivity = [
  {
    action: 'New company registered',
    detail: 'TechStart Inc. — Pending verification',
    time: '12 min ago',
    type: 'info',
  },
  {
    action: 'Job reported',
    detail: '"Senior Dev" at Scammy LLC — Spam report',
    time: '34 min ago',
    type: 'warning',
  },
  {
    action: 'User banned',
    detail: 'spam_user_42@mail.com — Automated action',
    time: '1 hour ago',
    type: 'destructive',
  },
  {
    action: 'Company verified',
    detail: 'Stripe Technologies — Manual approval',
    time: '2 hours ago',
    type: 'success',
  },
  {
    action: 'Job approved',
    detail: '"Product Designer" at Linear — Auto-approved',
    time: '3 hours ago',
    type: 'info',
  },
  {
    action: 'New report filed',
    detail: 'Inappropriate content in profile bio',
    time: '5 hours ago',
    type: 'warning',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Platform overview and moderation tools.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-card rounded-xl border p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </span>
                <Icon className="text-muted-foreground h-4 w-4" />
              </div>
              <div className="mb-1 text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${stat.trend === 'down' ? 'text-destructive' : stat.trend === 'up' ? 'text-emerald-500' : 'text-muted-foreground'}`}
              >
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="bg-card col-span-4 rounded-xl border shadow-sm">
          <div className="border-b p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Activity className="text-accent h-4 w-4" />
              Platform Health
            </h3>
            <p className="text-muted-foreground text-sm">
              System status and key metrics
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">API Uptime</span>
                    <span className="font-medium text-emerald-500">99.97%</span>
                  </div>
                  <div className="bg-secondary h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: '99.97%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Job Match Quality
                    </span>
                    <span className="text-accent font-medium">87%</span>
                  </div>
                  <div className="bg-secondary h-2 overflow-hidden rounded-full">
                    <div
                      className="bg-accent h-full rounded-full"
                      style={{ width: '87%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">142ms</span>
                  </div>
                  <div className="bg-secondary h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: '92%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Spam Detection
                    </span>
                    <span className="font-medium text-emerald-500">96.4%</span>
                  </div>
                  <div className="bg-secondary h-2 overflow-hidden rounded-full">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: '96.4%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card col-span-3 rounded-xl border shadow-sm">
          <div className="border-b p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <TrendingUp className="text-accent h-4 w-4" />
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                      item.type === 'warning'
                        ? 'bg-warning'
                        : item.type === 'destructive'
                          ? 'bg-destructive'
                          : item.type === 'success'
                            ? 'bg-success'
                            : 'bg-accent'
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-tight font-medium">
                      {item.action}
                    </p>
                    <p className="text-muted-foreground truncate text-xs">
                      {item.detail}
                    </p>
                    <p className="text-muted-foreground mt-0.5 text-[10px]">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border shadow-sm">
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <AlertTriangle className="text-warning h-4 w-4" />
              Items Requiring Attention
            </h3>
            <p className="text-muted-foreground text-sm">
              Actions that need admin review
            </p>
          </div>
          <span className="bg-warning/10 text-warning border-warning/20 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            7 pending
          </span>
        </div>
        <div className="divide-y">
          {[
            {
              title: '3 companies awaiting verification',
              priority: 'Medium',
              action: 'Review',
            },
            {
              title: '2 reported job postings',
              priority: 'High',
              action: 'Moderate',
            },
            {
              title: '1 user appeal pending',
              priority: 'Medium',
              action: 'Review',
            },
            {
              title: '1 payment dispute open',
              priority: 'High',
              action: 'Resolve',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <Shield className="text-muted-foreground h-4 w-4" />
                <span className="text-sm">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.priority === 'High'
                      ? 'bg-destructive/10 text-destructive'
                      : 'bg-warning/10 text-warning'
                  }`}
                >
                  {item.priority}
                </span>
                <button className="text-accent text-xs font-medium hover:underline">
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
