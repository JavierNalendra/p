export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Total Users</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">1,250</p>
            <p className="mt-1 text-xs text-slate-500">↑ 12% from last month</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Active Sessions</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">342</p>
            <p className="mt-1 text-xs text-slate-500">↓ 5% from yesterday</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">System Health</p>
            <p className="mt-2 text-2xl font-bold text-green-600">99.9%</p>
            <p className="mt-1 text-xs text-slate-500">Uptime maintained</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Compliance Score</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">87%</p>
            <p className="mt-1 text-xs text-slate-500">↑ 3% from last review</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Key Metrics</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-900">Risk Mitigation Rate</p>
              <p className="text-sm font-bold text-green-600">92%</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-11/12 bg-green-500" />
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-900">Policy Compliance</p>
              <p className="text-sm font-bold text-blue-600">78%</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/4 bg-blue-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
