'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeContext';

const Header = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="flex justify-between px-[16px] md:px-[128px] py-[16px] bg-[var(--bg-color-1)] sticky top-0  z-50">
      <div className="text-[18px]">
        <Link href="./">R.M.</Link>
      </div>
      <div className="flex gap-[32px]">
        <Link href="./#projects">My Portfolio</Link>
        <Link href="./#aboutme">About me</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 transform translate-x-[-50%] translate-y-[-20%] cursor-pointer"
          aria-label="Toggle dark/light mode"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
