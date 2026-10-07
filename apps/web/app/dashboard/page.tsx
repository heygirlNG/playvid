import AppShell from '@/components/app-shell';

const stats = [
  { label: 'Views', value: '2.4M', note: 'This month' },
  { label: 'Followers', value: '156K', note: 'Total audience' },
  { label: 'Earnings', value: '₦1.8M', note: 'Estimated' },
  { label: 'Watch time', value: '12.7K', note: 'Hours' },
];

const recentVideos = [
  { title: 'Creative Entrepreneurship in Nairobi', status: 'Published', views: '84K' },
  { title: 'The Future of African Tech', status: 'Published', views: '125K' },
  { title: 'Monetize your voice', status: 'Draft', views: '0' },
];

export default function DashboardPage() {
  return (
    <AppShell title="PLAYVID">
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <section className="mb-8 flex flex-col gap-4 rounded-[28px] border border-slate-700 bg-slate-900/60 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Creator dashboard</p>
            <h1 className="mt-2 text-3xl font-black">Welcome back, Amina</h1>
          </div>
          <button className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">
            Upload new video
          </button>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[22px] border border-slate-700 bg-slate-900/50 p-5">
              <div className="text-sm text-slate-400">{stat.label}</div>
              <div className="mt-4 text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-xs text-slate-500">{stat.note}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-slate-700 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black">Recent uploads</h2>
              <a href="#" className="text-sm text-blue-300">View all</a>
            </div>

            <div className="space-y-4">
              {recentVideos.map((video) => (
                <div key={video.title} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/30 p-4">
                  <div>
                    <div className="font-semibold text-slate-100">{video.title}</div>
                    <div className="mt-1 text-xs text-slate-400">{video.status}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-300">{video.views}</div>
                    <div className="text-[11px] text-slate-500">views</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-700 bg-slate-900/60 p-6">
            <h2 className="text-xl font-black">Monetization</h2>
            <div className="mt-5 rounded-2xl bg-blue-600/10 p-4">
              <div className="text-sm text-blue-200">Current payout status</div>
              <div className="mt-2 text-3xl font-black text-white">₦810,400</div>
              <div className="mt-2 text-xs text-slate-300">Pending review</div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Ad earnings</span>
                <span className="font-semibold text-white">₦340K</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Premium split</span>
                <span className="font-semibold text-white">₦310K</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tips & gifts</span>
                <span className="font-semibold text-white">₦160K</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
