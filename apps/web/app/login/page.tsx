'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle, signInWithPhone } from '@/lib/auth';
import AppShell from '@/components/app-shell';

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'admin' | 'creator' | 'user'>('user');
  const [error, setError] = useState('');

  const handleGoogleSignIn = () => {
    const user = signInWithGoogle(role);
    if (user.role === 'admin') {
      router.push('/admin');
      return;
    }
    if (user.role === 'creator') {
      router.push('/dashboard');
      return;
    }
    router.push('/feed');
  };

  const handlePhoneSignIn = () => {
    try {
      const user = signInWithPhone(phone, role);
      if (user.role === 'admin') {
        router.push('/admin');
        return;
      }
      if (user.role === 'creator') {
        router.push('/dashboard');
        return;
      }
      router.push('/feed');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Phone sign in failed.');
    }
  };

  return (
    <AppShell title="PLAYVID">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:px-10">
        <section className="flex-1 rounded-[28px] border border-slate-700 bg-slate-900/60 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Welcome back</p>
          <h1 className="mt-3 text-4xl font-black">Sign in to PLAYVID</h1>
          <p className="mt-3 max-w-lg text-slate-400">
            Access your creator dashboard, watch feed, or admin tools based on your role.
          </p>

          <div className="mt-6">
            <label className="mb-2 block text-sm text-slate-300">Pick a role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'admin' | 'creator' | 'user')}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-blue-500"
            >
              <option value="user">User</option>
              <option value="creator">Creator</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full rounded-full bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500"
            >
              Continue with Google
            </button>

            <div className="flex items-center gap-3 text-slate-500">
              <div className="h-px flex-1 bg-slate-700" />
              <span className="text-xs uppercase tracking-[0.2em]">or</span>
              <div className="h-px flex-1 bg-slate-700" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Phone number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500"
                placeholder="+234 800 000 0000"
              />
            </div>

            <button
              onClick={handlePhoneSignIn}
              className="w-full rounded-full border border-slate-600 px-4 py-3 font-semibold text-slate-100 hover:border-blue-500 hover:text-white"
            >
              Continue with phone
            </button>
          </div>

          {error && (
            <div className="mt-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
        </section>

        <aside className="flex-1 rounded-[28px] border border-blue-500/20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-8">
          <h2 className="text-2xl font-black">Role-based access</h2>
          <ul className="mt-6 space-y-4 text-base text-blue-50">
            <li>• Users: watch videos, like, comment, follow, and subscribe</li>
            <li>• Creators: upload, manage content, and access analytics</li>
            <li>• Admin: moderation, platform insights, and creator approval</li>
            <li>• Premium members: no ads and priority access</li>
          </ul>
        </aside>
      </main>
    </AppShell>
  );
}
