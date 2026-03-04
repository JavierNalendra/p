function SidebarItem({ icon, label, active = false, badge, hasArrow = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition ${
        active
          ? 'bg-slate-900 text-white'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      <span className="flex items-center gap-3">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{label}</span>
      </span>
      {badge && (
        <span className="flex-shrink-0 ml-auto rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
          {badge}
        </span>
      )}
      {hasArrow && !badge && <span className="flex-shrink-0 ml-auto text-slate-400">›</span>}
    </button>
  )
}

export default SidebarItem
