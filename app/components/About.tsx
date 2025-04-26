'use client';

import { motion } from 'framer-motion';
import { Card3D } from './ui/3d-card';
import { MovingBorder } from './ui/moving-border';
import { Sparkles } from './ui/sparkles';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <Sparkles className="absolute inset-0 z-0">
        <div className="w-full h-full" />
      </Sparkles>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 w-fit mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 sm:text-4xl mb-4 px-8 py-4">
              About Me
            </h2>
            <span className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-600 opacity-25 blur-2xl rounded-lg"></span>
          </motion.div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 backdrop-blur-lg bg-black/10 p-8 rounded-xl border border-white/10"
          >
            <p className="text-lg text-gray-300">
              Passionate and versatile developer with a strong foundation in app and web development, 
              as well as emerging technologies like AI/ML and LLMs. Skilled in designing intuitive user 
              experiences and building scalable solutions.
            </p>
            <p className="text-lg text-gray-300">
              Brings a balance of technical proficiency and collaborative mindset. Driven by curiosity, 
              creativity, and a commitment to continuous learning.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Majitar, India
              </span>
              <a href="mailto:dhruvbhutra04@gmail.com" className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/dhruvbhutra" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/dhrruvx" target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                GitHub
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card3D className="backdrop-blur-lg bg-black/10 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-400 mb-2">Education</h3>
                <p className="text-gray-300 font-semibold">B.Tech CSE</p>
                <p className="text-gray-400">SMIT, Sikkim</p>
                <p className="text-blue-400 text-sm mt-1">CGPA: 8.84</p>
              </div>
            </Card3D>
            <Card3D className="backdrop-blur-lg bg-black/10 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-400 mb-2">Languages</h3>
                <p className="text-gray-300">Hindi</p>
                <p className="text-gray-300">English</p>
                <p className="text-gray-300">Bengali</p>
              </div>
            </Card3D>
            <Card3D className="backdrop-blur-lg bg-black/10 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-400 mb-2">Certifications</h3>
                <p className="text-gray-300 text-sm">Google Data Analytics</p>
                <p className="text-gray-300 text-sm">IBM Python for DS & AI</p>
                <p className="text-gray-300 text-sm">IBM SQL & Databases</p>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 