"use client"

import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Consultants' }
]

const features = [
  'Data-driven decision making',
  'Customized solutions for every client',
  'Proven track record of success',
  'Long-term partnership approach'
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80"
                alt="Business professionals collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-3xl font-serif font-bold text-accent">{stat.value}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Driving innovation and sustainable growth
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to transform how businesses approach growth and innovation, 
              Nexus Consulting has become a trusted partner for organizations worldwide. Our team 
              of seasoned experts brings decades of combined experience across industries.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in creating lasting impact through strategic thinking, innovative solutions, 
              and unwavering commitment to our clients success. Every engagement is tailored to 
              address your unique challenges and opportunities.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="block text-2xl font-serif font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
