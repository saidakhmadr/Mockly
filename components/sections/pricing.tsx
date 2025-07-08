"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Sparkles, Zap, Crown, Building } from 'lucide-react';
import Link from 'next/link';

export function Pricing() {
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

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with mock interviews',
      icon: Sparkles,
      features: [
        { name: '5 mock interviews per month', included: true },
        { name: 'Basic AI feedback', included: true },
        { name: 'Common interview questions', included: true },
        { name: 'Progress tracking', included: true },
        { name: 'Email support', included: true },
        { name: 'Custom interview templates', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: 'Company dashboard', included: false }
      ],
      popular: false,
      cta: 'Get Started',
      href: '/register?plan=free',
      color: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'For serious job seekers and career advancement',
      icon: Zap,
      features: [
        { name: 'Unlimited mock interviews', included: true },
        { name: 'Advanced AI feedback with scoring', included: true },
        { name: 'Industry-specific questions', included: true },
        { name: 'Detailed progress analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom interview templates', included: true },
        { name: 'Video interview practice', included: true },
        { name: 'Resume analysis', included: true },
        { name: 'Company dashboard', included: false }
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/register?plan=pro',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'per month',
      description: 'For teams and organizations at scale',
      icon: Crown,
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Company dashboard & branding', included: true },
        { name: 'Team management & collaboration', included: true },
        { name: 'Advanced reporting & analytics', included: true },
        { name: 'API access & integrations', included: true },
        { name: 'SSO & enterprise security', included: true },
        { name: 'Dedicated customer success', included: true },
        { name: 'Custom AI model training', included: true },
        { name: 'White-label solutions', included: true }
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="scroll-animate">
            <Badge variant="secondary" className="mb-4 glass">
              <Building className="h-3 w-3 mr-1" />
              Flexible Pricing
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 scroll-animate stagger-1">
            Choose your <span className="gradient-text">perfect plan</span>
          </h2>
          <p className="text-xl text-muted-foreground scroll-animate stagger-2">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative group hover-lift glass border-0 shadow-lg hover:shadow-xl transition-all duration-500 scroll-animate stagger-${index + 3} ${
              plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-bg text-white px-4 py-1 shadow-lg">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 relative">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Link href={plan.href}>
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-primary gradient-bg' : ''} hover:scale-105 transition-all duration-300`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                          <X className="h-3 w-3 text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center scroll-animate stagger-6">
          <p className="text-sm text-muted-foreground mb-4">
            Questions? Check out our <Link href="/faq" className="text-primary hover:underline">FAQ</Link> or{' '}
            <Link href="/contact" className="text-primary hover:underline">contact our team</Link>
          </p>
          <div className="inline-flex items-center space-x-4 text-xs text-muted-foreground">
            <span>✓ 14-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}