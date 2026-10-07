import { videos, creators, shorts } from '@/lib/mock-data';
import AppShell from '@/components/app-shell';
import { VideoCard } from '@/components/video-card';

export default function HomePage() {
  return (
    <AppShell title="PLAYVID">
      <main className="min-h-screen px-4 py-6 text-slate-100 md:px-10">
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
              <a href="/feed" className="rounded-full bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-slate-100">
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

          <div className="rounded-[28px] border border-slate-700 bg-slate-900/60 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Trending now</h2>
              <span className="rounded-full bg-blue-600/20 px-2 py-1 text-xs text-blue-200">Live split</span>
            </div>

            <div className="space-y-4">
              {videos.slice(0, 3).map((video) => (
                <div key={video.id} className="flex gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/30 p-2">
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

        <section className="mx-auto mt-12 max-w-7xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">Shorts</h2>
            <a href="/feed" className="text-sm font-medium text-blue-300">See all</a>
          </div>

          <div className="short-strip">
            {shorts.map((short) => (
              <div key={short.id} className="group overflow-hidden rounded-[22px] border border-slate-700/80 bg-slate-900/50">
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

        <section className="mx-auto mt-12 max-w-7xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">Recommended for you</h2>
            <a href="/feed" className="text-sm font-medium text-blue-300">Refresh</a>
          </div>

          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl pb-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">Top creators</h2>
            <a href="/dashboard" className="text-sm font-medium text-blue-300">View all</a>
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
    </AppShell>
  );
}
