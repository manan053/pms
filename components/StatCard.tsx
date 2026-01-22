
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Stat } from '../types';
import { COLORS } from '../constants';

interface StatCardProps {
  stat: Stat;
  index: number;
  isLightMode: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, isLightMode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ultra-fast spring for instant feedback
  const springConfig = { damping: 20, stiffness: 1200, mass: 0.1 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.12,
        borderColor: `${COLORS.primary}B0`,
        y: -8,
      }}
      transition={{ 
        duration: 0.15, // Reduced from 0.2
        delay: 0.05 * index,
        ease: "circOut" 
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: useTransform(
          [mouseXSpring, mouseYSpring],
          ([mx, my]: any) => isLightMode 
            ? `0 35px 70px rgba(0,0,0,0.15), ${mx * 35}px ${my * 35}px 50px ${COLORS.primary}30`
            : `0 50px 100px rgba(0,0,0,0.95), ${mx * 40}px ${my * 40}px 70px ${COLORS.primary}60`
        )
      }}
      className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-150 h-48 group cursor-pointer relative overflow-hidden ${
        isLightMode 
          ? 'bg-white/90 border-black/5 hover:bg-white' 
          : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.08]'
      }`}
    >
      {/* Premium Glass Swipe - Faster */}
      <motion.div 
        initial={{ x: '-150%' }}
        whileHover={{ x: '150%' }}
        transition={{ duration: 0.35, ease: "circIn" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      />
      
      <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center">
        <motion.span 
          className="text-5xl md:text-6xl font-black mb-2 relative z-10 block transition-transform duration-150 group-hover:scale-115"
          style={{ 
            color: COLORS.primary, 
            textShadow: isLightMode ? `0 4px 20px ${COLORS.primary}40` : `0 0 35px ${COLORS.primary}70` 
          }}
        >
          {stat.value}
        </motion.span>
        
        <span className={`text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-center transition-all duration-150 relative z-10 ${
          isLightMode ? 'text-black/40 group-hover:text-black group-hover:tracking-[0.45em]' : 'text-white/40 group-hover:text-white group-hover:tracking-[0.45em]'
        }`}>
          {stat.label}
        </span>
      </div>

      {/* Internal interactive hover glow - Instant opacity */}
      <motion.div 
        className="absolute inset-0 transition-opacity duration-100 pointer-events-none opacity-0 group-hover:opacity-40"
        style={{ 
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]: any) => `radial-gradient(circle at ${50 + mx * 100}% ${50 + my * 100}%, ${COLORS.primary} 0%, transparent 70%)`
          )
        }} 
      />
    </motion.div>
  );
};

export default StatCard;
