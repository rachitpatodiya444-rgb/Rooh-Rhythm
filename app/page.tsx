'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Youtube } from 'lucide-react';

const offeringsPreview = [
  {
    title: 'Wedding Choreography',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Elegant routines for your special day.',
  },
  {
    title: 'Couples Dance',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Intimate and emotional storytelling.',
  },
  {
    title: 'Event Choreography',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Show-stopping performances for any stage.',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&h=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&h=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&h=600&auto=format&fit=crop',
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Rooh Rhythm Hero"
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
          >
            Where Dance <br/> Meets <span className="text-yellow-500 italic">Emotion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Luxury choreography and premium dance experiences based in Surat, India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20would%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors duration-300"
            >
              Book a Session <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm tracking-widest uppercase text-yellow-500 mb-6">The Brand</h2>
          <p className="text-2xl md:text-4xl font-serif leading-relaxed text-gray-200">
            &quot;We believe dance is not just movement; it is the poetry of the soul. At Rooh Rhythm, we craft elegant, emotional, and unforgettable experiences that resonate long after the music fades.&quot;
          </p>
        </div>
      </section>

      {/* Offerings Preview */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm tracking-widest uppercase text-yellow-500 mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white">Curated Offerings</h3>
            </div>
            <Link href="/offerings" className="group flex items-center gap-2 text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offeringsPreview.map((offering, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">{offering.title}</h4>
                <p className="text-gray-400 font-light">{offering.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm tracking-widest uppercase text-yellow-500 mb-4">Follow Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">@rooh_rhythm_</h3>
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://www.instagram.com/rooh_rhythm_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} /> Instagram
              </a>
              <a 
                href="https://www.youtube.com/@theakshil49" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} /> YouTube
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <motion.a 
                href="https://www.instagram.com/rooh_rhythm_/"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group block"
              >
                <Image
                  src={img}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/ctabg/1920/1080"
            alt="Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to create magic?</h2>
          <p className="text-gray-400 text-lg mb-10 font-light">
            Let us choreograph your next unforgettable moment.
          </p>
          <a
            href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20would%20like%20to%20discuss%20a%20choreography%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
