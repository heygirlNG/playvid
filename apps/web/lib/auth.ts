export type UserRole = 'admin' | 'creator' | 'user';

export type AppUser = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: UserRole;
  provider: 'google' | 'phone';
};

const STORAGE_KEY = 'playvid-user';

export function getCurrentUser(): AppUser | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppUser) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: AppUser) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearCurrentUser() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export function signInWithGoogle(role: UserRole = 'user') {
  const user: AppUser = {
    id: 'google-user',
    name: 'Google User',
    email: 'google-user@playvid.africa',
    role,
    provider: 'google',
  };

  setCurrentUser(user);
  return user;
}

export function signInWithPhone(phone: string, role: UserRole = 'user') {
  const normalized = phone.trim();

  if (!normalized) {
    throw new Error('Phone number is required.');
  }

  const user: AppUser = {
    id: `phone-${normalized}`,
    name: `Phone user ${normalized.slice(-4)}`,
    phone: normalized,
    role,
    provider: 'phone',
  };

  setCurrentUser(user);
  return user;
}

export function hasAccess(required: UserRole, user: AppUser | null = getCurrentUser()) {
  if (!user) return false;

  const rolePriority: Record<UserRole, number> = {
    user: 1,
    creator: 2,
    admin: 3,
  };

  return rolePriority[user.role] >= rolePriority[required];
}
