export default function PricingPage() {
  return (
    <main className="min-h-screen px-4 py-10 text-slate-100 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">P</div>
            <div>
              <div className="text-xl font-black tracking-tight">PLAYVID</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Premium</div>
            </div>
          </div>
          <a href="/" className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-blue-500 hover:text-white">
            Back home
          </a>
        </header>

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-200">
            Ad-free premium
          </span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Pick the plan that fits your watch time.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Stream without interruptions, support African creators, and enjoy a premium video experience built for the continent.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-700 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Free</p>
            <h2 className="mt-4 text-4xl font-black">₦0</h2>
            <p className="mt-2 text-slate-400">Watch videos with ads</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Watch all library content</li>
              <li>• Standard video quality</li>
              <li>• Ad-supported experience</li>
            </ul>
            <button className="mt-8 w-full rounded-full border border-slate-600 px-4 py-3 font-semibold text-slate-100">
              Continue free
            </button>
          </div>

          <div className="rounded-[28px] border border-blue-500 bg-blue-600/10 p-6 shadow-soft">
            <div className="inline-flex rounded-full bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Most popular
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-blue-200">Premium</p>
            <h2 className="mt-4 text-4xl font-black">₦3,500</h2>
            <p className="mt-2 text-slate-300">Per month</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• Ad-free viewing</li>
              <li>• HD video playback</li>
              <li>• Offline download access</li>
              <li>• Support African creators</li>
            </ul>
            <button className="mt-8 w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500">
              Subscribe with Paystack
            </button>
          </div>

          <div className="rounded-[28px] border border-slate-700 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Family</p>
            <h2 className="mt-4 text-4xl font-black">₦8,900</h2>
            <p className="mt-2 text-slate-400">Per month</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>• Up to 5 premium accounts</li>
              <li>• Higher streaming quality</li>
              <li>• Priority creator support</li>
            </ul>
            <button className="mt-8 w-full rounded-full border border-slate-600 px-4 py-3 font-semibold text-slate-100">
              Unlock family plan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
