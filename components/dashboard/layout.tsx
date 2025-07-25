"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Logo } from '@/components/ui/logo';
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  FileText,
  Trophy,
  HelpCircle,
  Plus
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    name?: string;
    email: string;
    avatarUrl?: string;
  };
  onLogout?: () => void;
}

export function DashboardLayout({ children, user, onLogout }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  if (!user) {
    return null;
  }

  // Restore original navigation fields
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Interviews', href: '/dashboard/interviews', icon: Calendar },
    { name: 'Progress', href: '/dashboard/progress', icon: BarChart3 },
    { name: 'Templates', href: '/dashboard/templates', icon: FileText },
    { name: 'Achievements', href: '/dashboard/achievements', icon: Trophy },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-48 bg-[#FEFEFE] border-r border-[#E5E7EB] shadow-none flex flex-col transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center h-16 px-6 border-b border-[#F5F5F4]">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-7 w-7" width={28} height={28} />
            <span className="font-bold text-[18px] text-[#222] tracking-tight">Mockly</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-[16px] font-medium transition-colors ${isActive(item.href)
                    ? 'bg-[#F5F5F4] text-[#222] font-semibold'
                    : 'text-[#44403C] hover:bg-[#F5F5F4]'} focus:outline-none`}
                >
                  <item.icon className="h-5 w-5 opacity-80" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-6 py-4 border-t border-[#F5F5F4] flex items-center gap-3">
          <Avatar className="h-8 w-8">
            {user.avatarUrl ? (
              <AvatarImage src={user.avatarUrl} />
            ) : (
              <AvatarFallback>{(user.name || user.email || '?')[0].toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-medium truncate text-[#44403C]">{user.name || user.email}</p>
            <p className="text-xs text-[#A3A3A3] truncate">{user.email}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onLogout} className="text-[#A3A3A3] hover:text-[#9A3412]">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-48">
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-10 bg-[#FAFAFA] border-b border-[#F5F5F4]">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
        <main className="min-h-[calc(100vh-4rem)] bg-[#FAFAFA]">
          {children}
        </main>
      </div>
      {/* Sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}