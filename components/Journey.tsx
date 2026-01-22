
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { JOURNEY, COLORS } from '../constants';
import JourneyBackground from './JourneyBackground';

interface JourneyProps {
  isLightMode: boolean;
}

interface JourneyItemProps {
  item: typeof JOURNEY[0];
  index: number;
  isLightMode: boolean;
}

const contentRevealVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({ 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1], // Quintic ease-out
      delay: 0.2 + (i * 0.1)
    } 
  })
};

const JourneyItem: React.FC<JourneyItemProps> = ({ item, index, isLightMode }) => {
  const isEven = index % 2 === 0;

  return (
<<<<<<< HEAD
    <div className="relative flex items-center justify-between w-full mb-8 md:mb-12 group">
=======
    <div className="relative flex items-center justify-between w-full mb-6 md:mb-8 group">
>>>>>>> 719eadd (Initial commit)
      {/* Year Bubble - Now at the "End" (Outer Edges) */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: isEven ? 45 : -45 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          type: 'spring', 
          damping: 20, 
          stiffness: 100, 
          delay: 0.1,
          duration: 1.2 
        }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className={`absolute z-20 w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-black text-xl md:text-2xl transition-transform duration-500 top-0 right-0 md:static md:translate-x-0 ${isEven ? 'md:order-3' : 'md:order-1'} ${isLightMode ? 'shadow-[0_15px_40px_rgba(255,77,48,0.4)] group-hover:scale-110' : 'shadow-[0_0_40px_rgba(255,77,48,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,77,48,0.8)]'}`}
=======
        className={`absolute z-20 w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl transition-transform duration-500 top-0 right-0 md:static md:translate-x-0 ${isEven ? 'md:order-3' : 'md:order-1'} ${isLightMode ? 'shadow-[0_15px_40px_rgba(255,77,48,0.4)] group-hover:scale-110' : 'shadow-[0_0_40px_rgba(255,77,48,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,77,48,0.8)]'}`}
>>>>>>> 719eadd (Initial commit)
        style={{ backgroundColor: COLORS.primary }}
      >
        {item.year}
      </motion.div>

      {/* Milestone Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100, y: 40, filter: 'blur(15px)' }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }}
        viewport={{ once: true, margin: "-10%" }}
<<<<<<< HEAD
        className={`w-full md:w-[42%] flex flex-col ${isEven ? 'md:order-2 md:pr-8' : 'md:order-2 md:pl-8'} pt-16 md:pt-0`}
      >
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`relative border backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 lg:p-12 transition-all duration-500 overflow-hidden ${isLightMode ? 'bg-white/80 border-black/5 hover:border-[#FF4D30]/30 shadow-2xl shadow-black/5' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-[#FF4D30]/40'}`}
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isLightMode ? 'bg-[radial-gradient(circle_at_top_right,rgba(255,77,48,0.08),transparent_70%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(255,77,48,0.15),transparent_70%)]'}`} />
          
          <div className="relative z-10 flex items-center gap-6 mb-4">
            <motion.div 
              custom={0}
              variants={contentRevealVariants}
              className={`p-3.5 rounded-2xl transition-all duration-500 ${isLightMode ? 'bg-black/5 text-[#FF4D30]' : 'bg-white/5 text-[#FF4D30]'} group-hover:bg-[#FF4D30] group-hover:text-white shadow-xl`}
            >
               {item.icon === 'rocket' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
               {item.icon === 'star' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
               {item.icon === 'users' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
               {item.icon === 'globe' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" /></svg>}
               {item.icon === 'cpu' && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
=======
        className={`w-full md:w-[42%] flex flex-col ${isEven ? 'md:order-2 md:pr-4' : 'md:order-2 md:pl-4'} pt-12 md:pt-0`}
      >
        <motion.div 
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`relative border backdrop-blur-3xl rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-10 transition-all duration-500 overflow-hidden ${isLightMode ? 'bg-white/80 border-black/5 hover:border-[#FF4D30]/30 shadow-2xl shadow-black/5' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-[#FF4D30]/40'}`}
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isLightMode ? 'bg-[radial-gradient(circle_at_top_right,rgba(255,77,48,0.08),transparent_70%)]' : 'bg-[radial-gradient(circle_at_top_right,rgba(255,77,48,0.15),transparent_70%)]'}`} />
          
          <div className="relative z-10 flex items-center gap-4 mb-3">
            <motion.div 
              custom={0}
              variants={contentRevealVariants}
              className={`p-3 rounded-xl transition-all duration-500 ${isLightMode ? 'bg-black/5 text-[#FF4D30]' : 'bg-white/5 text-[#FF4D30]'} group-hover:bg-[#FF4D30] group-hover:text-white shadow-lg`}
            >
               {item.icon === 'rocket' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
               {item.icon === 'star' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
               {item.icon === 'users' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
               {item.icon === 'globe' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" /></svg>}
               {item.icon === 'cpu' && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>}
>>>>>>> 719eadd (Initial commit)
            </motion.div>
            <div className="overflow-hidden">
              <motion.h4 
                custom={1}
                variants={contentRevealVariants}
<<<<<<< HEAD
                className={`text-xl md:text-2xl lg:text-3xl font-black transition-colors duration-500 tracking-tight group-hover:text-[#FF4D30] ${isLightMode ? 'text-black' : 'text-white'}`}
=======
                className={`text-lg md:text-xl lg:text-2xl font-black transition-colors duration-500 tracking-tight group-hover:text-[#FF4D30] ${isLightMode ? 'text-black' : 'text-white'}`}
>>>>>>> 719eadd (Initial commit)
              >
                {item.title}
              </motion.h4>
            </div>
          </div>
          <motion.p 
            custom={2}
            variants={contentRevealVariants}
<<<<<<< HEAD
            className={`text-base md:text-lg leading-relaxed font-medium transition-colors duration-500 ${isLightMode ? 'text-black/60' : 'text-white/50'}`}
=======
            className={`text-sm md:text-base leading-relaxed font-medium transition-colors duration-500 ${isLightMode ? 'text-black/60' : 'text-white/50'}`}
>>>>>>> 719eadd (Initial commit)
          >
            {item.description}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Spacer to push content to zig-zag */}
      <div className={`hidden md:block md:w-[42%] ${isEven ? 'md:order-1' : 'md:order-3'}`} />
    </div>
  );
};

