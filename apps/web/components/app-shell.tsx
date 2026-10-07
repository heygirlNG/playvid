export default function AppShell({
  children,
  title = 'PLAYVID',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
              P
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">{title}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Made for Africa</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/feed" className="hover:text-white">Feed</a>
            <a href="/dashboard" className="hover:text-white">Dashboard</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/login" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-blue-500 hover:text-white">
              Sign in
            </a>
            <a href="/pricing" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
              Premium
            </a>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
