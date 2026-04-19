import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-white mb-6 inline-block">
              ROOH RHYTHM
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Luxury dance and choreography brand based in Surat, India. We focus on emotional storytelling through dance, premium experiences, and elegant choreography.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/offerings" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Journal & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6 tracking-wide">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-yellow-500 shrink-0" />
                <a href="tel:+918140114395" className="hover:text-white transition-colors">+91 81401 14395</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-yellow-500 shrink-0" />
                <a href="mailto:akshil.shihora@gmail.com" className="hover:text-white transition-colors">akshil.shihora@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.instagram.com/rooh_rhythm_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@theakshil49" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rooh Rhythm. All rights reserved.</p>
          <p>Designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
}
