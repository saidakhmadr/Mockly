"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Logo } from '@/components/ui/logo';
import { Menu, X, ChevronDown, Zap, Users, BarChart3, Shield, Brain } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productDropdown = [
    { name: 'AI Interviews', href: '#features', icon: Brain, description: 'Advanced AI-powered mock interviews' },
    { name: 'Analytics', href: '#features', icon: BarChart3, description: 'Detailed performance insights' },
    { name: 'Team Management', href: '#features', icon: Users, description: 'Collaborate with your hiring team' },
    { name: 'Security', href: '#features', icon: Shield, description: 'Enterprise-grade security' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-2">
        {/* Logo positioned a bit right and up */}
        <div className={`absolute top-1 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`} style={{ right: 'calc(50% + 200px + 450px)' }}>
          <Logo className="h-20 w-20 dark:h-30 dark:w-30" />
        </div>
        
        <div className="flex items-center justify-center">
          
          {/* Unified Navbar Container */}
          <div className={`flex items-center rounded-full px-6 py-3 animate-in slide-in-from-top-2 duration-500 transition-all duration-300 hover:scale-105 ${
            isScrolled 
              ? 'bg-white/95 dark:bg-background/95 backdrop-blur-xl border border-gray-200/50 dark:border-border/30 shadow-lg' 
              : 'bg-gradient-to-r from-gray-50/90 to-white/90 dark:from-background/80 dark:to-background/80 backdrop-blur-sm border border-gray-200/60 dark:border-border/50 shadow-md hover:shadow-xl'
          }`}>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-muted/50"
                  onMouseEnter={() => setActiveDropdown('product')}
                >
                  <span>Product</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'product' && (
                  <div 
                    className="absolute top-full left-0 mt-3 w-96 bg-white dark:bg-background border border-gray-200 dark:border-border rounded-2xl shadow-2xl animate-in slide-in-from-top-2 duration-300 z-50"
                    onMouseEnter={() => setActiveDropdown('product')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                                      <div className="p-6">
                    <div className="space-y-2">
                      {productDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-muted transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-gray-900 dark:text-foreground">{item.name}</div>
                            <div className="text-xs text-gray-600 dark:text-muted-foreground mt-1">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>

                          <Link href="#pricing" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-muted/50">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-muted/50">
              Customers
            </Link>
            <Link href="/docs" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-muted/50">
              Docs
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-muted/50">
              Company
            </Link>
              
              {/* Divider */}
              <div className="w-px h-6 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-border/50 dark:to-border/30 mx-2 animate-pulse"></div>
              
              {/* Actions */}
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <div className="hidden lg:flex items-center space-x-3">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="h-8 px-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-gray-100/50 dark:hover:bg-muted/50 text-gray-700 dark:text-foreground">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="h-8 px-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                      <Zap className="h-4 w-4 mr-2" />
                      Get Started
                    </Button>
                  </Link>
                </div>
                
                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden h-8 w-8 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg mx-4 animate-in zoom-in-95 duration-300">
              <nav className="flex flex-col space-y-4 p-6">
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-muted-foreground px-4">Product</div>
                  {productDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-2 text-sm font-medium hover:text-primary hover:bg-muted transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                
                <hr className="border-border" />
                
                <div className="space-y-2">
                  <Link href="#pricing" className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-muted transition-colors">
                    Pricing
                  </Link>
                  <Link href="#testimonials" className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-muted transition-colors">
                    Customers
                  </Link>
                  <Link href="/docs" className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-muted transition-colors">
                    Docs
                  </Link>
                  <Link href="/about" className="block px-4 py-2 text-sm font-medium hover:text-primary hover:bg-muted transition-colors">
                    Company
                  </Link>
                </div>
                
                <hr className="border-border" />
                
                <div className="flex flex-col space-y-3">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="w-full justify-start rounded-xl">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="w-full rounded-xl">
                      <Zap className="h-4 w-4 mr-2" />
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}