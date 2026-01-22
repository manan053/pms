
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../constants';

interface Background3DProps {
  isLightMode: boolean;
}

const Background3D: React.FC<Background3DProps> = ({ isLightMode }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden transition-colors duration-1000 ${isLightMode ? 'bg-gradient-to-br from-[#F0F4FF] to-[#FFF9F8]' : 'bg-black'}`}>
      {/* Minimal Flow Beams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%', y: `${20 + i * 25}%`, rotate: -15 }}
          animate={{ x: '150%' }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          className="absolute w-full h-[150px] blur-[100px] pointer-events-none opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? COLORS.primary : (isLightMode ? '#3B82F6' : '#444')}, transparent)`,
            opacity: isLightMode ? 0.08 : 0.12
          }}
        />
      ))}

      {/* Subtle Mesh/Grid Pattern */}
      <div 
        className={`absolute inset-0 pointer-events-none opacity-[0.03] ${isLightMode ? 'invert' : ''}`}
        style={{ 
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Cinematic Overlays */}
      <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
        isLightMode 
          ? 'bg-gradient-to-tr from-white/40 to-white/40' 
          : 'bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]'
      }`} />
    </div>
  );
};

export default Background3D;
