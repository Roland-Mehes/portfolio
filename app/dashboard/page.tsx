'use client';
import { logout } from '@/fbServices/fbAuth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleOnClick = async () => {
    setLoading(true);
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>Welcome to the dashboard!</div>
      <button onClick={handleOnClick} disabled={loading}>
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </>
  );
}
