import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-card p-6 rounded-xl border border-slate-800 flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
            <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-800">
              <span className="text-xs font-medium bg-slate-800 px-2 py-1 rounded text-slate-300">{edu.year}</span>
              {edu.score && <span className="text-xs font-bold text-secondary">{edu.score}</span>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;