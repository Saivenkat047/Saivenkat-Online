export default function ProjectCard({ p }: { p: any }) {
  return (
    <a href={p.link || '#'} target={p.link ? '_blank' : undefined} rel="noreferrer"
       className="block p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition">
      <h3 className="text-xl font-semibold">{p.name}</h3>
      <p className="text-sm text-zinc-400">{p.stack}</p>
      <p className="mt-2 text-sm">{p.description}</p>
    </a>
  )
}
