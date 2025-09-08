import React from 'react';

export default function Footer() {
  const data = {
    links: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      leetcode: "https://leetcode.com/username"
    }
  };

  return (
    <footer className="py-12 px-6 bg-card/50 border-t border-border/50 border-sky-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gradient-primary mb-2 text-xl">Sai Venkata Satish Pilla</h3>
            <p className="text-muted-foreground">Software Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={data.links.github} className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift glow-primary transition-all duration-300">
              🐦
            </a>
            <a href={data.links.linkedin} className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift glow-secondary transition-all duration-300">
              💼
            </a>
            <a href={data.links.leetcode} className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift glow-accent transition-all duration-300">
              🐙
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center border-blue-950">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Sai Venkata Satish Pilla. All rights reserved. Built with passion and cutting-edge tech.</p>
        </div>
      </div>
    </footer>
  );
}
