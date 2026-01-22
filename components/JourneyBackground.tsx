
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

interface JourneyBackgroundProps {
  scrollProgress: any;
  isLightMode: boolean;
}

const JourneyBackground: React.FC<JourneyBackgroundProps> = ({ isLightMode }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-gradient-to-b from-white to-[#EDF2FF]' : 'bg-black'}`}>
      {/* Vertical Minimal Flow Beams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '-100%', x: `${10 + i * 20}%` }}
          animate={{ y: '200%' }}
          transition={{
            duration: 20 + i * 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          className="absolute w-[2px] h-[50vh] blur-[60px] pointer-events-none"
          style={{
            background: `linear-gradient(180deg, transparent, ${COLORS.primary}, transparent)`,
            opacity: isLightMode ? 0.08 : 0.2
          }}
        />
      ))}

      {/* Subtle Grid Dots */}
      <div 
        className={`absolute inset-0 opacity-[0.05] ${isLightMode ? 'invert' : ''}`}
        style={{ 
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className={`absolute inset-0 transition-opacity duration-700 ${isLightMode ? 'bg-gradient-to-b from-white to-transparent opacity-40' : 'bg-gradient-to-b from-black via-transparent to-black'}`} />
    </div>
  );
};

export default JourneyBackground;
