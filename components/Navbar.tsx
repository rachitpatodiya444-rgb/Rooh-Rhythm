'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-white hover:text-yellow-500 transition-colors">
          ROOH RHYTHM
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-yellow-500 ${
                pathname === link.href ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20would%20like%20to%20book%20a%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm tracking-widest uppercase"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-yellow-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg tracking-widest uppercase transition-colors hover:text-yellow-500 ${
                  pathname === link.href ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20would%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 border border-yellow-500 text-yellow-500 text-center hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm tracking-widest uppercase mt-4"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
