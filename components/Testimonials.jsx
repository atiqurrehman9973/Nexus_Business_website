"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Nexus transformed our entire approach to business strategy. Their insights helped us achieve 40% growth in just one year.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team's expertise in digital transformation was invaluable. They modernized our operations while respecting our company culture.",
    author: "James Chen",
    role: "COO, Global Manufacturing Co.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Nexus was a game-changer. Their strategic guidance helped us navigate a challenging market expansion.",
    author: "Emily Rodriguez",
    role: "Founder, StartUp Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Header */}
          <div>
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              What our clients say about us
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              We measure our success by the success of our clients. Here is what some of them 
              have to say about working with us.
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-primary-foreground/60 ml-4">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="relative">
            <Quote className="absolute -top-4 -left-2 w-16 h-16 text-accent/20" />
            
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-primary-foreground/10">
              <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-8">
                {`"${testimonials[currentIndex].quote}"`}
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-accent' 
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
