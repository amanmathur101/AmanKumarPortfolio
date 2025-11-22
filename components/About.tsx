import React from 'react';
import Section from './Section';
import { PERSONAL_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-dark">
      <div className="bg-card p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl">
        <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
          {PERSONAL_DETAILS.about}
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-dark/50 rounded-lg border border-slate-800 text-center">
            <h3 className="text-primary text-xl font-bold">Remote Work</h3>
            <p className="text-sm text-slate-400 mt-1">Experienced in agile remote teams</p>
          </div>
          <div className="p-4 bg-dark/50 rounded-lg border border-slate-800 text-center">
            <h3 className="text-secondary text-xl font-bold">Performance</h3>
            <p className="text-sm text-slate-400 mt-1">Optimizing queries & latency</p>
          </div>
          <div className="p-4 bg-dark/50 rounded-lg border border-slate-800 text-center">
            <h3 className="text-blue-400 text-xl font-bold">Full Stack</h3>
            <p className="text-sm text-slate-400 mt-1">Java, React & Databases</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;