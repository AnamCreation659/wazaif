'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Add Blog', href: '/admin/addVazaif' },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Top Navbar */}
      <header className="h-16 bg-white shadow flex items-center justify-between px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">CURRENT GOLD</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span>Welcome, <strong>Admin</strong></span>
          <img src="/public/assets/font-size.JPG" alt="" className="w-10 h-10 rounded-full" />
        </div>
      </header>

      {/* Below Navbar -> Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block p-2 rounded ${
                pathname === link.href ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          {children}
        </main>

      </div>
    </div>
  );
}
