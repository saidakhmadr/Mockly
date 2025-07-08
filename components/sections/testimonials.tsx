"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Sparkles } from 'lucide-react';

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      content: 'Mockly transformed my interview preparation. The AI feedback was incredibly detailed and helped me identify blind spots I never knew I had. I landed my dream job at Google!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Landed dream job'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'Stripe',
      content: 'The behavioral questions were incredibly realistic. Mockly helped me structure my responses using the STAR method and build confidence for high-pressure situations.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Improved confidence'
    },
    {
      name: 'Emily Johnson',
      role: 'Data Scientist',
      company: 'Meta',
      content: 'As someone who gets nervous in interviews, practicing with Mockly was a game-changer. The AI interviewer felt so realistic, and the feedback was constructive and actionable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Overcame anxiety'
    },
    {
      name: 'David Park',
      role: 'HR Director',
      company: 'TechCorp',
      content: 'We use Mockly to standardize our interview process. The company dashboard makes it easy to track candidate performance and ensure consistency across our hiring team.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Streamlined hiring'
    },
    {
      name: 'Lisa Thompson',
      role: 'UX Designer',
      company: 'Adobe',
      content: 'The variety of scenarios was impressive. From portfolio reviews to design challenges, Mockly covered everything I needed to prepare for my Adobe interview.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Comprehensive prep'
    },
    {
      name: 'James Wilson',
      role: 'Marketing Manager',
      company: 'HubSpot',
      content: 'The AI feedback caught subtle communication issues I never would have noticed. It helped me refine my storytelling and present my experience more effectively.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      highlight: 'Better storytelling'
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="scroll-animate">
            <Badge variant="secondary" className="mb-4 glass">
              <Sparkles className="h-3 w-3 mr-1" />
              Success Stories
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate stagger-1">
            Loved by <span className="gradient-text">professionals</span> worldwide
          </h2>
          <p className="text-xl text-muted-foreground scroll-animate stagger-2">
            Join thousands of successful candidates who used Mockly to land their dream jobs at top companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`group hover-lift glass border-0 shadow-lg hover:shadow-xl transition-all duration-500 scroll-animate stagger-${(index % 6) + 3} relative overflow-hidden`}>
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-primary" />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.role} at <span className="font-medium text-primary">{testimonial.company}</span>
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.highlight}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center scroll-animate stagger-9">
          <p className="text-sm text-muted-foreground mb-8">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Meta', 'Stripe', 'Adobe', 'HubSpot', 'Netflix', 'Airbnb', 'Uber'].map((company, index) => (
              <div key={company} className={`text-lg font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 stagger-${index + 1}`}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}