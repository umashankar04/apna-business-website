import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  buildAiImageUrl,
  useAiImageRotation,
} from "../hooks/useAiImageRotation";

const projects = [
  {
    title: "Gourmet Restaurant",
    category: "Website Development",
    prompt:
      "modern gourmet restaurant interior with elegant lighting and digital growth branding, premium lifestyle photo",
  },
  {
    title: "Titan Fitness Gym",
    category: "Branding & Social Media",
    prompt:
      "high energy fitness gym branding scene, modern neon workout space, social media campaign aesthetic",
  },
  {
    title: "Luxury Real Estate",
    category: "Platform Development",
    prompt:
      "luxury real estate property showcase, sleek glass architecture, premium platform presentation",
  },
  {
    title: "Summer Fashion Campaign",
    category: "Digital Marketing",
    desc: "Full-funnel strategy for a seasonal clothing release.",
    prompt:
      "summer fashion campaign editorial shoot with bright seasonal clothing, premium digital marketing style",
  },
];

const Portfolio = () => {
  const tick = useAiImageRotation();

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-emerald-500 font-semibold tracking-wider uppercase mb-2 md:mb-3 text-xs md:text-sm">
              Our Portfolio
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Featured Success Stories
            </h2>
            <p className="text-base sm:text-lg text-slate-400">
              Explore how we've helped other startups and businesses dominate
              their market.
            </p>
          </div>
          <button className="flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group whitespace-nowrap min-h-[44px] md:min-h-auto">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800">
                <img
                  src={buildAiImageUrl(
                    project.prompt,
                    1000,
                    750,
                    tick + index + 41,
                  )}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-emerald-500/20 text-emerald-300 backdrop-blur-md rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4 border border-emerald-500/30">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm md:text-base">
                  {project.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-400 font-medium hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-200"
                >
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
