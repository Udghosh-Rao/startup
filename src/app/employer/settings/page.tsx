'use client';

import {
  Save,
  Bell,
  Shield,
  Key,
  CreditCard,
  Users,
  Building2,
} from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'account', label: 'Account', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'security', label: 'Security', icon: Key },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function EmployerSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('account');

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your company account and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="col-span-1 space-y-6 md:col-span-3">
          {activeTab === 'account' && (
            <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
              <div>
                <h3 className="mb-1 text-lg font-medium">
                  Account Information
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Update your company account details.
                </p>
                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Account Email</label>
                    <input
                      type="email"
                      defaultValue="admin@acme.inc"
                      className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <input
                      type="text"
                      defaultValue="Acme Corp"
                      className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-destructive mb-1 text-lg font-medium">
                  Danger Zone
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Permanently delete your employer account and all associated
                  data.
                </p>
                <button className="border-destructive text-destructive hover:bg-destructive/10 rounded-md border px-4 py-2 text-sm font-medium transition-colors">
                  Delete Account
                </button>
              </div>

              <div className="flex justify-end border-t pt-4">
                <button className="bg-foreground text-background hover:bg-foreground/90 flex h-10 items-center gap-2 rounded-md px-6 font-medium transition-colors">
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
              <h3 className="text-lg font-medium">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  {
                    label: 'New applicant received',
                    description:
                      'Get notified when someone applies to your jobs',
                    default: true,
                  },
                  {
                    label: 'Application status changes',
                    description: 'When candidates move through your pipeline',
                    default: true,
                  },
                  {
                    label: 'Weekly hiring digest',
                    description: 'Summary of your hiring activity each week',
                    default: true,
                  },
                  {
                    label: 'Candidate messages',
                    description: 'When a candidate sends you a message',
                    default: true,
                  },
                  {
                    label: 'AI match suggestions',
                    description:
                      'When our AI finds strong matches for your roles',
                    default: false,
                  },
                  {
                    label: 'Marketing & product updates',
                    description: 'News about Mextify features and updates',
                    default: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b py-3 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-muted-foreground text-xs">
                        {item.description}
                      </p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultChecked={item.default}
                        className="peer sr-only"
                      />
                      <div className="bg-secondary peer peer-checked:bg-accent h-5 w-9 rounded-full after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full" />
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex justify-end border-t pt-4">
                <button className="bg-foreground text-background hover:bg-foreground/90 flex h-10 items-center gap-2 rounded-md px-6 font-medium transition-colors">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Current Plan</h3>
                  <p className="text-muted-foreground text-sm">
                    Business Plan — $199/month
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-muted-foreground text-xs">Active Jobs</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-muted-foreground text-xs">Team Seats</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold">Jul 15</p>
                  <p className="text-muted-foreground text-xs">Next Billing</p>
                </div>
              </div>

              <div className="flex gap-3 border-t pt-4">
                <button className="hover:bg-secondary h-10 rounded-md border px-4 text-sm font-medium transition-colors">
                  Change Plan
                </button>
                <button className="hover:bg-secondary h-10 rounded-md border px-4 text-sm font-medium transition-colors">
                  Payment Method
                </button>
                <button className="hover:bg-secondary h-10 rounded-md border px-4 text-sm font-medium transition-colors">
                  View Invoices
                </button>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Team Members</h3>
                <button className="bg-foreground text-background hover:bg-foreground/90 flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors">
                  <Users className="h-4 w-4" />
                  Invite Member
                </button>
              </div>
              <div className="divide-y">
                {[
                  {
                    name: 'Udghosh Rao',
                    email: 'udghosh@acme.inc',
                    role: 'Admin',
                    initials: 'UR',
                  },
                  {
                    name: 'Sarah Chen',
                    email: 'sarah@acme.inc',
                    role: 'Recruiter',
                    initials: 'SC',
                  },
                  {
                    name: 'Mike Johnson',
                    email: 'mike@acme.inc',
                    role: 'Hiring Manager',
                    initials: 'MJ',
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">
                        {member.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {member.email}
                        </p>
                      </div>
                    </div>
                    <span className="bg-secondary rounded-full px-2.5 py-1 text-xs font-medium">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
              <h3 className="text-lg font-medium">Security Settings</h3>
              <div className="max-w-md space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <input
                    type="password"
                    className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="mb-2 text-sm font-medium">
                  Two-Factor Authentication
                </h4>
                <p className="text-muted-foreground mb-3 text-xs">
                  Add an extra layer of security to your account.
                </p>
                <button className="hover:bg-secondary h-9 rounded-md border px-4 text-sm font-medium transition-colors">
                  Enable 2FA
                </button>
              </div>

              <div className="flex justify-end border-t pt-4">
                <button className="bg-foreground text-background hover:bg-foreground/90 flex h-10 items-center gap-2 rounded-md px-6 font-medium transition-colors">
                  <Save className="h-4 w-4" />
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
