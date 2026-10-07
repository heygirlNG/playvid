import AppShell from '@/components/app-shell';
import { VideoCard } from '@/components/video-card';
import { videos, shorts } from '@/lib/mock-data';

export default function FeedPage() {
  return (
    <AppShell title="PLAYVID">
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <section className="rounded-[28px] border border-blue-500/20 bg-gradient-to-r from-blue-700/90 via-blue-600/80 to-sky-700/80 p-6 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Discover</p>
              <h1 className="mt-2 text-3xl font-black md:text-4xl">What’s trending across Africa today</h1>
            </div>
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700">Watch premium</button>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black">Shorts</h2>
            <span className="text-sm text-blue-300">Quick bites</span>
          </div>

          <div className="short-strip">
            {shorts.map((short) => (
              <div key={short.id} className="overflow-hidden rounded-[24px] border border-slate-700/80 bg-slate-900/50">
                <img src={short.image} alt={short.title} className="h-72 w-full object-cover" />
                <div className="p-3 text-sm font-semibold text-slate-100">{short.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black">For you</h2>
            <span className="text-sm text-slate-400">Free + Premium</span>
          </div>

          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
