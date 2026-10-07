const videos = [
  {
    title: 'The Future of African Tech',
    channel: 'Africa Square',
    views: '1.2M views',
    duration: '18:42',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    creator: 'Creator 1',
  },
  {
    title: 'Street Food Stories in Lagos',
    channel: 'Naija Eats',
    views: '870K views',
    duration: '11:08',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    creator: 'Creator 2',
  },
  {
    title: 'Creative Entrepreneurship in Nairobi',
    channel: 'EastRise',
    views: '540K views',
    duration: '22:17',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    creator: 'Creator 3',
  },
  {
    title: 'Sports Highlights: West Africa Finals',
    channel: 'GoalPulse',
    views: '2.4M views',
    duration: '9:55',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    creator: 'Creator 4',
  },
];

const shorts = [
  { title: 'Quick job tips for creators', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
  { title: 'Fashion from Accra to Cape Town', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { title: 'Monetize your voice', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80' },
  { title: 'African music culture', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' },
];

const creators = [
  { name: 'Amina K.', followers: '925K', niche: 'Culture & stories' },
  { name: 'Kwame D.', followers: '780K', niche: 'Business + innovation' },
  { name: 'Lina T.', followers: '541K', niche: 'Lifestyle & food' },
  { name: 'Nairobi Crew', followers: '1.3M', niche: 'News & entertainment' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 text-slate-100 md:px-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-700/80 bg-slate-900/70 px-5 py-3 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            P
          </div>
          <div>
            <div className="text-xl font-black tracking-tight">PLAYVID</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Made for Africa</div>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#discover">Discover</a>
          <a href="#shorts">Shorts</a>
          <a href="#creators">Creators</a>
          <a href="/pricing">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-500 hover:text-white">
            Sign in
          </button>
          <a
            href="/pricing"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get Premium
          </a>
        </div>
      </header>

      <section className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8 shadow-soft">
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-blue-100">
            Pan-African streaming
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
            Where Africa creates and watches culture.
          </h1>
          <p className="mt-5 max-w-lg text-base text-blue-50/90 md:text-lg">
            Discover stories, entertainment, sports, education, and creator voices across the continent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#discover" className="rounded-full bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-slate-100">
              Explore videos
            </a>
            <a href="/pricing" className="rounded-full border border-white/30 bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Premium plan
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-50">
            <div><span className="block text-2xl font-black">12M+</span> monthly watch hours</div>
            <div><span className="block text-2xl font-black">430K</span> active creators</div>
            <div><span className="block text-2xl font-black">40+</span> countries</div>
          </div>
        </div>

        <div className="glass rounded-[28px] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Trending now</h2>
            <span className="rounded-full bg-blue-600/20 px-2 py-1 text-xs text-blue-200">Live split</span>
          </div>

          <div className="space-y-4">
            {videos.slice(0, 3).map((video) => (
              <div key={video.title} className="flex gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/30 p-2">
                <img src={video.image} alt={video.title} className="h-20 w-28 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-100">{video.title}</div>
                  <div className="mt-1 text-xs text-slate-400">{video.channel}</div>
                  <div className="mt-1 text-[11px] text-slate-500">{video.views}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shorts" className="mx-auto mt-12 max-w-7xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">Shorts</h2>
          <a href="#" className="text-sm font-medium text-blue-300">See all</a>
        </div>

        <div className="short-strip">
          {shorts.map((short) => (
            <div key={short.title} className="group overflow-hidden rounded-[22px] border border-slate-700/80 bg-slate-900/50">
              <div className="relative">
                <img src={short.image} alt={short.title} className="h-80 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-blue-100">
                  Shorts
                </div>
              </div>
              <div className="p-3 text-sm font-semibold text-slate-100">{short.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="discover" className="mx-auto mt-12 max-w-7xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">Recommended for you</h2>
          <a href="#" className="text-sm font-medium text-blue-300">Refresh</a>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <article key={video.title} className="overflow-hidden rounded-[24px] border border-slate-700/80 bg-slate-900/40">
              <div className="relative">
                <img src={video.image} alt={video.title} className="h-52 w-full object-cover" />
                <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/90 px-2 py-1 text-[10px] font-medium text-white">
                  {video.duration}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {video.creator.slice(0, 1)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-base font-bold text-slate-100">{video.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{video.channel}</p>
                    <div className="mt-2 flex gap-3 text-xs text-slate-500">
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>Today</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="creators" className="mx-auto mt-12 max-w-7xl pb-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">Top creators</h2>
          <a href="#" className="text-sm font-medium text-blue-300">View all</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {creators.map((creator) => (
            <div key={creator.name} className="rounded-[24px] border border-slate-700/80 bg-slate-900/50 p-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-xl font-black text-white">
                {creator.name.slice(0, 1)}
              </div>
              <h3 className="text-lg font-bold">{creator.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{creator.niche}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-3 text-sm">
                <span className="text-slate-300">Followers</span>
                <span className="font-semibold text-blue-300">{creator.followers}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
