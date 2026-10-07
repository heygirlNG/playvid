'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, type UserRole, hasAccess } from '@/lib/auth';

export function RoleGate({
  children,
  allow,
  fallback,
  redirectTo = '/login',
}: {
  children: React.ReactNode;
  allow: UserRole;
  fallback?: React.ReactNode;
  redirectTo?: string;
}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || !hasAccess(allow, user)) {
      router.replace(redirectTo);
      return;
    }

    setReady(true);
  }, [allow, redirectTo, router]);

  if (!ready) {
    return (
      fallback ?? (
        <div className="flex min-h-[50vh] items-center justify-center text-slate-300">Checking access...</div>
      )
    );
  }

  return <>{children}</>;
}
