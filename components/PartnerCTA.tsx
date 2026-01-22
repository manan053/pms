
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

interface PartnerCTAProps {
  isLightMode: boolean;
}

const PartnerCTA: React.FC<PartnerCTAProps> = ({ isLightMode }) => {
  return (
<<<<<<< HEAD
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full relative z-10">
=======
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl w-full relative z-10">
>>>>>>> 719eadd (Initial commit)
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
<<<<<<< HEAD
          className={`relative overflow-hidden rounded-[3rem] md:rounded-[4rem] border p-12 md:p-24 text-center transition-all duration-700 ${
            isLightMode 
              ? 'bg-white border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]' 
              : 'bg-black border-white/10 shadow-[0_0_80px_rgba(255,77,48,0.05)]'
=======
          className={`relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] border p-10 md:p-16 text-center transition-all duration-700 ${
            isLightMode 
              ? 'bg-white border-black/5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)]' 
              : 'bg-black border-white/10 shadow-[0_0_60px_rgba(255,77,48,0.05)]'
>>>>>>> 719eadd (Initial commit)
          }`}
        >
          {/* Subtle Inner Glow */}
          <div className={`absolute inset-0 pointer-events-none opacity-20 ${
            isLightMode 
              ? 'bg-[radial-gradient(circle_at_center,rgba(255,77,48,0.05),transparent_70%)]' 
              : 'bg-[radial-gradient(circle_at_center,rgba(255,77,48,0.1),transparent_70%)]'
          }`} />

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
<<<<<<< HEAD
            className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter transition-colors duration-700 ${
=======
            className={`text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
              isLightMode ? 'text-black' : 'text-white'
            }`}
          >
            Partner with <span style={{ color: COLORS.primary }}>Excellence</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
<<<<<<< HEAD
            className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-700 ${
=======
            className={`text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 leading-relaxed transition-colors duration-700 ${
>>>>>>> 719eadd (Initial commit)
              isLightMode ? 'text-black/60' : 'text-white/60'
            }`}
          >
            Join hundreds of satisfied clients who have transformed their businesses with our bespoke digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
<<<<<<< HEAD
              whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${COLORS.primary}40` }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full font-black text-xl text-white relative group overflow-hidden"
=======
              whileHover={{ scale: 1.05, boxShadow: `0 15px 30px ${COLORS.primary}40` }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-black text-lg text-white relative group overflow-hidden"
>>>>>>> 719eadd (Initial commit)
              style={{ 
                background: `linear-gradient(135deg, ${COLORS.primary}, #FF7B54)`,
              }}
            >
              <span className="relative z-10">Start Your Project</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
<<<<<<< HEAD
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 blur-[120px] pointer-events-none transition-opacity duration-1000 ${
=======
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 blur-[100px] pointer-events-none transition-opacity duration-1000 ${
>>>>>>> 719eadd (Initial commit)
        isLightMode ? 'bg-[#FF4D30]/5 opacity-100' : 'bg-[#FF4D30]/10 opacity-100'
      }`} />
    </section>
  );
};

export default PartnerCTA;
