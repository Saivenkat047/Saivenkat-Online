import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full bg-zinc-950">
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-2xl md:text-3xl font-bold text-primary cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection('hero')}
        >
          SVSP
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {links.map((item) => (
            <span
              key={item.id}
              className={`relative cursor-pointer transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted hover:text-white"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in"></span>
              )}
            </span>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-zinc-800"
          onClick={() => setOpen((s) => !s)}
          aria-label="open menu"
        >
          <Menu size={24} className="text-muted" />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden w-full bg-zinc-950 px-6 pb-4">
          <div className="max-w-7xl mx-auto flex flex-col gap-4 text-lg font-medium">
            {links.map((item) => (
              <span
                key={item.id}
                className={`cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted hover:text-white"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
