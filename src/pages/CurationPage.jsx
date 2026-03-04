export default function CurationPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">Content Curation</h2>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">Manage and organize curated content across your organization.</p>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-semibold text-slate-900">Curated Collections</h3>
        <div className="space-y-3">
          {['Security Best Practices', 'Compliance Guidelines', 'Risk Frameworks', 'Incident Response'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <div>
                <p className="text-sm font-medium text-slate-900">{item}</p>
                <p className="text-xs text-slate-500">12 items · Last updated today</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Edit</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
