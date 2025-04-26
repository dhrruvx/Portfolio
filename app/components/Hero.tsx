'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [count, setCount] = useState(2023);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev < 2025 ? prev + 1 : 2025);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-blue-500 mb-6 text-xl font-mono"
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-2 border border-blue-500 rounded-lg bg-blue-500/10 backdrop-blur-sm">
            {count} AND BEYOND
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-blue-400">Dhruv Bhutra</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Aspiring Software Engineer
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed"
          variants={itemVariants}
        >
          A tech enthusiast with a love for fast cars, smart apps, and big ideas.
          <br />
          Blending adrenaline and innovation into every project I create.
        </motion.p>

        <motion.div
          className="flex gap-4"
          variants={itemVariants}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <motion.div
              className="absolute inset-0 bg-blue-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-colors backdrop-blur-sm"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-blue-500 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 