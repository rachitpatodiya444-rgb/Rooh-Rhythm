'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    id: 'wedding',
    title: 'Wedding Choreography',
    desc: 'Make your special day unforgettable with elegant and personalized routines tailored for the bride, groom, and family.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: false,
  },
  {
    id: 'couples',
    title: 'Couples Dance',
    desc: 'Intimate, emotional storytelling through movement. Perfect for sangeet performances, pre-wedding shoots, or anniversaries.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: true,
  },
  {
    id: 'ladies',
    title: 'Ladies Dance',
    desc: 'Graceful, energetic, and synchronized routines designed specifically for the bride squad and ladies of the family.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: false,
  },
  {
    id: 'kids',
    title: 'Kids Dance',
    desc: 'Fun, engaging, and easy-to-learn choreography for the little stars of your event.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: true,
  },
  {
    id: 'destination',
    title: 'Destination Wedding',
    desc: 'Comprehensive choreography services that travel with you, ensuring seamless performances at your dream destination.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: false,
  },
  {
    id: 'online',
    title: 'Online Classes',
    desc: 'Learn from anywhere in the world with our structured, interactive online choreography sessions.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: true,
  },
  {
    id: 'event',
    title: 'Event Choreography',
    desc: 'Show-stopping performances for corporate events, award shows, and grand celebrations.',
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200&h=800&auto=format&fit=crop',
    reverse: false,
  },
];

export default function Offerings() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Our Offerings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Discover our range of premium choreography services, crafted to bring your vision to life with elegance and emotion.
          </motion.p>
        </div>

        <div className="space-y-32">
          {offerings.map((offering, index) => (
            <motion.div 
              key={offering.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${offering.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{offering.title}</h2>
                <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                  {offering.desc}
                </p>
                <div>
                  <a
                    href={`https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20am%20interested%20in%20your%20${encodeURIComponent(offering.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-yellow-500 text-yellow-500 px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                  >
                    Book Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
