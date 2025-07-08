"use client";

import { useState } from 'react';
import { CompanyDashboardLayout } from '@/components/company/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Target, 
  Plus,
  BarChart3,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function CompanyDashboardPage() {
  const [templates] = useState([
    {
      id: 1,
      name: 'Software Engineer - Frontend',
      category: 'Technical',
      questions: 25,
      completions: 42,
      avgScore: 78,
      status: 'active'
    },
    {
      id: 2,
      name: 'Product Manager',
      category: 'Behavioral',
      questions: 18,
      completions: 28,
      avgScore: 85,
      status: 'active'
    },
    {
      id: 3,
      name: 'Data Scientist',
      category: 'Technical',
      questions: 30,
      completions: 15,
      avgScore: 82,
      status: 'draft'
    }
  ]);

  const stats = [
    {
      title: 'Active Templates',
      value: '8',
      change: '+2 this month',
      trend: 'up',
      icon: FileText
    },
    {
      title: 'Total Candidates',
      value: '156',
      change: '+23 this month',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Avg. Score',
      value: '81%',
      change: '+3% improvement',
      trend: 'up',
      icon: Target
    },
    {
      title: 'Completion Rate',
      value: '94%',
      change: '+1% this month',
      trend: 'up',
      icon: CheckCircle
    }
  ];

  const recentCandidates = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Software Engineer',
      score: 88,
      date: '2024-01-20',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Bob Smith',
      position: 'Product Manager',
      score: 92,
      date: '2024-01-19',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Carol Davis',
      position: 'Data Scientist',
      score: 85,
      date: '2024-01-18',
      status: 'completed'
    }
  ];

  return (
    <CompanyDashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Company Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage your interview templates and track candidate performance
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interview Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Interview Templates
              </CardTitle>
              <CardDescription>
                Manage your custom interview templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant={template.status === 'active' ? 'default' : 'secondary'}>
                          {template.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{template.category}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{template.questions} questions</span>
                        <span>{template.completions} completions</span>
                        <span>{template.avgScore}% avg score</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Candidates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Recent Candidates
              </CardTitle>
              <CardDescription>
                Latest candidate interview results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCandidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{candidate.name}</h4>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(candidate.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={candidate.score >= 85 ? "default" : "secondary"}>
                        {candidate.score}%
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your hiring process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <FileText className="h-6 w-6 mb-2" />
                <span>Create Template</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                <span>View Candidates</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <Target className="h-6 w-6 mb-2" />
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CompanyDashboardLayout>
  );
}