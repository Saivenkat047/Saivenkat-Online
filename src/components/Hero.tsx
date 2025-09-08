import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({
  id,
  name,
  title,
  location,
  links,
}: {
  id: string;
  name: string;
  title: string;
  location: string;
  links: string[];
}) {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id={id}
      className="h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        {name}
      </motion.h1>

      <p className="mt-4 text-2xl text-blue-800">
        {title}
      </p>
      <p className="text-xl mt-4 text-gray-600 max-w-2xl leading-relaxed">
            Innovating the web of tomorrow with forward-looking technology and fresh ideas
          </p>
      {/* <div className="mt-5 flex gap-4 text-sm flex-wrap">
        {links.map((l, i) => (
          <a
            key={i}
            href={l}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            {new URL(l).host}
          </a>
        ))}
      </div> */}

      <button
        onClick={scrollToProjects}
        className="glass-button mt-8 px-6 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
    // className="glass-button w-full text-lg py-3 font-semibold"
      >
        View My Work
      </button>
    </div>
  );
}
