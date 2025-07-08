"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Shield, 
  Zap,
  Users,
  FileText,
  Target,
  Sparkles,
  Cpu,
  Globe
} from 'lucide-react';

export function Features() {
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

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Engine',
      description: 'Powered by GPT-4 and custom models trained on thousands of real interviews for maximum authenticity.',
      badge: 'AI-Powered',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Feedback',
      description: 'Get instant, detailed analysis of your answers with specific suggestions for improvement and scoring.',
      badge: 'Instant',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Role-Specific Training',
      description: 'Practice with questions tailored to your exact role, from technical challenges to behavioral scenarios.',
      badge: 'Personalized',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed metrics, identify weak areas, and monitor improvement over time.',
      badge: 'Analytics',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Practice anytime, anywhere with our cloud-based platform. No scheduling required.',
      badge: 'Always On',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and GDPR compliance ensure your data stays secure.',
      badge: 'Secure',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Companies can create custom templates, manage candidates, and collaborate with hiring teams.',
      badge: 'For Teams',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Custom Templates',
      description: 'Build interview templates specific to your company culture, values, and job requirements.',
      badge: 'Customizable',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get started in under 60 seconds with our streamlined onboarding and intuitive interface.',
      badge: 'Quick Setup',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="scroll-animate">
            <Badge variant="secondary" className="mb-4 glass">
              <Cpu className="h-3 w-3 mr-1" />
              Powerful Features
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate stagger-1">
            Everything you need to <span className="gradient-text">ace interviews</span>
          </h2>
          <p className="text-xl text-muted-foreground scroll-animate stagger-2">
            Comprehensive tools designed to help you prepare, practice, and succeed in any interview scenario
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`group hover-lift glass border-0 shadow-lg hover:shadow-xl transition-all duration-500 scroll-animate stagger-${(index % 6) + 3}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs glass">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate stagger-9">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Globe className="h-4 w-4" />
            <span>Join thousands of professionals worldwide</span>
          </div>
          <Link href="/register">
            <Button size="lg" className="btn-primary gradient-bg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              <Sparkles className="h-4 w-4 mr-2" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}