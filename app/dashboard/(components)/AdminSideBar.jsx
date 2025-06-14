'use client';
import Link from 'next/link';
const AdminSideBar = () => {
  return (
    <div className="border border-[var(--color-1)] rounded p-2 w-[100px] overflow-auto text-center z-10 shadow flex-shrink-0">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard">Content</Link>
        </li>

        <li>
          <Link href="/dashboard/message">Message</Link>
        </li>

        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
        <li>
          <Link href="">Content</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
