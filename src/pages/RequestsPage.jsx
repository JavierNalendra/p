export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Access Requests</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Pending</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">3</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Approved</p>
            <p className="mt-2 text-2xl font-bold text-green-600">24</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">Denied</p>
            <p className="mt-2 text-2xl font-bold text-red-600">2</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Pending Requests</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-3">
              <div>
                <p className="text-sm font-medium text-slate-900">Request #{1000 + i}</p>
                <p className="text-xs text-slate-500">User requesting database access · 1 day ago</p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-semibold text-green-600 hover:text-green-700">Approve</button>
                <button className="text-xs font-semibold text-red-600 hover:text-red-700">Deny</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
