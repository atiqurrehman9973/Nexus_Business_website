"use client"

import { TrendingUp, Users, Lightbulb, BarChart3, Shield, Zap } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies that align with your vision and drive measurable results.',
    number: '01'
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Build high-performing teams through leadership training and organizational development.',
    number: '02'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and implement cutting-edge solutions for competitive advantage.',
    number: '03'
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description: 'Gain deep insights into market trends, customer behavior, and competitive landscapes.',
    number: '04'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect your business and ensure continuity.',
    number: '05'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your operations with technology-driven solutions and process optimization.',
    number: '06'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A comprehensive approach for sustainable growth
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We offer end-to-end consulting services designed to transform your business 
            and position you for long-term success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-muted/30 group-hover:text-accent/20 transition-colors">
                {service.number}
              </span>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
