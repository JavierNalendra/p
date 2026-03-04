function IconButton({ label, children, loading = false, onClick }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      aria-label={label}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-blue-500" /> : children}
    </button>
  )
}

export default IconButton
