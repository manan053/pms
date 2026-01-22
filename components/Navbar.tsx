
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS } from '../constants';

interface NavbarProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const SERVICES_DATA = [
  {
    title: 'Software',
    desc: 'Custom software solutions tailored to your needs...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Mobile',
    desc: 'Native and cross-platform mobile applications...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Web',
    desc: 'Modern, responsive web applications built for scale...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
      </svg>
    ),
  },
  {
    title: 'AI',
    desc: 'Intelligent solutions powered by artificial intelligence...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'UI/UX',
    desc: 'Beautiful, intuitive user interfaces and experiences...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Graphics',
    desc: 'Complete branding solutions that establish identity...',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

const Navbar: React.FC<NavbarProps> = ({ isLightMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'About', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${
          scrolled 
            ? (isLightMode ? 'bg-white/60 backdrop-blur-2xl border-b border-[#0F172A]/5' : 'bg-black/60 backdrop-blur-xl border-b border-white/10') 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex flex-col leading-none">
              <span className={`text-[10px] font-black ml-auto -mb-1 tracking-tighter transition-colors duration-300 ${isLightMode ? 'text-[#0F172A]' : 'text-white'}`}>PMS</span>
              <div className="flex items-center">
                 <span className="text-3xl font-black italic tracking-tighter transition-colors duration-300" style={{ color: COLORS.primary }}>
                  Graphix
                </span>
                <div className="ml-1 relative">
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:rotate-12">
                     <path d="M12 2C7.58172 2 4 5.58172 4 10V22C4 26.4183 7.58172 30 12 30C16.4183 30 20 26.4183 20 22V10C20 5.58172 16.4183 20 12 2Z" fill={isLightMode ? "#1e293b" : "#999"} fillOpacity="0.8"/>
                     <circle cx="12" cy="10" r="2" fill="white" />
                     <path d="M12 2V8M12 2C15 2 18 4 20 8" stroke={COLORS.primary} strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.name);
                  if (link.name === 'Services') setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  if (link.name === 'Services') setIsServicesOpen(false);
                }}
              >
                <a
                  href={link.href}
                  className={`relative group flex items-center gap-1 text-[15px] font-bold transition-colors duration-150 py-1 ${
                    isLightMode 
                      ? 'text-[#0F172A]/70 hover:text-[#FF4D30]' 
                      : 'text-white/90 hover:text-[#FF4D30]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <motion.svg 
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      className={`w-4 h-4 transition-colors duration-150 ${
                        hoveredLink === link.name ? 'text-[#FF4D30]' : (isLightMode ? 'text-[#0F172A]/20' : 'text-white/40')
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                  {/* Underline Effect - Snappier */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2.5px] bg-[#FF4D30]"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredLink === link.name ? '100%' : 0 }}
                    transition={{ duration: 0.15, ease: "circOut" }}
                  />
                </a>

                {/* Services Dropdown Card */}
                {link.name === 'Services' && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "circOut" }}
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px] z-[110] pointer-events-auto`}
                      >
                        <div 
                          className={`rounded-[2rem] border overflow-hidden shadow-2xl ${
                            isLightMode 
                              ? 'bg-white border-black/5' 
                              : 'bg-[#0D0D0D] border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]'
                          }`}
                        >
                          <div className="grid grid-cols-2 p-3">
                            {SERVICES_DATA.map((service, idx) => (
                              <motion.div
                                key={service.title}
                                whileHover={{ scale: 1.03 }}
                                className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-colors duration-150 ${
                                  isLightMode ? 'hover:bg-black/5' : 'hover:bg-white/5'
                                }`}
                              >
                                <div className={`mt-1 p-2 rounded-xl transition-transform duration-150 group-hover:scale-110 ${isLightMode ? 'bg-black/5 text-black' : 'bg-white/5 text-[#FF4D30]'}`}>
                                  {service.icon}
                                </div>
                                <div className="flex flex-col">
                                  <span className={`text-lg font-bold transition-colors duration-150 ${isLightMode ? 'text-black' : 'text-white group-hover:text-[#FF4D30]'}`}>
                                    {service.title}
                                  </span>
                                  <p className={`text-xs leading-relaxed mt-1 line-clamp-2 ${isLightMode ? 'text-black/50' : 'text-white/40'}`}>
                                    {service.desc}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Dropdown Footer */}
                          <div className={`p-5 text-center border-t flex items-center justify-center gap-2 group/footer cursor-pointer transition-colors duration-150 ${
                            isLightMode ? 'bg-gray-50/50 border-black/5' : 'bg-white/[0.02] border-white/5'
                          }`}>
                            <span className="text-[#FF4D30] font-bold text-sm">View All Services</span>
                            <svg className="w-4 h-4 text-[#FF4D30] transition-transform duration-150 group-hover/footer:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all group border hidden sm:flex ${
                isLightMode 
                  ? 'bg-[#0F172A]/5 border-[#0F172A]/10 text-[#0F172A] hover:bg-[#0F172A]/10' 
                  : 'bg-[#FF4D30]/10 border border-[#FF4D30]/20 text-[#FF4D30] hover:bg-[#FF4D30]/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {isLightMode ? (
                  <motion.svg 
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </motion.svg>
                ) : (
                  <motion.svg 
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: isLightMode ? `0 15px 30px ${COLORS.primary}40` : `0 15px 35px ${COLORS.primary}60` }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-8 py-3.5 rounded-full font-bold text-[15px] text-white transition-all duration-150"
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.primary}, #FF7B54)`,
              }}
            >
              Get a Quote
            </motion.button>

            {/* Mobile Menu Icon Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-150 md:hidden ${isLightMode ? 'text-[#0F172A] hover:bg-[#0F172A]/5' : 'text-white hover:bg-white/10'}`}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className={`fixed inset-0 z-[200] flex flex-col p-8 md:hidden overflow-hidden ${
              isLightMode ? 'bg-white' : 'bg-black'
            }`}
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between mb-16">
              <div className="relative flex flex-col leading-none">
                <span className={`text-[10px] font-black ml-auto -mb-1 tracking-tighter ${isLightMode ? 'text-[#0F172A]' : 'text-white'}`}>PMS</span>
                <span className="text-2xl font-black italic tracking-tighter" style={{ color: COLORS.primary }}>Graphix</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className={`p-3 rounded-full transition-all border ${
                    isLightMode 
                      ? 'bg-[#0F172A]/5 border-[#0F172A]/10 text-[#0F172A]' 
                      : 'bg-[#FF4D30]/10 border border-[#FF4D30]/20 text-[#FF4D30]'
                  }`}
                >
                  {isLightMode ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  )}
                </button>
                
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 rounded-full ${isLightMode ? 'bg-black/5 text-black' : 'bg-white/10 text-white'}`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 flex-1 justify-center overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <motion.a
                    href={link.href}
                    onClick={() => {
                      if (!link.hasDropdown) setIsMobileMenuOpen(false);
                    }}
                    className={`text-4xl font-black tracking-tight flex items-center justify-between transition-colors duration-200 ${
                      isLightMode ? 'text-[#0F172A] hover:text-[#FF4D30]' : 'text-white hover:text-[#FF4D30]'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <span className="text-xl opacity-30">↓</span>
                    )}
                  </motion.a>
                  
                  {link.hasDropdown && (
                    <div className="grid grid-cols-1 gap-2 pl-4 mt-2">
                      {SERVICES_DATA.map(s => (
                        <a 
                          key={s.title}
                          href="#"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg font-bold transition-colors duration-150 ${isLightMode ? 'text-black/50 hover:text-[#FF4D30]' : 'text-white/40 hover:text-[#FF4D30]'}`}
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer in Overlay */}
            <div className="mt-auto pt-8 border-t border-black/5">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 rounded-2xl font-black text-xl text-white mb-6"
                style={{ background: COLORS.primary }}
              >
                Get a Quote
              </motion.button>
              
              <div className={`flex justify-between items-center text-xs font-bold uppercase tracking-[0.2em] ${
                isLightMode ? 'text-black/30' : 'text-white/30'
              }`}>
                <span>© 2024 Graphix</span>
                <div className="flex gap-4">
                  <span>TW</span>
                  <span>IG</span>
                  <span>LN</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
