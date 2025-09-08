import React from 'react'

export default function SkillPill({ text }: { text: string }) {
  return <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-sm">{text}</span>
}
