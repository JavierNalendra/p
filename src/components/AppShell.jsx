import { useEffect, useState } from 'react'
import ContentContainer from './ContentContainer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const hierarchyTree = [
  'AppShell',
  '├─ Sidebar',
  '│  ├─ SidebarItem (navigation)',
  '│  ├─ SidebarItem (secondary links)',
  '│  └─ UserProfileCard',
  '├─ Topbar',
  '│  └─ IconButton (Search, Notifications)',
  '└─ ContentContainer',
]

function AppShell() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoading(false), 900)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <div className="h-screen p-4">
      <div className="flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar notificationsLoading={loading} />
          <ContentContainer loading={loading}>
            <div className="space-y-6">
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">1. Component hierarchy tree</h3>
                <pre className="mt-3 rounded-md bg-slate-50 p-4 text-sm text-slate-700">
                  {hierarchyTree.join('\n')}
                </pre>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">2. AppShell layout</h3>
                <p className="mt-2 text-sm text-slate-600">Edge-first SPA shell with fixed sidebar, bordered header, and async-ready content canvas.</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">3. Sidebar</h3>
                <p className="mt-2 text-sm text-slate-600">Vertical navigation with active state, hover interactions, utility links, and pinned profile card.</p>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">4. Topbar</h3>
                <p className="mt-2 text-sm text-slate-600">Risk Center title with reusable icon actions and loading-capable notification control.</p>
              </section>
            </div>
          </ContentContainer>
        </div>
      </div>
    </div>
  )
}

export default AppShell
