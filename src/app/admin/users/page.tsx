'use client';

import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Ban,
  Shield,
  UserCheck,
} from 'lucide-react';
import { useState } from 'react';

const users = [
  {
    id: 1,
    name: 'Udghosh Rao',
    email: 'udghosh@example.com',
    role: 'CANDIDATE',
    status: 'ACTIVE',
    joined: 'Jun 1, 2026',
    lastSeen: '2 min ago',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    email: 'alice@acme.inc',
    role: 'EMPLOYER',
    status: 'ACTIVE',
    joined: 'May 28, 2026',
    lastSeen: '1 hour ago',
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'CANDIDATE',
    status: 'ACTIVE',
    joined: 'Jun 5, 2026',
    lastSeen: '3 hours ago',
  },
  {
    id: 4,
    name: 'spam_user_42',
    email: 'spam42@mailinator.com',
    role: 'CANDIDATE',
    status: 'BANNED',
    joined: 'Jun 15, 2026',
    lastSeen: '1 day ago',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    email: 'charlie@linear.app',
    role: 'EMPLOYER',
    status: 'ACTIVE',
    joined: 'Jun 10, 2026',
    lastSeen: '5 hours ago',
  },
  {
    id: 6,
    name: 'Diana Prince',
    email: 'diana@example.com',
    role: 'CANDIDATE',
    status: 'SUSPENDED',
    joined: 'Jun 8, 2026',
    lastSeen: '2 days ago',
  },
  {
    id: 7,
    name: 'Admin User',
    email: 'admin@mextify.com',
    role: 'ADMIN',
    status: 'ACTIVE',
    joined: 'Jan 1, 2026',
    lastSeen: 'Just now',
  },
];

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  SUSPENDED: 'bg-warning/10 text-warning border-warning/20',
  BANNED: 'bg-destructive/10 text-destructive border-destructive/20',
};

const roleColors: Record<string, string> = {
  CANDIDATE: 'bg-blue-500/10 text-blue-500',
  EMPLOYER: 'bg-purple-500/10 text-purple-500',
  ADMIN: 'bg-accent/10 text-accent',
};

export default function AdminUsersPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('ALL');

  const filtered = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          User Management
        </h1>
        <p className="text-muted-foreground">
          View and manage all platform users.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="bg-background focus:ring-accent h-9 w-full rounded-md border pr-4 pl-9 text-sm outline-none focus:ring-2"
          />
        </div>
        <div className="flex gap-2">
          {['ALL', 'CANDIDATE', 'EMPLOYER', 'ADMIN'].map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`h-9 rounded-md px-3 text-xs font-medium transition-colors ${
                roleFilter === r
                  ? 'bg-foreground text-background'
                  : 'hover:bg-secondary border'
              }`}
            >
              {r === 'ALL'
                ? 'All Roles'
                : r.charAt(0) + r.slice(1).toLowerCase() + 's'}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card overflow-hidden rounded-xl border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium">Last Seen</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium">
                        {user.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">
                          {user.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleColors[user.role]}`}
                    >
                      {user.role.charAt(0) + user.role.slice(1).toLowerCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusColors[user.status]}`}
                    >
                      {user.status.charAt(0) +
                        user.status.slice(1).toLowerCase()}
                    </span>
                  </td>
                  <td className="text-muted-foreground px-6 py-4 text-xs">
                    {user.joined}
                  </td>
                  <td className="text-muted-foreground px-6 py-4 text-xs">
                    {user.lastSeen}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-1.5 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </button>
                      {user.status === 'ACTIVE' && user.role !== 'ADMIN' && (
                        <button
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md p-1.5 transition-colors"
                          title="Ban"
                        >
                          <Ban className="h-4 w-4" />
                        </button>
                      )}
                      {user.status === 'BANNED' && (
                        <button
                          className="text-muted-foreground rounded-md p-1.5 transition-colors hover:bg-emerald-500/10 hover:text-emerald-500"
                          title="Unban"
                        >
                          <UserCheck className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md p-1.5">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary/30 flex items-center justify-between border-t px-6 py-4">
          <p className="text-muted-foreground text-xs">
            Showing {filtered.length} of {users.length} users
          </p>
          <div className="flex gap-2">
            <button
              className="hover:bg-secondary h-8 rounded-md border px-3 text-xs font-medium disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button
              className="hover:bg-secondary h-8 rounded-md border px-3 text-xs font-medium disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
