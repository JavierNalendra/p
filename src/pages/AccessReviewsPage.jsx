export default function AccessReviewsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Access Reviews</h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">Review and certify user access permissions across systems.</p>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Active Reviews</h3>
        <div className="space-y-2">
          {['Engineering Team', 'Security Team', 'Finance Team', 'Operations Team'].map((team) => (
            <div key={team} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">{team}</p>
                <p className="text-xs text-slate-500">8 members to review · Due in 3 days</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">60%</span>
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Review</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
