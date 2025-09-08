import React from 'react';

export default function ExperienceCard({ e, index }: { e: any, index: number }) {
  return (
    <div
      className="glass-card hover-lift animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="md:w-1/4">
          <span className="text-primary font-semibold">
            {e.start} – {e.end}
          </span>
        </div>
        <div className="md:w-3/4">
          <h4 className="text-xl font-semibold text-foreground">{e.title}</h4>
          <p className="text-secondary font-medium mb-2">{e.company}</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            {e.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
