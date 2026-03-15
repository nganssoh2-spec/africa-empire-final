import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Famille', href: '/famille' },
    { name: 'Spiritualité', href: '/spiritualite' },
    { name: 'Opportunités', href: '/opportunites' },
    { name: 'Chat', href: '/chat' },
    { name: 'Santé', href: '/sante' },
    { name: 'Finances', href: '/finances' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-gold via-violet to-rose bg-clip-text text-transparent">
            🌍 Africa Empire
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-rose-600 transition font-semibold">
                {link.name}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="block text-gray-700 hover:text-rose-600 py-2">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}