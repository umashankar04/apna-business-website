import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar Singh",
    role: "Founder, Singh Brothers Trading",
    content:
      "Bohot mast kaam kiya hai Apna Business team ne. Hamara online presence bilkul badal gaya. Pehle sirf local customers the, ab toh pan-India orders aa rahe hain. Bohot achha partnership hai yahan!",
    image:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Neha Sharma",
    role: "Director, Maharaja Restaurant & Cafe",
    content:
      "Bilkul professional team hai. Unhone hamare restaurant ki website banai aur social media handle bhi sambhaal rahe hain. Revenue mein 250% growth hua ab tak. Sabko recommend karti hoon yeh company ko!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Vikram Patel",
    role: "Owner, VR Fitness Studio",
    content:
      "Very good service yaar. WhatsApp automation implement kiya unhone, ab lead follow-up ka tension nahi raha. 24/7 chatbot chalti hai aur paise bhi save ho rahe hain. Trustworthy team hai, bilkul honest quotes dete hain.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Priya Gupta",
    role: "Founder, Glamour Boutique Delhi",
    content:
      "Shukriya yeh team ka! Hamare small boutique ko unhone ek proper brand banwa diya. Logo design, website, Instagram strategy - sab kuch. Ab toh franchise ke offers aa rahe hain! Bohot affordable bhi the pricing mein.",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Suresh Reddy",
    role: "Managing Director, Tech Solutions Bangalore",
    content:
      "Fantastic work by Apna Business. Hamara B2B business ke liye SEO optimization kiya aur organic traffic triple ho gaya. Ekdum professional approach hai, har step mein updates dete hain aur doubt bhi clear karte hain.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80",
  },
  {
    name: "Anjali Verma",
    role: "Founder, Beauty & Wellness Spa",
    content:
      "Hamari spa business ko completely digital transform kiya hal mein. Online booking system install kiya, Google reviews manage kar rahe hain, aur video content bhi banate hain. Ab toh walk-ins drop hua, sab pre-booked customers hain! Salamat!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h4 className="text-emerald-500 font-semibold tracking-wider uppercase mb-2 md:mb-3 text-xs md:text-sm">
            भारतीय ग्राहक / Indian Success Stories
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            देशभर के बिज़नेसमैन का विश्वास
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Thousands of Indian entrepreneurs trust Apna Business for growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-lg relative"
            >
              <Quote className="absolute top-4 md:top-6 right-6 md:right-8 h-8 md:h-10 w-8 md:w-10 text-emerald-500/20" />
              <div className="flex text-emerald-500 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 md:h-5 w-4 md:w-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 md:mb-8 relative z-10 leading-relaxed text-sm md:text-base">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-3 md:mr-4 object-cover border-2 border-slate-800"
                  />
                )}
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-emerald-400 font-medium">
                    {testimonial.role}
                  </p>
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
