import SidebarItem from './SidebarItem'
import UserProfileCard from './UserProfileCard'
import {
  RiskCenterIcon,
  CurationIcon,
  RequestsIcon,
  AccessReviewsIcon,
  EventsIcon,
  DashboardIcon,
  ExploreIcon,
  ConfigIcon,
  SearchIcon,
  HelpIcon,
  StarIcon,
  PalantirIcon,
} from './icons'

const navItems = [
  { id: 'risk-center', label: 'Risk Center', icon: RiskCenterIcon },
  { id: 'curation', label: 'Curation', icon: CurationIcon },
  { id: 'requests', label: 'Requests', icon: RequestsIcon, badge: '3' },
  { id: 'access-reviews', label: 'Access Reviews', icon: AccessReviewsIcon },
  { id: 'events', label: 'Events', icon: EventsIcon },
  { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { id: 'explore', label: 'Explore', icon: ExploreIcon },
  { id: 'configuration', label: 'Configuration', icon: ConfigIcon, hasArrow: true },
]

const secondaryItems = [
  { id: 'help', label: 'Help', icon: HelpIcon },
  { id: 'whats-new', label: "What's New", icon: StarIcon },
]

function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="flex h-full w-[250px] flex-col border-r border-slate-200 bg-white p-4">
      <div className="mb-6 px-2">
        <h1 className="text-lg font-bold tracking-tight text-slate-900">◆ Palantir</h1>
      </div>

      <div className="mb-6 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none"
        />
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            icon={<item.icon />}
            active={currentPage === item.id}
            badge={item.badge}
            hasArrow={item.hasArrow}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </nav>

      <div className="mt-auto space-y-3 pt-6">
        <button className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          Send a Message
        </button>
        <div className="space-y-1 border-t border-slate-200 pt-3">
          <nav>
            {secondaryItems.map((item) => (
              <SidebarItem
                key={item.id}
                label={item.label}
                icon={<item.icon />}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </nav>
        </div>
        <UserProfileCard />
      </div>
    </aside>
  )
}

export default Sidebar
