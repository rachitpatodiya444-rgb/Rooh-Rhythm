import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <article className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-500 hover:text-white transition-colors mb-10 text-sm tracking-widest uppercase">
          <ArrowLeft size={16} /> Back to Journal
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="text-yellow-500 uppercase tracking-wider">Wedding Dance</span>
            <span>•</span>
            <span>April 2, 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            5 Tips for a Flawless First Dance
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Your first dance as a married couple is a moment you will cherish forever. Here are five essential tips to ensure your performance is elegant, emotional, and stress-free.
          </p>
        </header>

        <div className="relative aspect-[16/9] w-full mb-16">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&h=675&auto=format&fit=crop"
            alt="First Dance"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-light text-gray-300">
          <p>
            The first dance is often the most anticipated moment of a wedding reception. It sets the tone for the evening and provides a beautiful, intimate moment for the newlyweds amidst the chaos of the celebration. However, the pressure to perform can sometimes overshadow the joy of the experience.
          </p>
          
          <h2 className="text-2xl font-serif text-white mt-12 mb-6">1. Choose a Song That Means Something to You</h2>
          <p>
            Don&apos;t just pick a song because it&apos;s popular or traditional. Select a track that holds sentimental value for your relationship. Whether it&apos;s the song that was playing during your first date or a track with lyrics that perfectly describe your bond, a meaningful song will naturally bring out genuine emotion in your dance.
          </p>

          <h2 className="text-2xl font-serif text-white mt-12 mb-6">2. Start Practicing Early</h2>
          <p>
            The biggest mistake couples make is leaving their dance practice to the last minute. We recommend starting at least two to three months before the wedding. This gives you ample time to learn the choreography, build muscle memory, and most importantly, get comfortable dancing together.
          </p>

          <h2 className="text-2xl font-serif text-white mt-12 mb-6">3. Consider Your Attire</h2>
          <p>
            Your wedding dress and suit will significantly impact your movement. If you have a voluminous dress or a restrictive suit, complex lifts or fast footwork might be difficult. Practice in clothing that mimics the weight and restriction of your wedding attire, and make sure your choreographer is aware of what you&apos;ll be wearing.
          </p>

          <h2 className="text-2xl font-serif text-white mt-12 mb-6">4. Keep It Simple and Authentic</h2>
          <p>
            You don&apos;t need to perform a Dancing with the Stars routine to impress your guests. Sometimes, a simple, elegant sway with a few well-timed twirles and dips is far more impactful than a complicated routine that leaves you looking stressed. Focus on connection rather than perfection.
          </p>

          <h2 className="text-2xl font-serif text-white mt-12 mb-6">5. Breathe and Enjoy the Moment</h2>
          <p>
            When the moment arrives, take a deep breath, look into your partner&apos;s eyes, and forget about the audience. If you miss a step, just smile and keep moving. The emotion and love you show each other are what your guests will remember, not the technical perfection of your footwork.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="bg-zinc-900 p-8 text-center">
            <h3 className="text-2xl font-serif text-white mb-4">Need help with your first dance?</h3>
            <p className="text-gray-400 mb-6">Our expert choreographers can craft a routine that perfectly matches your style and skill level.</p>
            <a
              href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20need%20help%20with%20my%20wedding%20first%20dance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors duration-300"
            >
              Consult with Us
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
