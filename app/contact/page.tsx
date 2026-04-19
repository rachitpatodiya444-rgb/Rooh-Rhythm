'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Youtube } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `Hello Rooh Rhythm!%0A%0AI would like to make an enquiry:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/918140114395?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6"
          >
            Let’s Create Something <br/> Beautiful Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-light"
          >
            Reach out to discuss your vision, and let us bring it to life through the art of dance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-zinc-950 p-10 md:p-16 border border-white/5"
          >
            <h2 className="text-3xl font-serif text-white mb-10">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Our Studio</h3>
                  <p className="text-gray-400 font-light">Surat, Gujarat<br/>India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Phone</h3>
                  <a href="tel:+918140114395" className="text-gray-400 font-light hover:text-yellow-500 transition-colors">+91 81401 14395</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1">Email</h3>
                  <a href="mailto:akshil.shihora@gmail.com" className="text-gray-400 font-light hover:text-yellow-500 transition-colors">akshil.shihora@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <h3 className="text-white text-lg mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/rooh_rhythm_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@theakshil49" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            
            <div className="mt-12">
               <a
                  href="https://wa.me/918140114395?text=Hello%20Rooh%20Rhythm,%20I%20would%20like%20to%20book%20a%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#128C7E] transition-colors duration-300"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-400 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="+91 81401 14395"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-gray-400 uppercase tracking-wider">Service Interested In *</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Wedding Choreography">Wedding Choreography</option>
                  <option value="Couples Dance">Couples Dance</option>
                  <option value="Ladies Dance">Ladies Dance</option>
                  <option value="Kids Dance">Kids Dance</option>
                  <option value="Destination Wedding">Destination Wedding</option>
                  <option value="Online Classes">Online Classes</option>
                  <option value="Event Choreography">Event Choreography</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wider">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="Tell us about your event and requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-500 text-black px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors duration-300"
              >
                Send Enquiry via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
