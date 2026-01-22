
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MISSION_VISION, COLORS } from '../constants';
import WaveBackground from './WaveBackground';

interface MissionVisionProps {
  isLightMode: boolean;
}

interface CardProps {
  item: typeof MISSION_VISION[0];
  index: number;
  isLightMode: boolean;
}

const textRevealVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Card: React.FC<CardProps> = ({ item, index, isLightMode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 1200, mass: 0.1 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
<<<<<<< HEAD
        scale: 1.1,
        borderColor: `${COLORS.primary}A0`,
        y: -12,
=======
        scale: 1.05,
        borderColor: `${COLORS.primary}A0`,
        y: -8,
>>>>>>> 719eadd (Initial commit)
      }}
      transition={{ duration: 0.15, ease: "circOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: useTransform(
          [mouseXSpring, mouseYSpring],
          ([mx, my]: any) => isLightMode 
<<<<<<< HEAD
            ? `0 50px 100px rgba(0,0,0,0.15), ${mx * 40}px ${my * 40}px 70px ${COLORS.primary}20` 
            : `0 70px 140px rgba(0,0,0,0.8), ${mx * 50}px ${my * 50}px 100px ${COLORS.primary}40`
        ),
      }}
      className={`relative backdrop-blur-3xl border rounded-[3.5rem] md:rounded-[4.5rem] p-10 md:p-14 lg:p-20 transition-all duration-150 group cursor-pointer overflow-hidden ${
=======
            ? `0 30px 60px rgba(0,0,0,0.1), ${mx * 30}px ${my * 30}px 50px ${COLORS.primary}20` 
            : `0 50px 100px rgba(0,0,0,0.8), ${mx * 40}px ${my * 40}px 80px ${COLORS.primary}40`
        ),
      }}
      className={`relative backdrop-blur-3xl border rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 lg:p-14 transition-all duration-150 group cursor-pointer overflow-hidden ${
>>>>>>> 719eadd (Initial commit)
        isLightMode 
          ? 'bg-white/80 border-black/5 hover:bg-white hover:border-black/20 shadow-2xl' 
          : 'bg-white/[0.04] border-white/10 hover:bg-[#FF4D30]/5 hover:border-white/20'
      }`}
    >
<<<<<<< HEAD
      <div style={{ transform: "translateZ(90px)" }} className="relative z-10">
        
        {/* Animated Icon Container */}
        <div className="relative mb-12 md:mb-16 w-28 h-28 md:w-32 md:h-32">
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: isLightMode ? [0.1, 0.25, 0.1] : [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-30%] rounded-full blur-3xl"
            style={{ backgroundColor: COLORS.primary }}
          />
          <div 
            className="relative w-full h-full rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-150 group-hover:scale-115 group-hover:rotate-12"
            style={{ backgroundColor: COLORS.primary }}
          >
            {item.icon === 'target' ? (
              <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
=======
      <div style={{ transform: "translateZ(60px)" }} className="relative z-10">
        
        {/* Animated Icon Container */}
        <div className="relative mb-8 md:mb-10 w-20 h-20 md:w-24 md:h-24">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: isLightMode ? [0.1, 0.2, 0.1] : [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-20%] rounded-full blur-2xl"
            style={{ backgroundColor: COLORS.primary }}
          />
          <div 
            className="relative w-full h-full rounded-[1.8rem] flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-150 group-hover:scale-110 group-hover:rotate-6"
            style={{ backgroundColor: COLORS.primary }}
          >
            {item.icon === 'target' ? (
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
>>>>>>> 719eadd (Initial commit)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </div>
        </div>

<<<<<<< HEAD
        <h3 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-none transition-colors duration-150 group-hover:text-[#FF4D30] ${isLightMode ? 'text-black' : 'text-white'}`}>
          {item.title}
        </h3>
        
        <p className={`text-xl md:text-2xl leading-relaxed mb-14 font-medium max-w-xl transition-colors duration-150 ${isLightMode ? 'text-black/60 group-hover:text-black' : 'text-white/50 group-hover:text-white'}`}>
          {item.description}
        </p>

        <div className="space-y-6">
          {item.points.map((point, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-6 group/item"
=======
        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-none transition-colors duration-150 group-hover:text-[#FF4D30] ${isLightMode ? 'text-black' : 'text-white'}`}>
          {item.title}
        </h3>
        
        <p className={`text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-lg transition-colors duration-150 ${isLightMode ? 'text-black/60 group-hover:text-black' : 'text-white/50 group-hover:text-white'}`}>
          {item.description}
        </p>

        <div className="space-y-4">
          {item.points.map((point, i) => (
            <motion.div 
              key={i}
              className="flex items-center gap-4 group/item"
>>>>>>> 719eadd (Initial commit)
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <div className="w-4 h-4 rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
=======
              <div className="w-3 h-3 rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
>>>>>>> 719eadd (Initial commit)
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                  className="absolute inset-0 rounded-full" 
                  style={{ backgroundColor: COLORS.primary }} 
                />
<<<<<<< HEAD
                <div className="w-2.5 h-2.5 rounded-full relative z-10 shadow-[0_0_10px_rgba(255,77,48,0.5)]" style={{ backgroundColor: COLORS.primary }} />
=======
                <div className="w-2 h-2 rounded-full relative z-10 shadow-[0_0_10px_rgba(255,77,48,0.5)]" style={{ backgroundColor: COLORS.primary }} />
>>>>>>> 719eadd (Initial commit)
              </div>
              <span className="overflow-hidden inline-block">
                <motion.span 
                  custom={i}
                  variants={textRevealVariants}
<<<<<<< HEAD
                  className={`text-lg md:text-xl font-bold transition-all duration-150 group-hover/item:translate-x-3 group-hover/item:text-[#FF4D30] block ${isLightMode ? 'text-black/40' : 'text-white/40'}`}
=======
                  className={`text-base md:text-lg font-bold transition-all duration-150 group-hover/item:translate-x-2 group-hover/item:text-[#FF4D30] block ${isLightMode ? 'text-black/40' : 'text-white/40'}`}
>>>>>>> 719eadd (Initial commit)
                >
                  {point}
                </motion.span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-100 pointer-events-none"
        style={{ 
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]: any) => `radial-gradient(circle at ${50 + mx * 100}% ${50 + my * 100}%, ${COLORS.primary} 0%, transparent 60%)`
          )
        }} 
      />
    </motion.div>
  );
};

const MissionVision: React.FC<MissionVisionProps> = ({ isLightMode }) => {
  return (
<<<<<<< HEAD
    <section className={`relative w-full py-32 md:py-48 px-6 md:px-12 transition-colors duration-700 perspective-2000 ${isLightMode ? 'bg-[#FAFBFF]' : 'bg-black'}`}>
      <WaveBackground isLightMode={isLightMode} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
=======
    <section className={`relative w-full py-20 md:py-28 px-6 md:px-12 transition-colors duration-700 perspective-2000 ${isLightMode ? 'bg-[#FAFBFF]' : 'bg-black'}`}>
      <WaveBackground isLightMode={isLightMode} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
>>>>>>> 719eadd (Initial commit)
          {MISSION_VISION.map((item, index) => (
            <Card key={item.id} item={item} index={index} isLightMode={isLightMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
