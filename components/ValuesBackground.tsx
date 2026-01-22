
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

const ValuesBackground: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-gradient-to-t from-[#F5F8FF] to-[#FFFFFF]' : 'bg-black'}`}>
      {/* Horizontal Minimal Flow Waves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-150%', y: `${15 + i * 25}%` }}
          animate={{ x: '150%' }}
          transition={{
            duration: 25 + i * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 4
          }}
          className="absolute w-full h-[200px] blur-[140px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? COLORS.primary : '#3B82F6'}, transparent)`,
            opacity: isLightMode ? 0.04 : 0.1
          }}
        />
      ))}
      
      {/* Deep Atmosphere Gradient */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isLightMode ? 'bg-gradient-to-t from-white/60 to-transparent' : 'bg-gradient-to-t from-black via-transparent to-black opacity-100'}`} />
    </div>
  );
};

export default ValuesBackground;
