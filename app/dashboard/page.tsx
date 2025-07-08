"use client";

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Target, 
  Play, 
  BarChart3, 
  Award,
  Plus,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Star,
  TrendingDown
} from 'lucide-react';

export default function DashboardPage() {
  const [recentInterviews] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Stripe',
      date: '2024-01-15',
      score: 92,
      status: 'completed',
      duration: '45 min',
      trend: 'up'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Notion',
      date: '2024-01-12',
      score: 88,
      status: 'completed',
      duration: '60 min',
      trend: 'up'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'OpenAI',
      date: '2024-01-10',
      score: 85,
      status: 'completed',
      duration: '50 min',
      trend: 'down'
    }
  ]);

  const upcomingInterviews = [
    {
      id: 4,
      title: 'Frontend Engineer',
      company: 'Vercel',
      date: '2024-01-18',
      time: '10:00 AM',
      type: 'Technical',
      priority: 'high'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Netflix',
      date: '2024-01-20',
      time: '2:00 PM',
      type: 'System Design',
      priority: 'medium'
    }
  ];

  const stats = [
    {
      title: 'Total Interviews',
      value: '24',
      change: '+8 this month',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Average Score',
      value: '89%',
      change: '+12% improvement',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Hours Practiced',
      value: '32h',
      change: '+18h this month',
      trend: 'up',
      icon: Clock,
      color: 'text-emerald-600'
    },
    {
      title: 'Success Rate',
      value: '94%',
      change: '+6% improvement',
      trend: 'up',
      icon: Award,
      color: 'text-orange-600'
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Enhanced Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                Welcome back, Sarah! 👋
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                Here's what's happening with your interview preparation
              </p>
            </div>
            <div className="mt-6 sm:mt-0 flex space-x-3">
              <Button variant="outline" className="border-border hover:bg-muted/50">
                <Users className="h-4 w-4 mr-2" />
                View Team
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="h-4 w-4 mr-2" />
                New Interview
              </Button>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {stat.change}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Recent Interviews */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card shadow-sm">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Recent Interviews
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Your latest mock interview sessions
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      View All
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {recentInterviews.map((interview) => (
                      <div key={interview.id} className="p-6 hover:bg-muted/30 transition-colors group">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {interview.title}
                              </h4>
                              <Badge 
                                variant={interview.score >= 90 ? "default" : interview.score >= 80 ? "secondary" : "destructive"}
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0"
                              >
                                {interview.score}%
                              </Badge>
                              {interview.trend === 'up' ? (
                                <TrendingUp className="h-4 w-4 text-green-600" />
                              ) : (
                                <TrendingDown className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm mb-1 flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {interview.company}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{new Date(interview.date).toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{interview.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Upcoming Interviews */}
            <div className="space-y-6">
              <Card className="border-border bg-card shadow-sm">
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        Upcoming
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Scheduled interviews
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {upcomingInterviews.length}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="p-6 hover:bg-muted/30 transition-colors">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            interview.priority === 'high' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
                          }`}>
                            <Clock className={`h-4 w-4 ${
                              interview.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground text-sm mb-1">
                              {interview.title}
                            </h4>
                            <p className="text-muted-foreground text-sm mb-2">
                              {interview.company}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-muted-foreground">
                                {new Date(interview.date).toLocaleDateString()} • {interview.time}
                              </div>
                              <Badge 
                                variant="outline" 
                                className={`text-xs border-border text-muted-foreground ${
                                  interview.priority === 'high' ? 'border-red-200 text-red-600' : ''
                                }`}
                              >
                                {interview.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Quick Actions */}
              <Card className="border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                    <Zap className="h-4 w-4 mr-3" />
                    Start Practice Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                    <BarChart3 className="h-4 w-4 mr-3" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200">
                    <Calendar className="h-4 w-4 mr-3" />
                    Schedule Interview
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Progress Section */}
          <div>
            <Card className="border-border bg-card shadow-sm">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      Skill Progress
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Track your improvement across different areas
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Last 30 days
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">Technical Skills</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">92%</span>
                      </div>
                      <Progress value={92} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">Communication</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">88%</span>
                      </div>
                      <Progress value={88} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">Problem Solving</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">95%</span>
                      </div>
                      <Progress value={95} className="h-3" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">Leadership</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">85%</span>
                      </div>
                      <Progress value={85} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">System Design</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">90%</span>
                      </div>
                      <Progress value={90} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground">Behavioral</span>
                        <span className="text-sm font-semibold text-green-600 dark:text-green-400">87%</span>
                      </div>
                      <Progress value={87} className="h-3" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}