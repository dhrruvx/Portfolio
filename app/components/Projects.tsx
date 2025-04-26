'use client';

import { motion } from 'framer-motion';
import { MovingBorder } from './ui/moving-border';
import { Sparkles } from './ui/sparkles';
import { CardSpotlight } from './ui/card-spotlight';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "RoboDoc",
      description: "An innovative HCI project leveraging Python, LLMs, RAG, and NLP under the guidance of Prof. Udit Kr. Chakraborty (HOD CSE, SMIT)",
      technologies: ["Python", "LLM", "RAG", "NLP", "HCI"]
    },
    {
      title: "MindEase",
      description: "Current project focusing on HCI with Python, LLMs, RAG, and ReactJs, guided by Prof. Udit Kr. Chakraborty",
      technologies: ["Python", "ReactJs", "LLM", "RAG", "HCI"]
    },
    {
      title: "Nike App UI Demo",
      description: "A beautiful and responsive UI implementation of the Nike App using Flutter and Firebase",
      technologies: ["Flutter", "Firebase", "UI/UX"]
    },
    {
      title: "Shiftix",
      description: "A forklift-based website built with modern web technologies",
      technologies: ["ReactJs", "Tailwind CSS", "Firebase"]
    },
    {
      title: "NoteVault",
      description: "An innovative app for storing and managing class notes, powered by Gemini API",
      technologies: ["Flutter", "Firebase", "Gemini API"]
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      <Sparkles className="absolute inset-0 z-0">
        <div className="w-full h-full" />
      </Sparkles>
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mb-12 w-fit mx-auto text-center">
          <motion.div
            className="relative inline-block"
            variants={cardVariants}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 px-8 py-4">
              Featured Projects
            </h2>
            <span className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-600 opacity-25 blur-2xl rounded-lg"></span>
          </motion.div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="flex flex-col gap-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full transform-gpu transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <CardSpotlight className="group h-full border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-500">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-blue-500/5 text-blue-400 rounded-md border border-blue-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 centered cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={index + 3}
                variants={cardVariants}
                className="h-full transform-gpu transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <CardSpotlight className="group h-full border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-500">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-blue-500/5 text-blue-400 rounded-md border border-blue-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;