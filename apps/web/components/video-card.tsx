import type { Video } from '@/lib/mock-data';

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-slate-700/80 bg-slate-900/40 transition duration-200 hover:border-blue-500/50 hover:shadow-soft">
      <div className="relative">
        <img src={video.image} alt={video.title} className="h-52 w-full object-cover" />
        <span className="absolute bottom-3 right-3 rounded-md bg-slate-950/90 px-2 py-1 text-[10px] font-medium text-white">
          {video.duration}
        </span>
        {video.premium && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
            Premium
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            {video.creator.slice(0, 1)}
          </div>
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-base font-bold text-slate-100">{video.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{video.channel}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.likes.toLocaleString()} likes</span>
              <span>•</span>
              <span>{video.comments.toLocaleString()} comments</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