const Journey: React.FC<JourneyProps> = ({ isLightMode }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
<<<<<<< HEAD
    <section ref={containerRef} className={`relative w-full py-24 md:py-36 px-6 md:px-12 overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-[#FAFBFF]' : 'bg-black'}`}>
      <JourneyBackground scrollProgress={scrollYProgress} isLightMode={isLightMode} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
=======
    <section ref={containerRef} className={`relative w-full py-20 md:py-28 px-6 md:px-12 overflow-hidden transition-colors duration-700 ${isLightMode ? 'bg-[#FAFBFF]' : 'bg-black'}`}>
      <JourneyBackground scrollProgress={scrollYProgress} isLightMode={isLightMode} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
>>>>>>> 719eadd (Initial commit)
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none transition-colors duration-700 ${isLightMode ? 'text-black' : 'text-white'}`}
=======
              className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter leading-none transition-colors duration-700 ${isLightMode ? 'text-black' : 'text-white'}`}
>>>>>>> 719eadd (Initial commit)
            >
              Our Journey
            </motion.h2>
          </div>
          <motion.p 
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-lg md:text-xl font-medium transition-colors duration-700 ${isLightMode ? 'text-black/60' : 'text-white/70'}`}
=======
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className={`text-base md:text-lg font-medium transition-colors duration-700 ${isLightMode ? 'text-black/60' : 'text-white/70'}`}
>>>>>>> 719eadd (Initial commit)
          >
            Milestones that shaped our growth and success
          </motion.p>
        </div>
        <div className="relative w-full">
          {/* Timeline Lines - Now on the edges instead of center */}
          <div className={`absolute left-0 top-0 bottom-0 w-[1px] hidden md:block ${isLightMode ? 'bg-black/[0.08]' : 'bg-white/10'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-[1px] hidden md:block ${isLightMode ? 'bg-black/[0.08]' : 'bg-white/10'}`} />
          
          <div className="flex flex-col">
            {JOURNEY.map((item, index) => (
              <JourneyItem key={item.year} item={item} index={index} isLightMode={isLightMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
