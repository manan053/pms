
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

const WaveBackground: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-gradient-to-tr from-[#F2F6FF] to-[#FFFFFF]' : 'bg-black'}`}>
      {/* Minimal Flow Streaks */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-120%', y: `${10 + i * 20}%`, rotate: 10 }}
          animate={{ x: '120%' }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3
          }}
          className="absolute w-[80%] h-[1px] blur-[40px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
            opacity: isLightMode ? 0.15 : 0.3
          }}
        />
      ))}

      {/* Deep Center Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[150px] opacity-5"
        style={{ background: `radial-gradient(circle, ${COLORS.primary} 0%, transparent 70%)` }}
      />
      
      {/* Layered Mesh Overlays */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isLightMode ? 'bg-gradient-to-b from-white/40 to-transparent' : 'bg-gradient-to-b from-black via-transparent to-black'}`} />
    </div>
  );
};

export default WaveBackground;
