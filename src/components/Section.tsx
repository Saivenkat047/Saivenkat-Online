import type { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16 ">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">{title}</h2>
      {children}
    </section>
  )
}
