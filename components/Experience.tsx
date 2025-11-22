import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey, training, and freelance work">
      <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-dark border-2 border-primary"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 uppercase tracking-wider">
                {exp.type}
              </span>
            </div>
            
            <div className="flex items-center text-slate-400 text-sm mb-4">
              <Briefcase size={14} className="mr-2" />
              <span className="mr-4">{exp.company}</span>
              <Calendar size={14} className="mr-2" />
              <span>{exp.period}</span>
            </div>
            
            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;