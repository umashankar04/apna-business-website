import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, ShoppingCart, Share2, PenTool, 
  Search, TrendingUp, MessageSquare, Phone, 
  Video, Cpu 
} from 'lucide-react';

const services = [
  { icon: <Globe className="h-7 w-7" />, title: 'Website Development', description: 'Custom, responsive websites built with modern technologies.' },
  { icon: <ShoppingCart className="h-7 w-7" />, title: 'E-commerce Websites', description: 'Scalable online stores to maximize your sales.' },
  { icon: <Share2 className="h-7 w-7" />, title: 'Social Media Management', description: 'Engaging content and community growth strategies.' },
  { icon: <PenTool className="h-7 w-7" />, title: 'Branding & Logo Design', description: 'Memorable brand identities that stand out.' },
  { icon: <Search className="h-7 w-7" />, title: 'SEO Optimization', description: 'Rank higher on Google and drive organic traffic.' },
  { icon: <TrendingUp className="h-7 w-7" />, title: 'Digital Marketing', description: 'Targeted ad campaigns for maximum ROI.' },
  { icon: <MessageSquare className="h-7 w-7" />, title: 'AI Chatbots', description: 'Intelligent virtual assistants for 24/7 customer support.' },
  { icon: <Phone className="h-7 w-7" />, title: 'WhatsApp Automation', description: 'Automate communications and sales on WhatsApp.' },
  { icon: <Video className="h-7 w-7" />, title: 'Video/Reel Editing', description: 'High-quality short-form content for modern platforms.' },
  { icon: <Cpu className="h-7 w-7" />, title: 'Business Automation', description: 'Streamline operations with smart software solutions.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-emerald-500 font-semibold tracking-wider uppercase mb-3 text-sm">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-slate-400">
            From stunning websites to AI-powered automation, we provide everything your business needs to scale in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-emerald-500/5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
