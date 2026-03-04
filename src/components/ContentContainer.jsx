function SkeletonBlock({ className }) {
  return <div className={`animate-pulse rounded-md bg-slate-200 ${className}`} />
}

function ContentContainer({ loading = false, children }) {
  return (
    <main className="flex-1 overflow-auto bg-slate-100 p-6">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {loading ? (
          <div className="space-y-4" aria-label="Loading content">
            <SkeletonBlock className="h-4 w-52" />
            <SkeletonBlock className="h-24 w-full" />
            <SkeletonBlock className="h-16 w-3/4" />
          </div>
        ) : (
          children
        )}
      </section>
    </main>
  )
}

export default ContentContainer
