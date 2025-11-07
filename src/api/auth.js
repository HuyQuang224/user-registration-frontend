const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = body?.message || body?.error || 'Registration failed';
    throw new Error(message);
  }
  return body;
}