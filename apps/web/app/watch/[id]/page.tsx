import AppShell from '@/components/app-shell';
import { videos } from '@/lib/mock-data';

export default function WatchPage({ params }: { params: { id: string } }) {
  const selectedVideo = videos.find((video) => video.id === params.id) ?? videos[0];

  return (
    <AppShell title="PLAYVID">
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.6fr_0.8fr]">
          <section>
            <div className="overflow-hidden rounded-[28px] border border-slate-700 bg-slate-900/60">
              <img src={selectedVideo.image} alt={selectedVideo.title} className="h-[420px] w-full object-cover" />
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-600/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-200">
                  {selectedVideo.premium ? 'Premium' : 'Free'}
                </span>
                {selectedVideo.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">{selectedVideo.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span>{selectedVideo.channel}</span>
                <span>•</span>
                <span>{selectedVideo.views}</span>
                <span>•</span>
                <span>{selectedVideo.duration}</span>
              </div>

              <p className="mt-6 max-w-3xl text-base text-slate-300">{selectedVideo.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">Like {selectedVideo.likes.toLocaleString()}</button>
                <button className="rounded-full border border-slate-600 px-5 py-3 font-semibold text-slate-200">Comment {selectedVideo.comments.toLocaleString()}</button>
                <button className="rounded-full border border-slate-600 px-5 py-3 font-semibold text-slate-200">Share</button>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[24px] border border-slate-700 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Creator</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-lg font-black text-white">
                  {selectedVideo.creator.slice(0, 1)}
                </div>
                <div>
                  <div className="font-bold text-white">{selectedVideo.creator}</div>
                  <div className="text-sm text-slate-400">{selectedVideo.channel}</div>
                </div>
              </div>
              <button className="mt-5 w-full rounded-full border border-blue-500 px-4 py-3 font-semibold text-blue-200 hover:bg-blue-600/10">
                Follow creator
              </button>
            </div>

            <div className="rounded-[24px] border border-slate-700 bg-slate-900/60 p-5">
              <h3 className="text-lg font-black">More from this creator</h3>
              <div className="mt-4 space-y-3">
                {videos.slice(0, 3).map((video) => (
                  <div key={video.id} className="flex gap-3 rounded-2xl border border-slate-700 bg-slate-950/30 p-3">
                    <img src={video.image} alt={video.title} className="h-16 w-24 rounded-xl object-cover" />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-100">{video.title}</div>
                      <div className="mt-1 text-xs text-slate-400">{video.views}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </AppShell>
  );
}
