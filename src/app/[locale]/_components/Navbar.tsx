'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold text-blue-600">Redpillnet</Link>
      <div className="flex gap-4">
        <Link href="/services" className="hover:underline">Сервисы</Link>
        <Link href="/pricing" className="hover:underline">Цены</Link>
        <Link href="/dashboard" className="hover:underline">Личный кабинет</Link>
      </div>
    </nav>
  );
}
