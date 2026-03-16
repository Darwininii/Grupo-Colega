import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiShieldCheck, HiPhone } from 'react-icons/hi';
import logo from '../assets/Colega-240-×-240-px-1.png';

const navLinks = [
  { label: 'Inicio', href: '#inicio', icon: HiHome },
  { label: 'Servicios', href: '#servicios', icon: HiShieldCheck },
  { label: 'Atención', href: '#atencion', icon: HiPhone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(link => link.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Detects when section enters top 40% of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full h-20 md:h-28 pointer-events-none">
      <nav
        className={`pointer-events-auto absolute left-0 right-0 mx-auto transition-all duration-500 ease-in-out border-b transform-gpu top-0 will-change-transform ${
          scrolled 
            ? 'translate-y-4 w-fit max-w-[95%] rounded-full bg-navy-1000/95 backdrop-blur-xl border-white/10 shadow-2xl px-2' 
            : 'translate-y-0 w-full rounded-none bg-navy-900 border-transparent shadow-md'
        }`}
      >
        {/* Gradient overlay — fades out on scroll */}
        <div
          className={`absolute inset-0 bg-transparent transition-opacity duration-500 rounded-[inherit] ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className={`relative z-10 transition-all duration-500 ${
          scrolled ? 'px-1 md:px-4' : 'max-w-7xl mx-auto px-4 md:px-8'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-16 md:h-18 gap-2 lg:gap-4' : 'h-20 md:h-28'
          }`}>
            {/* Nombre "GRUPO COLEGA" */}
            <div className="flex flex-1 justify-center">
              <a href="#inicio" className="group">
                <h1 className={`text-white font-heading font-extrabold tracking-wider uppercase leading-tight text-right drop-shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 ${
                  scrolled 
                    ? 'text-sm md:text-lg lg:text-xl' 
                    : 'text-lg md:text-2xl lg:text-4xl translate-y-3 md:translate-y-5 lg:translate-y-6'
                }`}>
                  GRUPO
                  <br />
                  COLEGA
                </h1>
              </a>
            </div>

            {/* Logo central */}
            <div className={`relative shrink-0 transition-transform duration-500 ease-in-out ${
              scrolled ? 'mx-3 lg:mx-4' : 'mx-4 md:mx-10 lg:mx-16 translate-y-3 md:translate-y-5 lg:translate-y-6'
            }`}>
              <a href="#inicio" className="block group">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
                  className={`rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ease-in-out border-4 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:scale-110 ${
                    scrolled ? 'w-12 h-12 md:w-16 md:h-16' : 'w-24 h-24 md:w-36 md:h-36'
                  }`}
                >
                  <img
                    src={logo}
                    alt="Grupo Colega Logo"
                    className={`object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] transition-all duration-500 ${
                      scrolled ? 'w-8 h-8 md:w-12 md:h-12' : 'w-20 h-20 md:w-30 md:h-30'
                    }`}
                  />
                </motion.div>
                {/* Glow ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-white/10 blur-xl transition-all duration-500 group-hover:bg-white/20 ${
                    scrolled ? 'scale-110 opacity-50' : 'scale-125 opacity-100'
                  }`}
                />
              </a>
            </div>

            {/* Links derecha */}
            <div className={`flex items-center transition-all duration-500 ${
              scrolled ? 'gap-1' : 'gap-1 md:gap-2 lg:gap-3'
            } flex-1 justify-start`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  className={`flex items-center gap-1 md:gap-2 transition-colors duration-300 font-bold text-[10px] md:text-xs lg:text-sm tracking-wide rounded-lg uppercase border ${
                    activeSection === link.href.substring(1)
                      ? 'bg-brand-500 border-brand-400 text-white shadow-lg shadow-brand-500/30'
                      : 'bg-white/5 border-white/10 text-white/90 hover:bg-white/15 hover:border-white/20'
                  } ${scrolled ? 'p-1.5 md:p-2' : 'px-2 py-1.5 md:px-4 md:py-2'}`}
                >
                  <link.icon className="text-sm md:text-base shrink-0" />
                  <span className={scrolled ? 'hidden' : 'hidden md:inline'}>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
