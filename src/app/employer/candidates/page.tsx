'use client';

import { Search, Filter, MessageSquare, Star } from 'lucide-react';

export default function CandidatesPipelinePage() {
  return (
    <div className="flex min-h-[80vh] flex-col space-y-8">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Applicants</h1>
        <p className="text-muted-foreground">Manage your applicant pipeline.</p>
      </div>

      <div className="flex gap-4">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="bg-background focus:ring-accent h-9 w-full rounded-md border pr-4 pl-9 text-sm outline-none focus:ring-2"
          />
        </div>
        <button className="hover:bg-secondary flex h-9 items-center gap-2 rounded-md border px-4 text-sm font-medium">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="flex flex-1 gap-6 overflow-x-auto pb-4">
        {/* Kanban Board Columns */}
        {[
          {
            title: 'New Applied',
            count: 12,
            color: 'border-blue-500/50 bg-blue-500/5',
          },
          {
            title: 'Screening',
            count: 5,
            color: 'border-yellow-500/50 bg-yellow-500/5',
          },
          {
            title: 'Interview',
            count: 3,
            color: 'border-purple-500/50 bg-purple-500/5',
          },
          {
            title: 'Offer',
            count: 1,
            color: 'border-emerald-500/50 bg-emerald-500/5',
          },
        ].map((col) => (
          <div key={col.title} className="flex w-80 shrink-0 flex-col gap-4">
            <div
              className={`flex items-center justify-between rounded-md border px-4 py-2 ${col.color}`}
            >
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <span className="bg-background rounded-full border px-2 py-0.5 text-xs font-medium">
                {col.count}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Dummy Cards */}
              <div className="bg-card hover:border-accent/50 cursor-grab rounded-lg border p-4 shadow-sm transition-colors">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold">Alex Developer</h4>
                    <p className="text-muted-foreground text-xs">
                      Senior React Developer
                    </p>
                  </div>
                  <button className="text-muted-foreground transition-colors hover:text-yellow-500">
                    <Star className="h-4 w-4" />
                  </button>
                </div>

                <div className="mb-4 flex gap-2">
                  <span className="bg-secondary rounded-sm px-2 py-0.5 text-[10px] font-medium">
                    React
                  </span>
                  <span className="bg-secondary rounded-sm px-2 py-0.5 text-[10px] font-medium">
                    Node.js
                  </span>
                </div>

                <div className="flex items-center justify-between border-t pt-3">
                  <span className="rounded-full bg-emerald-500/10 px-2 text-xs font-medium text-emerald-500">
                    94% Match
                  </span>
                  <button className="hover:bg-secondary text-muted-foreground hover:text-foreground rounded-md p-1.5">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
