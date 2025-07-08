"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Zap, Sparkles, TrendingUp, Shield, Code, Cpu, Brain, Layers, Hexagon, Triangle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Unique Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 grid-pattern animate-grid opacity-20"></div>
        
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10"></div>
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-pink-500/20 rounded-lg rotate-45 blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-lg rotate-12 blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <div className="grid grid-cols-4 gap-4 rotate-12">
            {[...Array(16)].map((_, i) => (
              <Hexagon key={i} className="h-8 w-8 text-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
        
        {/* Triangular Elements */}
        <div className="absolute bottom-1/4 left-1/6 opacity-10">
          <div className="flex space-x-2">
            <Triangle className="h-6 w-6 text-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
            <Triangle className="h-8 w-8 text-emerald-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Triangle className="h-6 w-6 text-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        
        {/* Layered Circles */}
        <div className="absolute top-1/3 left-1/5 opacity-15">
          <div className="relative">
            <div className="w-24 h-24 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-2 w-20 h-20 border-2 border-blue-500 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 w-16 h-16 border-2 border-emerald-500 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>
        </div>
        
        {/* Tech Icons Floating */}
        <div className="absolute top-1/4 left-1/6 opacity-10 animate-float">
          <Code className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/6 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <Cpu className="h-6 w-6 text-emerald-500" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-10 animate-float" style={{ animationDelay: '5s' }}>
          <Brain className="h-7 w-7 text-emerald-500" />
        </div>
        <div className="absolute top-2/3 right-1/5 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Layers className="h-6 w-6 text-blue-500" />
        </div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 scroll-animate glass hover-lift">
            <Sparkles className="h-3 w-3 mr-1" />
            Trusted by 10,000+ professionals worldwide
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 scroll-animate stagger-1">
            AI-powered mock interviews for{' '}
            <span className="animated-gradient">modern hiring</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed scroll-animate stagger-2">
            Practice with realistic interview scenarios, get instant AI feedback, and land your dream job. 
            Perfect for candidates and companies building the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 scroll-animate stagger-3">
            <Link href="/register?type=candidate">
              <Button size="lg" className="text-lg px-8 py-6 btn-primary gradient-bg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 group">
                <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="/register?type=company">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass hover:bg-muted/50 hover:scale-105 transition-all duration-300 group !border-gray-300 dark:!border-gray-600">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                For Companies
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 scroll-animate stagger-4">
            <div className="flex flex-col items-center p-6 glass rounded-2xl hover-lift border border-primary/10">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">95% Success Rate</h3>
              <p className="text-sm text-muted-foreground text-center">Candidates see significant improvement in interview performance</p>
            </div>
            <div className="flex flex-col items-center p-6 glass rounded-2xl hover-lift border border-primary/10">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instant Feedback</h3>
              <p className="text-sm text-muted-foreground text-center">Get detailed AI analysis immediately after each interview</p>
            </div>
            <div className="flex flex-col items-center p-6 glass rounded-2xl hover-lift border border-primary/10">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-sm text-muted-foreground text-center">Secure, scalable platform trusted by Fortune 500 companies</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50 scroll-animate stagger-5">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">50k+</div>
              <div className="text-sm text-muted-foreground">Mock interviews completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-sm text-muted-foreground">Improvement rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-muted-foreground">Companies using Mockly</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animated-gradient {
  background: linear-gradient(90deg, #34d399, #06b6d4, #f472b6, #fbbf24, #34d399);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: gradient-move 4s ease-in-out infinite;
  font-weight: 800;
  filter: drop-shadow(0 2px 6px rgba(52,211,153,0.15));
}
`}</style>
    </section>
  );
}