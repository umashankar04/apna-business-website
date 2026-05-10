import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-dark py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <RouterLink
            to="/"
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img src={logo} alt="Apna Business Logo" className="h-10 w-auto" />
          </RouterLink>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-slate-300 hover:text-emerald-400 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
            <RouterLink
              to="/inquiry"
              className="bg-emerald-500 text-slate-950 px-6 py-2.5 rounded-full font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              Get Started
            </RouterLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 h-12 w-12 flex items-center justify-center -mr-2"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 w-full shadow-xl border-t border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-slate-300 font-medium hover:bg-slate-800 hover:text-emerald-400 rounded-md cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
            <RouterLink
              to="/inquiry"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-emerald-500 text-slate-950 px-6 py-3 rounded-full font-bold shadow-md shadow-emerald-500/20 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
