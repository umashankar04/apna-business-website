import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Layout, Bot, Rocket, Clock } from 'lucide-react';

const features = [
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium quality services that fit your startup budget perfectly.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'We value your time. Rapid execution without compromising quality.' },
  { icon: Layout, title: 'Modern Designs', desc: 'Sleek, contemporary aesthetics inspired by top global agencies.' },
  { icon: Bot, title: 'AI-Powered Solutions', desc: 'Leverage the latest AI tools for automation and efficiency.' },
  { icon: Rocket, title: 'Startup Friendly', desc: 'Tailored strategies designed specifically for early-stage growth.' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock dedicated assistance whenever you need it.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-1/4 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-emerald-400 font-semibold tracking-wider uppercase mb-3 text-sm">Why Choose Us</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              The Apna Business <br />
              <span className="text-emerald-400">Advantage</span>
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We don't just build websites; we build scalable digital businesses. Here is why modern startups partner with us.
            </p>
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30">
              Partner With Us
            </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-dark p-6 rounded-2xl hover:bg-slate-800/80 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-100">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
