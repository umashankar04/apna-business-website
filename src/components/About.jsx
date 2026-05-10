import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[500px] object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-slate-800 border border-slate-700 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-emerald-400 mb-1">1+</p>
              <p className="text-sm font-medium text-slate-400">Years of<br />Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-emerald-500 font-semibold tracking-wider uppercase mb-3 text-sm">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="text-slate-400">Digital Reality</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Apna Business is a premier digital growth agency dedicated to helping businesses create a dominant online presence. We combine cutting-edge technology, creative design, and data-driven marketing solutions to accelerate your growth.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Innovative Digital Strategies',
                'Award-Winning Design Team',
                'Data-Driven Marketing Campaigns',
                'Dedicated 24/7 Support'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3 flex-shrink-0 border border-emerald-500/30">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">6+</span>
                <span className="text-sm text-slate-500 font-medium">Projects Completed</span>
              </div>
              <div className="w-px h-12 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-sm text-slate-500 font-medium">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
