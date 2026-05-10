import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-950 bg-grid-pattern">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-emerald-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-semibold text-sm mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              🚀 #1 Digital Growth Agency
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Grow Your Business <br className="hidden lg:block" />
              Digitally With <span className="text-gradient drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">Apna Business</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              We help startups and local businesses grow online with modern websites, social media, branding, and AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <RouterLink
                to="/inquiry"
                className="px-8 py-4 bg-emerald-500 text-slate-950 rounded-full font-bold hover:bg-emerald-400 transition-all flex items-center justify-center cursor-pointer group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/inquiry"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center cursor-pointer border border-slate-700 shadow-sm"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-emerald-400" />
                Book Free Consultation
              </RouterLink>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 p-2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Agency Team" 
                className="w-full h-auto rounded-xl opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
              />
              {/* Floating badges */}
              <div className="absolute top-6 -left-6 glass-dark px-4 py-3 rounded-xl shadow-lg shadow-emerald-500/10 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-bold">↑</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Growth</p>
                    <p className="font-bold text-white">+245%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
