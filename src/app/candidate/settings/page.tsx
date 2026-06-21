'use client';

import { Save, Bell, Shield, Key } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 space-y-1">
          <button className="bg-secondary text-foreground flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium">
            <Shield className="h-4 w-4" />
            Account
          </button>
          <button className="text-muted-foreground hover:bg-secondary/50 hover:text-foreground flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium transition-colors">
            <Bell className="h-4 w-4" />
            Notifications
          </button>
          <button className="text-muted-foreground hover:bg-secondary/50 hover:text-foreground flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium transition-colors">
            <Key className="h-4 w-4" />
            Security
          </button>
        </div>

        <div className="col-span-1 space-y-6 md:col-span-3">
          <div className="bg-card space-y-6 rounded-xl border p-6 shadow-sm">
            <div>
              <h3 className="mb-1 text-lg font-medium">Account Information</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Update your account email and basic details.
              </p>

              <div className="max-w-md space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    defaultValue="udghosh@example.com"
                    className="focus:ring-accent h-10 w-full rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Username</label>
                  <input
                    type="text"
                    defaultValue="udghosh"
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
                Permanently delete your account and all data.
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
        </div>
      </div>
    </div>
  );
}
