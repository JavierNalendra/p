function UserProfileCard() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-sm font-semibold text-slate-700">
          JS
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">Jane Smith</p>
          <p className="text-xs text-slate-500">Acme Corporation</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
