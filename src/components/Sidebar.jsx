import SidebarItem from './SidebarItem'
import UserProfileCard from './UserProfileCard'

const navItems = [
  { label: 'Risk Center', icon: '◼', active: true },
  { label: 'Investigations', icon: '◻' },
  { label: 'Signals', icon: '◆' },
  { label: 'Policies', icon: '△' },
]

const secondaryItems = [
  { label: 'Help', icon: '?' },
  { label: "What's New", icon: '*' },
]

function Sidebar() {
  return (
    <aside className="flex h-full w-[250px] flex-col border-r border-slate-200 bg-slate-50 p-4">
      <div className="mb-6 px-2">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">Palantir</h1>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <SidebarItem key={item.label} label={item.label} icon={<span aria-hidden="true" className="text-xs">{item.icon}</span>} active={item.active} />
        ))}
      </nav>

      <div className="mt-auto space-y-3 pt-6">
        <div className="border-t border-slate-200 pt-3">
          <nav className="space-y-1">
            {secondaryItems.map((item) => (
              <SidebarItem key={item.label} label={item.label} icon={<span aria-hidden="true" className="text-xs">{item.icon}</span>} />
            ))}
          </nav>
        </div>
        <UserProfileCard />
      </div>
    </aside>
  )
}

export default Sidebar
