import React, { useState } from 'react';
import Section from './Section';
import { PERSONAL_DETAILS } from '../constants';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  // NOTE: Replace "FORM_ID" with your actual Formspree Form ID
  const [state, handleSubmit] = useForm("xdojzkaz"); 
  
  if (state.succeeded) {
    return (
      <Section id="contact" title="Contact Me" className="bg-dark text-center">
        <div className="bg-card p-12 rounded-2xl border border-green-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl text-white font-bold mb-4">Message Sent!</h3>
            <p className="text-slate-400">Thanks for reaching out, Aman! I'll get back to you shortly.</p>
            <button onClick={() => window.location.reload()} className="mt-6 text-primary hover:underline">Send another message</button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" title="Contact Me" subtitle="Let's work together">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
          <p className="text-slate-400 mb-8">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-white hover:text-primary transition-colors">
                  {PERSONAL_DETAILS.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-white hover:text-primary transition-colors">
                  {PERSONAL_DETAILS.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-white">{PERSONAL_DETAILS.location}</p>
              </div>
            </div>

             <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">
                  amanmathur101
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-2xl border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                id="name"
                type="text" 
                name="name"
                required
                className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Your Name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary text-dark font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
              {!state.submitting && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;