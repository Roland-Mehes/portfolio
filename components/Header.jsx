import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between px-[16px] md:px-[128px] py-[16px] bg-[var(--bg-color-1)] sticky top-0  z-50">
      <div className="text-[18px]">
        <Link href="#">R.M.</Link>
      </div>
      <div className="flex gap-[32px]">
        <Link href="#projects">My Portfolio</Link>
        <Link href="#aboutme">About me</Link>
      </div>
    </header>
  );
};

export default Header;
