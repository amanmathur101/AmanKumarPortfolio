import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Selected works & experiments">
      {/* Responsive Grid: 1 Col Mobile, 2 Cols Tablet, 3 Cols Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group bg-card rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-dark/60 backdrop-blur-sm">
                 <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors" title="View Code">
                   <Github size={20} />
                 </a>
                 <a href="#" className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-colors" title="Live Demo">
                   <ExternalLink size={20} />
                 </a>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;