
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Background3D from './components/Background3D';
import StatCard from './components/StatCard';
import MissionVision from './components/MissionVision';
import Values from './components/Values';
import Journey from './components/Journey';
import Navbar from './components/Navbar';
import PartnerCTA from './components/PartnerCTA';
import Footer from './components/Footer';
import { STATS, COLORS } from './constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const wordRevealVariants: Variants = {
  hidden: { y: '110%', opacity: 0, skewY: 7 },
  visible: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => setIsLightMode(!isLightMode);

  const headingLines = [
    { text: "Building", color: isLightMode ? "#0F172A" : "white" },
    { text: "Digital", color: isLightMode ? "#0F172A" : "white" },
    { text: "Excellence", color: COLORS.primary }
  ];

  return (
    <div 
      className={`transition-colors duration-700 ${isLightMode ? 'bg-[#FAFBFF] text-[#0F172A]' : 'bg-black text-white'} selection:bg-[#FF4D30] selection:text-white overflow-x-hidden cursor-default min-h-screen`}
    >
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      
      <main className="relative min-h-screen w-full flex flex-col items-center">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <Background3D isLightMode={isLightMode} />
          
          <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 py-32 md:py-48 lg:py-0 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 pointer-events-none">
=======
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          <Background3D isLightMode={isLightMode} />
          
          <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 py-20 md:py-24 lg:py-0 min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 pointer-events-none">
>>>>>>> 719eadd (Initial commit)
            <motion.div 
              className="flex-1 text-left pointer-events-auto w-full lg:w-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
<<<<<<< HEAD
                className={`inline-block mb-6`}
                variants={subtitleVariants}
              >
                <span className={`text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#FF4D30]`}>
=======
                className={`inline-block mb-4`}
                variants={subtitleVariants}
              >
                <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#FF4D30]`}>
>>>>>>> 719eadd (Initial commit)
                  About Us
                </span>
              </motion.div>
              
<<<<<<< HEAD
              <div className="mb-8 overflow-hidden">
                <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.95] flex flex-wrap gap-x-4 md:gap-x-6">
                  {headingLines.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden py-2">
=======
              <div className="mb-6 overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.95] flex flex-wrap gap-x-3 md:gap-x-4">
                  {headingLines.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden py-1">
>>>>>>> 719eadd (Initial commit)
                      <motion.span 
                        variants={wordRevealVariants}
                        className="inline-block origin-bottom transition-colors duration-700"
                        style={{ color: word.color }}
                      >
                        {word.text}
                      </motion.span>
                    </span>
                  ))}
                </h1>
              </div>
              
              <motion.p 
<<<<<<< HEAD
                className={`text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-12 font-medium transition-colors duration-700 ${isLightMode ? 'text-[#1E293B]/70' : 'text-white/70'}`}
=======
                className={`text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-8 font-medium transition-colors duration-700 ${isLightMode ? 'text-[#1E293B]/70' : 'text-white/70'}`}
>>>>>>> 719eadd (Initial commit)
                variants={descriptionVariants}
              >
                We are a passionate team of innovators, designers, and developers committed to transforming businesses through cutting-edge digital solutions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 1000, damping: 25 }}
<<<<<<< HEAD
                  className={`px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl bg-[#FF4D30] text-white transition-shadow duration-200 relative group overflow-hidden ${isLightMode ? 'shadow-[0_20px_40px_rgba(255,77,48,0.25)]' : 'shadow-[0_0_40px_rgba(255,77,48,0.4)]'}`}
=======
                  className={`px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black text-base md:text-lg bg-[#FF4D30] text-white transition-shadow duration-200 relative group overflow-hidden ${isLightMode ? 'shadow-[0_20px_40px_rgba(255,77,48,0.25)]' : 'shadow-[0_0_40px_rgba(255,77,48,0.4)]'}`}
>>>>>>> 719eadd (Initial commit)
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-in-out"
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
<<<<<<< HEAD
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full lg:max-w-xl pointer-events-auto"
=======
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:max-w-lg pointer-events-auto"
>>>>>>> 719eadd (Initial commit)
              initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {STATS.map((stat, idx) => (
                <StatCard key={stat.id} stat={stat} index={idx} isLightMode={isLightMode} />
              ))}
            </motion.div>
          </div>
        </section>

        <MissionVision isLightMode={isLightMode} />
        <Journey isLightMode={isLightMode} />
        <Values isLightMode={isLightMode} />
        <PartnerCTA isLightMode={isLightMode} />
        <Footer isLightMode={isLightMode} />

        <div className={`fixed top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[200px] pointer-events-none rounded-full transition-opacity duration-700 ${isLightMode ? 'bg-[#FF4D30]/5 opacity-20' : 'bg-[#FF4D30]/10 opacity-100'}`} />
        <div className={`fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[200px] pointer-events-none rounded-full transition-opacity duration-700 ${isLightMode ? 'bg-[#FF4D30]/3 opacity-10' : 'bg-[#FF4D30]/5 opacity-100'}`} />
      </main>
    </div>
  );
};

export default App;
