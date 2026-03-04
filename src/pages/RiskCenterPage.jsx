export default function RiskCenterPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Risk Overview</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Critical Risks</p>
            <p className="mt-2 text-2xl font-bold text-red-600">12</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">High Risks</p>
            <p className="mt-2 text-2xl font-bold text-orange-600">28</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Medium Risks</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">15</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Low Risks</p>
            <p className="mt-2 text-2xl font-bold text-green-600">7</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Recent Risk Activities</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">Risk Activity {i}</p>
                <p className="text-xs text-slate-500">Updated 2 hours ago</p>
              </div>
              <span className="text-xs font-semibold text-slate-400">View</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
