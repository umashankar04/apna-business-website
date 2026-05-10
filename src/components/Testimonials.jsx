import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, Spice Route',
    content: 'Apna Business transformed our restaurant online presence. Their website development and social media strategies doubled our reservations in just 3 months.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Priya Desai',
    role: 'CEO, Urban Fitness',
    content: 'The branding and digital marketing campaigns they ran for our gym were exceptional. Truly a premium agency with a startup-friendly approach.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Amit Patel',
    role: 'Director, Prime Estate',
    content: 'Their AI automation and WhatsApp integration completely streamlined our lead management process. Highly recommend their technical expertise.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-emerald-500 font-semibold tracking-wider uppercase mb-3 text-sm">Client Stories</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Loved By Startups Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-emerald-500/20" />
              <div className="flex text-emerald-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-slate-800"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-400 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
