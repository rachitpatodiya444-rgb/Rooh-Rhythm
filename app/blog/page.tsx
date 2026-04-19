'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Wedding Dance', 'Tutorials', 'Fitness & Dance', 'Events'];

const blogPosts = [
  {
    id: '1',
    title: '5 Tips for a Flawless First Dance',
    category: 'Wedding Dance',
    excerpt: 'Your first dance as a married couple is a moment you will cherish forever. Here are five essential tips to ensure your performance is elegant, emotional, and stress-free.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&h=500&auto=format&fit=crop',
    date: 'April 2, 2026',
    slug: '5-tips-flawless-first-dance'
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Sangeet Song',
    category: 'Wedding Dance',
    excerpt: 'Selecting the right track for your Sangeet can be overwhelming. We break down the process of finding a song that matches your personality and dance style.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&h=500&auto=format&fit=crop',
    date: 'March 28, 2026',
    slug: 'choose-perfect-sangeet-song'
  },
  {
    id: '3',
    title: 'Beginners Guide to Graceful Hand Movements',
    category: 'Tutorials',
    excerpt: 'Fluidity in hand movements can elevate any dance routine. Learn the basic techniques to add grace and elegance to your choreography.',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&h=500&auto=format&fit=crop',
    date: 'March 15, 2026',
    slug: 'beginners-guide-graceful-hand-movements'
  },
  {
    id: '4',
    title: 'Dance as a Form of Emotional Release',
    category: 'Fitness & Dance',
    excerpt: 'Beyond physical fitness, dance offers a profound way to process and express emotions. Discover the therapeutic benefits of movement.',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&h=500&auto=format&fit=crop',
    date: 'March 5, 2026',
    slug: 'dance-emotional-release'
  },
  {
    id: '5',
    title: 'Behind the Scenes: The Grand Ambani Wedding',
    category: 'Events',
    excerpt: 'A glimpse into the rigorous rehearsals, creative process, and sheer magic of choreographing for one of the biggest events of the year.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&h=500&auto=format&fit=crop',
    date: 'February 20, 2026',
    slug: 'behind-scenes-grand-wedding'
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            The Journal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Insights, tutorials, and stories from the world of luxury choreography.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide transition-colors ${
                activeCategory === cat ? 'bg-yellow-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-[16/10] mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 text-xs text-yellow-500 uppercase tracking-wider">
                  {post.category}
                </div>
              </Link>
              
              <div className="flex flex-col flex-grow">
                <span className="text-gray-500 text-sm mb-3">{post.date}</span>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-serif text-white mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 font-light mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block border-b border-yellow-500 text-yellow-500 pb-1 text-sm tracking-widest uppercase hover:text-white hover:border-white transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
