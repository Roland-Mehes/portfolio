'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/fbServices/fb';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user?.email) {
      const redirect = async () => {
        router.push('/dashboard');
      };
      redirect();
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      await fetch('/api/set-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
        credentials: 'include',
      });

      router.push('/dashboard');
    } catch (err) {
      setErrorMsg(`Login failed: ' ${err}`);
    }
  };

  if (user?.email || loading) {
    return <p>Redirecting...</p>;
  }
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center gap-2 "
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 outline-none rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 outline-none rounded"
      />

      {errorMsg ? `${errorMsg}` : ''}

      <button type="submit" className="border-2 w-20 rounded cursor-pointer">
        Login
      </button>
    </form>
  );
}
