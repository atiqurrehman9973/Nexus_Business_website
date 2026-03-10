"use client"

import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-6">
            Innovation meets excellence
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Transforming Businesses Through Strategic Excellence
          </h1>
          
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
            We partner with forward-thinking organizations to drive sustainable growth, 
            optimize operations, and unlock new opportunities in an ever-evolving marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
            >
              <Play className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
