'use client';

import { motion } from 'framer-motion';
import { Card3D } from './ui/3d-card';
import { MovingBorder } from './ui/moving-border';
import { Sparkles } from './ui/sparkles';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 85 },
    { name: 'ReactJs', level: 70 },
    { name: 'Flutter', level: 80 },
    { name: 'Java & SpringBoot', level: 80 },
    { name: 'HTML/CSS/JS', level: 80 },
    { name: 'C/C++', level: 80 },
    { name: 'MySQL', level: 75 },
  ];

  const softSkills = [
    'Communication Skills',
    'Time Management',
    'Problem Solving',
    'Critical Thinking',
    'Leadership',
    'Networking',
  ];

  const devTools = [
    'VsCode',
    'GitHub',
    'Postman',
    'Canva',
    'Figma',
    'Firebase',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "var(--width)",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <Sparkles className="absolute inset-0 z-0">
        <div className="w-full h-full" />
      </Sparkles>
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-12 w-fit mx-auto text-center">
          <motion.div
            className="relative inline-block"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 px-8 py-4">
              Skills & Expertise
            </h2>
            <span className="absolute -inset-3 bg-gradient-to-r from-blue-400 to-purple-600 opacity-25 blur-2xl rounded-lg"></span>
          </motion.div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <Card3D className="backdrop-blur-lg bg-black/10 p-8 rounded-xl border border-white/10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ '--width': `${skill.level}%` } as any}
                        variants={skillVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card3D>

          {/* Soft Skills */}
          <Card3D className="backdrop-blur-lg bg-black/10 p-8 rounded-xl border border-white/10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Soft Skills</h3>
              <div className="flex flex-col gap-3">
                {softSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="backdrop-blur-sm bg-black/20 p-3 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-gray-300 text-sm block text-left pl-2">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card3D>

          {/* Developer Tools */}
          <Card3D className="backdrop-blur-lg bg-black/10 p-8 rounded-xl border border-white/10">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Developer Tools</h3>
              <div className="flex flex-col gap-3">
                {devTools.map((tool) => (
                  <motion.div
                    key={tool}
                    className="backdrop-blur-sm bg-black/20 p-3 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-gray-300 text-sm block text-left pl-2">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card3D>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 