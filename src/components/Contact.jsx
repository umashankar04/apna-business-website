import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 text-white">
              <h2 className="text-emerald-400 font-semibold tracking-wider uppercase mb-3 text-sm">Contact Us</h2>
              <h3 className="text-4xl font-bold mb-6">Let's Build Something <br/>Amazing Together</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Ready to take your business to the next level? Reach out to us for a free consultation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Our Location</h5>
                    <p className="text-slate-400">Bhubaneswar, Odisha, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Phone Number</h5>
                    <p className="text-slate-400">+91 96687 97558</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-1">Email Address</h5>
                    <p className="text-slate-400">apnabusiness@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border-l border-slate-800 p-12 lg:p-16">
              <h4 className="text-2xl font-bold text-white mb-8">Send us a message</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-900 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-900 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-900 text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-emerald-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center shadow-lg shadow-emerald-500/20"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
