"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, MessageCircle, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function HowItWorks() {
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

  const steps = [
    {
      icon: User,
      title: 'Choose Your Role',
      description: 'Select your target position and customize interview settings to match your career goals and industry requirements.',
      step: '01',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Take the Interview',
      description: 'Answer AI-generated questions tailored to your role with realistic scenarios, follow-ups, and adaptive difficulty.',
      step: '02',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Get Detailed Feedback',
      description: 'Receive comprehensive analysis of your performance with actionable insights, scoring, and improvement recommendations.',
      step: '03',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="scroll-animate">
            <Badge variant="secondary" className="mb-4 glass">
              <Sparkles className="h-3 w-3 mr-1" />
              Simple Process
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate stagger-1">
            How <span className="gradient-text">Mockly</span> Works
          </h2>
          <p className="text-xl text-muted-foreground scroll-animate stagger-2">
            Get interview-ready in three simple steps with our AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className={`h-full hover-lift glass border-0 shadow-lg hover:shadow-xl transition-all duration-500 scroll-animate stagger-${index + 3}`}>
                <CardHeader className="text-center pb-6">
                  <div className="relative mx-auto mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-animate stagger-6">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>Ready to get started?</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <Link href="/register">
            <Button size="lg" className="btn-primary gradient-bg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              Try Mockly Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}