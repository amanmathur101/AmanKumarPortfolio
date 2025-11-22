import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-slate-800 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Aman Kumar. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Built with React, Tailwind & Framer Motion
      </p>
    </footer>
  );
};

export default Footer;