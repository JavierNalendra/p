export default function EventsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Security Events</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Today</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">48</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">This Week</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">342</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">This Month</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">1.2K</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Anomalies</p>
            <p className="mt-2 text-2xl font-bold text-red-600">5</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Recent Events</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">Event {i}: Authentication failed</p>
                <p className="text-xs text-slate-500">User: john.doe@company.com · 15 minutes ago</p>
              </div>
              <span className="text-xs font-semibold text-slate-400">Details</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
