
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

interface FooterProps {
  isLightMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLightMode }) => {
  const socialIcons = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Twitter', icon: 't' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'Instagram', icon: 'ig' }
  ];

  const footerLinks = {
    Services: [
      'Custom Software',
      'Mobile Apps',
      'Web Applications',
      'UI/UX Design',
      'Digital Marketing',
      'E-Commerce'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Blog',
      'Press Kit'
    ]
  };

  const contactInfo = [
    { 
      type: 'email', 
      value: 'info@pmsgraphix.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002-2z" />
        </svg>
      )
    },
    { 
      type: 'phone', 
      value: '+92 300 1234567',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    { 
      type: 'location', 
      value: 'Lahore, Pakistan',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
<<<<<<< HEAD
    <footer className={`relative w-full pt-20 pb-10 px-6 md:px-12 border-t transition-colors duration-700 ${
      isLightMode ? 'bg-white border-[#0F172A]/5' : 'bg-[#0A0A0A] border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b ${isLightMode ? 'border-[#0F172A]/5' : 'border-white/5'}`}>
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-8 cursor-pointer group">
              <div className="relative flex flex-col leading-none">
                <span className={`text-[10px] font-black ml-auto -mb-1 tracking-tighter transition-colors duration-700 ${isLightMode ? 'text-[#0F172A]' : 'text-white'}`}>PMS</span>
                <div className="flex items-center">
                  <span className="text-3xl font-black italic tracking-tighter" style={{ color: COLORS.primary }}>Graphix</span>
                </div>
              </div>
            </div>
            <p className={`text-[15px] leading-relaxed mb-8 max-w-sm transition-colors duration-700 ${
=======
    <footer className={`relative w-full pt-16 pb-8 px-6 md:px-12 border-t transition-colors duration-700 ${
      isLightMode ? 'bg-white border-[#0F172A]/5' : 'bg-[#0A0A0A] border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b ${isLightMode ? 'border-[#0F172A]/5' : 'border-white/5'}`}>
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group">
              <div className="relative flex flex-col leading-none">
                <span className={`text-[9px] font-black ml-auto -mb-1 tracking-tighter transition-colors duration-700 ${isLightMode ? 'text-[#0F172A]' : 'text-white'}`}>PMS</span>
                <div className="flex items-center">
                  <span className="text-2xl font-black italic tracking-tighter" style={{ color: COLORS.primary }}>Graphix</span>
                </div>
              </div>
            </div>
            <p className={`text-sm leading-relaxed mb-6 max-w-sm transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
              isLightMode ? 'text-[#475569]' : 'text-white/60'
            }`}>
              Transforming ideas into exceptional digital experiences through premium software development, design, and marketing solutions.
            </p>
<<<<<<< HEAD
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.15, backgroundColor: '#E03E25', boxShadow: '0 10px 20px -5px rgba(224, 62, 37, 0.4)' }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm transition-all duration-150 shadow-lg"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {social.icon === 'f' && <span className="text-lg">f</span>}
                  {social.icon === 't' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  )}
                  {social.icon === 'in' && <span className="font-bold">in</span>}
                  {social.icon === 'ig' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
=======
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, backgroundColor: '#E03E25' }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-xs transition-all duration-150 shadow-md"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {social.icon === 'f' && <span className="text-base">f</span>}
                  {social.icon === 't' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  )}
                  {social.icon === 'in' && <span className="font-bold">in</span>}
                  {social.icon === 'ig' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
>>>>>>> 719eadd (Initial commit)
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
<<<<<<< HEAD
              <h4 className={`text-lg font-black mb-8 transition-colors duration-700 ${
=======
              <h4 className={`text-base font-black mb-6 transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
                isLightMode ? 'text-[#0F172A]' : 'text-white'
              }`}>
                {title}
              </h4>
<<<<<<< HEAD
              <ul className="space-y-4">
=======
              <ul className="space-y-3">
>>>>>>> 719eadd (Initial commit)
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
<<<<<<< HEAD
                      whileHover={{ x: 5, color: COLORS.primary }}
                      className={`text-[15px] font-bold transition-all duration-150 block ${
=======
                      whileHover={{ x: 4, color: COLORS.primary }}
                      className={`text-sm font-bold transition-all duration-150 block ${
>>>>>>> 719eadd (Initial commit)
                        isLightMode ? 'text-[#64748B] hover:text-[#FF4D30]' : 'text-white/40'
                      }`}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us Section */}
          <div className="lg:col-span-4">
<<<<<<< HEAD
            <h4 className={`text-lg font-black mb-8 transition-colors duration-700 ${
=======
            <h4 className={`text-base font-black mb-6 transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
              isLightMode ? 'text-[#0F172A]' : 'text-white'
            }`}>
              Contact Us
            </h4>
<<<<<<< HEAD
            <ul className="space-y-6">
              {contactInfo.map((info) => (
                <li key={info.type} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`p-2.5 rounded-xl transition-all duration-150 ${
                    isLightMode ? 'bg-[#FF4D30]/5 text-[#FF4D30]' : 'bg-white/5 text-[#FF4D30]'
                  } group-hover:scale-110 shadow-sm`}>
                    {info.icon}
                  </div>
                  <span className={`text-[15px] font-bold transition-colors duration-150 ${
=======
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.type} className="flex items-center gap-3 group cursor-pointer">
                  <div className={`p-2 rounded-lg transition-all duration-150 ${
                    isLightMode ? 'bg-[#FF4D30]/5 text-[#FF4D30]' : 'bg-white/5 text-[#FF4D30]'
                  } group-hover:scale-105 shadow-sm`}>
                    {info.icon}
                  </div>
                  <span className={`text-sm font-bold transition-colors duration-150 ${
>>>>>>> 719eadd (Initial commit)
                    isLightMode ? 'text-[#334155] group-hover:text-[#0F172A]' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {info.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
<<<<<<< HEAD
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className={`text-sm font-bold transition-colors duration-700 ${
=======
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-xs font-bold transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
            isLightMode ? 'text-[#94A3B8]' : 'text-white/30'
          }`}>
            © 2026 PMS Graphix. All rights reserved.
          </p>
<<<<<<< HEAD
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['Contact Us', 'Support', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className={`text-sm font-bold transition-all duration-150 hover:text-[#FF4D30] ${
=======
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className={`text-xs font-bold transition-all duration-150 hover:text-[#FF4D30] ${
>>>>>>> 719eadd (Initial commit)
                  isLightMode ? 'text-[#94A3B8]' : 'text-white/30'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
