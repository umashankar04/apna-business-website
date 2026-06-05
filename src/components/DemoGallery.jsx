import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Sparkles, ArrowUpRight } from "lucide-react";

const demos = [
  {
    title: "Local Business Launch",
    label: "Flow Menu Experience",
    desc: "Smooth navigation, bold sections, and a conversion-first homepage flow for service brands.",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
  },
  {
    title: "Product Showcase",
    label: "Pixel Transition Demo",
    desc: "Interactive cards with a pixel-style reveal that makes the gallery feel tactile and premium.",
    image:
      "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
  },
  {
    title: "AI Service Studio",
    label: "Slash Cursor Motion",
    desc: "Desktop-only cursor treatment that adds a sharp, editorial feel without blocking usability.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
  },
];

const DemoGallery = () => {
  return (
    <section
      id="gallery"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.09),transparent_28%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              <Sparkles className="h-4 w-4" />
              Demo Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Motion-first layouts for a sharper first impression
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              This section shows the flow menu, pixel transition, and slash
              cursor ideas working together as one visual system.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-400 hover:text-white"
          >
            Explore next steps
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {demos.map((demo, index) => (
            <motion.article
              key={demo.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group pixel-transition rounded-3xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-[0_18px_60px_rgba(2,6,23,0.4)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-90" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 pixel-pop">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                      <PlayCircle className="h-3.5 w-3.5" />
                      {demo.label}
                    </span>
                    <span className="text-xs text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {demo.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoGallery;
