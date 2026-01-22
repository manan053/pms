
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { VALUES, COLORS } from '../constants';
import ValuesBackground from './ValuesBackground';

interface ValuesProps {
  isLightMode: boolean;
}

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const charVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring', damping: 15, stiffness: 200 } 
  }
};

const ValueCard: React.FC<{ item: typeof VALUES[0]; index: number; isLightMode: boolean }> = ({ item, index, isLightMode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d"
      }}
      className={`relative flex flex-col items-center p-10 md:p-12 rounded-3xl border transition-all duration-300 group text-center h-full cursor-pointer ${
        isLightMode 
          ? 'bg-white border-black/5 shadow-xl hover:shadow-2xl' 
          : 'bg-[#111111] border-white/5 hover:border-white/10 shadow-2xl'
      }`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center w-full relative z-10">
        {/* Icon Box as per image */}
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-300 group-hover:scale-110" 
          style={{ backgroundColor: COLORS.primary }}
        >
          <div className="text-white">
            {item.icon === 'excellence' && (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <circle cx="12" cy="12" r="6" strokeWidth={2} />
                <circle cx="12" cy="12" r="2" strokeWidth={2} />
              </svg>
            )}
            {item.icon === 'collaboration' && (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
            {item.icon === 'innovation' && (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
            {item.icon === 'integrity' && (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            )}
          </div>
        </div>
        
        <h3 className={`text-2xl font-black mb-4 transition-colors duration-200 ${isLightMode ? 'text-black' : 'text-white'}`}>
          {item.title}
        </h3>
        
        <p className={`text-base md:text-lg leading-relaxed font-medium transition-colors duration-200 ${isLightMode ? 'text-black/60' : 'text-white/50'}`}>
          {item.description}
        </p>
      </div>
      
      {/* Background Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none z-0" 
        style={{ 
          background: `radial-gradient(circle at center, ${COLORS.primary} 0%, transparent 70%)`
        }} 
      />
    </motion.div>
  );
};

const Values: React.FC<ValuesProps> = ({ isLightMode }) => {
  const title = "Our Values";
  return (
    <section className={`relative w-full py-32 md:py-48 px-6 md:px-12 overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-[#FAFBFF]' : 'bg-black'}`}>
      <ValuesBackground isLightMode={isLightMode} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div variants={titleContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24 md:mb-32">
          <motion.h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight flex justify-center flex-wrap gap-x-4 transition-colors duration-500 ${isLightMode ? 'text-black' : 'text-white'}`}>
            {title.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="flex">
                {word.split("").map((char, charIdx) => (
                  <motion.span key={charIdx} variants={charVariants} className="inline-block">{char}</motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }} 
            viewport={{ once: true }}
            className={`text-lg md:text-xl font-medium transition-colors duration-500 ${isLightMode ? 'text-black/60' : 'text-white/70'}`}
          >
            Principles that guide everything we do
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {VALUES.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} isLightMode={isLightMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
