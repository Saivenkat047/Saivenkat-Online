import React from 'react'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import SkillPill from './components/SkillPill'
import ExperienceCard from './components/ExperienceCard'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { fallback } from './data/fallback'
import ContactForm from './components/ContactForm'

export default function App() {
  const [data, setData] = useState<any>(fallback)

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/profile')
  //     .then(r => r.ok ? r.json() : Promise.reject())
  //     .then(setData)
  //     .catch(() => setData(fallback))
  // }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-50">
      <Header />
            {/* Floating Code Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Terminal Windows */}
        <div className="absolute top-20 left-10 w-64 h-40 glass rounded-lg animate-float opacity-70" style={{animationDelay: '0s'}}>
          <div className="p-3">
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-primary">
              <div>$ npm start</div>
              <div className="text-muted-foreground">Starting development server...</div>
              <div className="text-primary animate-pulse">▊</div>
            </div>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="absolute top-1/2 right-10 w-80 h-32 glass rounded-lg animate-float opacity-60" style={{animationDelay: '2s'}}>
          <div className="p-4">
              <div className="text-xs font-mono">
                <div className="text-purple-400">const</div>
                <div className="text-blue-400 ml-2">developer = () =&gt; &#123;</div>
                <div className="text-primary ml-4">return 'awesome code';</div>
                <div className="text-blue-400">&#125;</div>
              </div>
          </div>
        </div>

        {/* Binary Stream */}
        <div className="absolute bottom-32 left-1/3 w-48 h-64 opacity-40" style={{animationDelay: '4s'}}>
          <div className="text-xs font-mono text-primary/60 animate-slide-up leading-relaxed">
            10110101<br/>01001010<br/>11010011<br/>00110110<br/>
            10101101<br/>01110100<br/>11001010<br/>00011101<br/>
            10110101<br/>01001010<br/>11010011<br/>00110110
          </div>
        </div>

        {/* Floating Brackets */}
        <div className="absolute top-1/3 left-1/3 text-6xl text-primary/30 animate-float font-mono" style={{animationDelay: '1s'}}>{'{'}</div>
        <div className="absolute bottom-1/3 right-1/3 text-6xl text-secondary/30 animate-float font-mono" style={{animationDelay: '3s'}}>{'}'}</div>

        {/* Git Commands */}
        <div className="absolute bottom-20 right-20 w-56 h-24 glass rounded-lg animate-float opacity-50" style={{animationDelay: '5s'}}>
          <div className="p-3">
            <div className="text-xs font-mono text-primary">
              <div>$ git commit -m "feat: new feature"</div>
              <div className="text-muted-foreground">[main abc1234] feat: new feature</div>
            </div>
          </div>
        </div>

        {/* API Response */}
        <div className="absolute top-40 right-1/4 w-72 h-36 glass rounded-lg animate-float opacity-60" style={{animationDelay: '6s'}}>
          <div className="p-3">
            <div className="text-xs font-mono">
              <div className="text-green-400">200 OK</div>
              <div className="text-blue-400">{'{'}</div>
              <div className="text-yellow-400 ml-2">"status": "success",</div>
              <div className="text-yellow-400 ml-2">"data": "response"</div>
              <div className="text-blue-400">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
      <main className='backdrop-blur-[1px]'>
        <Hero id="hero" name={data.name} title={data.title} location={data.location} links={data.links} />

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-secondary animate-slide-up">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card animate-slide-up hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Who I Am</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
  I'm a passionate software engineer with over one year of hands-on experience 
  developing scalable applications. My expertise includes React, React Native, 
  backend integration, and modern JavaScript frameworks.
</p>
<p className="text-lg leading-relaxed text-muted-foreground">
  When I’m not coding, you’ll find me exploring new tools and frameworks, 
  contributing to innovative projects, or enhancing my skills in testing 
  and full-stack development.
</p>

            </div>

            <div className="glass-card animate-slide-up hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {data.skills.map((skill, index) => <div key={skill} className="glass rounded-lg p-3 text-center text-sm font-medium glow-primary transition-all duration-300 hover:scale-105" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    {skill}
                  </div>)}
              </div>
            </div>
          </div>
          </div>
          </section>
        <section id='experience' className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
          <div className="">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-primary animate-slide-up">
          Experience
          </h2>
            <div className="space-y-8">
{data.experience.map((exp, index) => (
  <ExperienceCard key={index} e={exp} index={index} />
))}

            </div>
          </div>
          </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-secondary animate-slide-up">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => <div key={project.id} className="glass-card hover-lift animate-slide-up overflow-hidden group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="relative overflow-hidden">
                  <img src={project.img} alt={project.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs font-medium glass rounded-full glow-secondary">
                        {tech}
                      </span>)}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors duration-300">
                    View Project →
                  </a>
                </div>
              </div>)}
          </div>
        </div>
      </section>
        {/* <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" /> */}
              {/* Resume Section */}
      <section id="resume" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gradient-primary animate-slide-up">
            Resume
          </h2>
          
          <div className="glass-card animate-slide-up hover-lift mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Technical Expertise</h4>
                <ul className="space-y-2 text-muted-foreground">
    <li>• 1+ years of experience in web and mobile development</li>
    <li>• Skilled in React, React Native, Java, and SQL</li>
    <li>• Experience with REST APIs, OAuth, and authentication</li>
    <li>• Skilled in Java backend development using Spring framework</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary">Achievements</h4>
                <ul className="space-y-2 text-muted-foreground">
    <li>• Developed financial data apps for U.S.-based companies</li>
    <li>• Delivered responsive, chart-driven UI with real-time news</li>
    <li>• Contributed to production-ready projects at Mantra & La Trandasys</li>
    <li>• Completed certifications in Java and DSA problem-solving</li>
                </ul>
              </div>
            </div>
          </div>
          <a
  href="/Sai_Venkat_1y.pdf"
  download
  className="glass-button text-lg px-8 py-4 font-semibold border border-zinc-600"
>
  Download Resume
</a>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-secondary animate-slide-up">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your next project to life? I'm always interested in 
                discussing new opportunities and innovative challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center glow-primary">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">saivenkatasatishpilla@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center glow-secondary">
                    💼
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/sai-venkata-satish-pilla</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center glow-accent">
                    🐙
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground">github.com/Saivenkat047</p>
                  </div>
                </div>
              </div>
            </div>
<ContactForm/>

          </div>
        </div>
      </section>

<Footer/>
      </main>
    </div>
// <>
// <div className="animate-float glass">Floating + rotating</div>

// <div className="animate-slide-up">Slide up on mount</div>

// <div className="animate-glow-pulse">Pulsing glow</div>

// <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:200%_200%] animate-gradient-shift">
//  Shifting background
// </div>

// </>
  )
}
