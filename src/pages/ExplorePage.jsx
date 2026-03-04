export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Explore</h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">Discover and explore risk patterns, security insights, and organizational data.</p>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Explore Topics</h3>
        <div className="grid grid-cols-2 gap-3">
          {['Data Flows', 'User Behaviors', 'Risk Patterns', 'Access Chains', 'Network Topology', 'Compliance Mappings'].map(
            (topic) => (
              <button
                key={topic}
                className="rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-medium text-slate-900">{topic}</p>
                <p className="mt-1 text-xs text-slate-500">Explore patterns and insights</p>
              </button>
            ),
          )}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Recent Explorations</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">Exploration {i}</p>
                <p className="text-xs text-slate-500">Explored 3 hours ago</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Reopen</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
