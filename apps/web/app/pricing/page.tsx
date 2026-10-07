'use client';

import { useEffect, useState } from 'react';

type Plan = {
  id: string;
  name: string;
  amount: number;
  currency: string;
  description: string;
  perks: string[];
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loadingPlanId, setLoadingPlanId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:4000/subscriptions/plans');
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError('Unable to load pricing plans. Please ensure the API is running on port 4000.');
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = async (planId: string) => {
    setLoadingPlanId(planId);
    setError('');
    setStatus('');

    try {
      const response = await fetch('http://localhost:4000/subscriptions/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          email: 'demo@playvid.africa',
        }),
      });

      const result = await response.json();

      if (result.success && result.data?.data?.authorization_url) {
        setStatus(`Redirecting to Paystack for ${planId}...`);
        window.open(result.data.data.authorization_url, '_blank', 'noopener,noreferrer');
      } else {
        setError(result.message || 'Checkout could not be started.');
      }
    } catch (err) {
      setError('Could not connect to the Playvid payment API.');
    } finally {
      setLoadingPlanId(null);
    }
  };

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

        {status && (
          <div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {status}
          </div>
        )}

        {error && (
          <div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.length > 0 ? (
            plans.map((plan) => {
              const isPopular = plan.id === 'premium';

              return (
                <div
                  key={plan.id}
                  className={[
                    'rounded-[28px] border p-6',
                    isPopular
                      ? 'border-blue-500 bg-blue-600/10 shadow-soft'
                      : 'border-slate-700 bg-slate-900/50',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{plan.name}</p>
                    {isPopular && (
                      <span className="inline-flex rounded-full bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        Most popular
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-4xl font-black">
                    {plan.amount === 0 ? '₦0' : `₦${plan.amount.toLocaleString()}`}
                  </h2>
                  <p className="mt-2 text-slate-400">
                    {plan.amount === 0 ? 'Watch videos with ads' : 'Per month'}
                  </p>

                  <p className="mt-3 text-sm text-slate-300">{plan.description}</p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {plan.perks.map((perk) => (
                      <li key={perk}>• {perk}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loadingPlanId !== null || plan.amount === 0}
                    className={[
                      'mt-8 w-full rounded-full px-4 py-3 font-semibold transition',
                      plan.amount === 0
                        ? 'cursor-not-allowed border border-slate-600 text-slate-100'
                        : isPopular
                          ? 'bg-blue-600 text-white hover:bg-blue-500'
                          : 'border border-slate-600 text-slate-100 hover:border-blue-500 hover:text-white',
                    ].join(' ')}
                  >
                    {loadingPlanId === plan.id
                      ? 'Preparing checkout...'
                      : plan.amount === 0
                        ? 'Continue free'
                        : `Subscribe with Paystack`}
                  </button>
                </div>
              );
            })
          ) : (
            <div className="col-span-3 rounded-[28px] border border-slate-700 bg-slate-900/50 p-8 text-center text-slate-300">
              Loading plans...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
