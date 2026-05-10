import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const InquiryForm = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 bg-grid-pattern">
        <div className="bg-slate-900 p-10 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.15)] max-w-lg w-full text-center border border-slate-800 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <CheckCircle className="h-20 w-20 text-emerald-400 mx-auto mb-6 relative z-10" />
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Request Submitted</h2>
          <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
            Thank you for submitting your details to Apna Business. Our team will review your requirements and contact you shortly with the best solution.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-emerald-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors relative z-10 shadow-lg shadow-emerald-500/20"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-300 bg-grid-pattern">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-slate-400 hover:text-emerald-400 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          
          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <img src={logo} alt="Apna Business Logo" className="h-16 w-auto mb-6 relative z-10" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 text-white">Client Service Inquiry</h1>
            <p className="text-slate-400 text-lg max-w-2xl relative z-10 leading-relaxed">
              We help businesses grow through website development, social media management, branding, digital marketing, and AI-powered business solutions.
            </p>
            <p className="text-emerald-400 mt-4 relative z-10 font-medium">
              Please fill out this form with your requirements.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* SECTION 1: Client Information */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4 mb-6">1. Client Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Full Name <span className="text-emerald-400">*</span></label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Business Name <span className="text-emerald-400">*</span></label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Contact Number <span className="text-emerald-400">*</span></label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">WhatsApp Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="Same as above" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address <span className="text-emerald-400">*</span></label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-2">Business Location</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600" placeholder="City, State" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-400 mb-3">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-4">
                  {['Call', 'WhatsApp', 'Email'].map((method) => (
                    <label key={method} className="flex items-center space-x-2 cursor-pointer group">
                      <input type="radio" name="contactMethod" value={method} className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                      <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Business Details */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4 mb-6">2. Business Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">What type of business do you have? <span className="text-emerald-400">*</span></label>
                <select required className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white appearance-none">
                  <option value="">Select an option</option>
                  <option value="Restaurant/Cafe">Restaurant/Cafe</option>
                  <option value="Gym/Fitness">Gym/Fitness</option>
                  <option value="Salon/Beauty">Salon/Beauty</option>
                  <option value="Clothing/Fashion">Clothing/Fashion</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Coaching/Education">Coaching/Education</option>
                  <option value="Travel Agency">Travel Agency</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Personal Brand">Personal Brand</option>
                  <option value="Startup">Startup</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Describe your business briefly</label>
                <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600 resize-none" placeholder="We sell premium coffee and baked goods..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">Do you currently have a website?</label>
                <div className="flex gap-6">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input type="radio" name="hasWebsite" value="Yes" className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                    <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input type="radio" name="hasWebsite" value="No" className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                    <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Social Media Profile Links</label>
                <textarea rows="2" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600 resize-none" placeholder="Instagram: @..., Facebook: ..."></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 3: Services Required */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4 mb-6">3. Services Required</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-4">Which services are you interested in?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Website Development', 'E-commerce Website', 'Social Media Management',
                    'Instagram Growth', 'Logo Design', 'Branding',
                    'SEO Optimization', 'Google Business Setup', 'Content Creation',
                    'Reel/Video Editing', 'AI Chatbot Integration', 'Paid Advertising', 'Other'
                  ].map((service) => (
                    <label key={service} className="flex items-start space-x-3 cursor-pointer group">
                      <div className="flex items-center h-5">
                        <input type="checkbox" value={service} className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 rounded focus:ring-emerald-500 mt-0.5" />
                      </div>
                      <span className="text-slate-300 text-sm group-hover:text-emerald-400 transition-colors">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-4">What is your main business goal?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Increase Customers', 'Increase Sales', 'Better Online Presence',
                    'Brand Awareness', 'Generate Leads', 'Online Orders/Bookings', 'Customer Support Automation'
                  ].map((goal) => (
                    <label key={goal} className="flex items-start space-x-3 cursor-pointer group">
                      <div className="flex items-center h-5">
                        <input type="checkbox" value={goal} className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 rounded focus:ring-emerald-500 mt-0.5" />
                      </div>
                      <span className="text-slate-300 text-sm group-hover:text-emerald-400 transition-colors">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Project Requirements */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4 mb-6">4. Project Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Explain your project requirements in detail</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600 resize-none" placeholder="I need a 5-page website with a booking system..."></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Do you have any reference websites or pages?</label>
                <textarea rows="2" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600 resize-none" placeholder="Example URLs..."></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-3">Expected project completion timeline</label>
                  <div className="space-y-3">
                    {['Urgent (1–3 Days)', 'Within 1 Week', 'Within 1 Month', 'Flexible'].map((time) => (
                      <label key={time} className="flex items-center space-x-2 cursor-pointer group">
                        <input type="radio" name="timeline" value={time} className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                        <span className="text-slate-300 text-sm group-hover:text-emerald-400 transition-colors">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Estimated Budget</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white appearance-none">
                    <option value="">Select budget range</option>
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000</option>
                    <option value="₹15,000 – ₹50,000">₹15,000 – ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: Final Information */}
          <div className="bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-800">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-4 mb-6">5. Final Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">How did you hear about Apna Business?</label>
                <div className="flex flex-wrap gap-4">
                  {['Instagram', 'Facebook', 'WhatsApp', 'Google', 'Referral', 'Other'].map((source) => (
                    <label key={source} className="flex items-center space-x-2 cursor-pointer group">
                      <input type="radio" name="source" value={source} className="w-4 h-4 text-emerald-500 bg-slate-950 border-slate-800 focus:ring-emerald-500" />
                      <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">{source}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Additional Notes or Requirements</label>
                <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-slate-950 text-white placeholder-slate-600 resize-none" placeholder="Any other details..."></textarea>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center text-lg"
            >
              Submit Inquiry
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
