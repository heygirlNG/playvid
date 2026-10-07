import AppShell from '@/components/app-shell';

export default function LoginPage() {
  return (
    <AppShell title="PLAYVID">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:px-10">
        <section className="flex-1 rounded-[28px] border border-slate-700 bg-slate-900/60 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Welcome back</p>
          <h1 className="mt-3 text-4xl font-black">Sign in to your PLAYVID account</h1>
          <p className="mt-3 max-w-lg text-slate-400">
            Join the audience, follow African creators, and unlock ad-free premium streaming.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-blue-500" placeholder="name@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-blue-500" placeholder="••••••••" />
            </div>

            <button className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">
              Sign in
            </button>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            Don’t have an account? <a href="#" className="font-semibold text-blue-300">Create one</a>
          </div>
        </section>

        <aside className="flex-1 rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8">
          <h2 className="text-2xl font-black">Why creators love PLAYVID</h2>
          <ul className="mt-6 space-y-4 text-base text-blue-50">
            <li>• Built for African discovery and culture</li>
            <li>• Creator-first dashboards and growth tools</li>
            <li>• Premium subscription model with no interruptions</li>
            <li>• Local-first monetization and audience support</li>
          </ul>
        </aside>
      </main>
    </AppShell>
  );
}
