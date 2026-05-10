import React from 'react';
import { Rocket, Globe, Mail, Phone, MessageSquare, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Rocket className="h-8 w-8 text-emerald-500 mr-2" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Apna <span className="text-emerald-500">Business</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We help startups and local businesses grow online with modern digital solutions, branding, and AI automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pradhan04_?igsh=MTBtenFtcXI3c3lqYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="hero" smooth={true} duration={500} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">About Us</Link></li>
              <li><Link to="services" smooth={true} duration={500} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Services</Link></li>
              <li><Link to="portfolio" smooth={true} duration={500} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Portfolio</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Website Development</li>
              <li>Social Media Management</li>
              <li>Branding & Design</li>
              <li>SEO Optimization</li>
              <li>AI Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to get the latest insights and digital growth strategies.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-emerald-500 text-white px-4 py-3 rounded-r-lg font-semibold hover:bg-emerald-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Apna Business. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
