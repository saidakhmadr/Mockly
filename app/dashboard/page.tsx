"use client"
import {
  Search,
  Settings,
  Bell,
  Plus,
  Filter,
  ChevronDown,
  Building2,
  Users,
  Mail,
  FileText,
  BarChart3,
  Target,
  Activity,
  Calendar,
  Clock,
  Sparkles,
  Globe,
  LogOut,
} from "lucide-react"

import { Button } from "@/components/ui1/button"
import { Input } from "@/components/ui1/input"
import { Badge } from "@/components/ui1/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui1/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui1/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui1/table"

const interviews = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Meta",
    date: "2024-01-15",
    time: "2:00 PM",
    duration: "45 min",
    status: "completed",
    progress: 100,
    score: 85,
    type: "Technical",
    difficulty: "Hard",
    avatar: "M",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Google",
    date: "2024-01-14",
    time: "10:30 AM",
    duration: "60 min",
    status: "completed",
    progress: 100,
    score: 92,
    type: "Technical",
    difficulty: "Medium",
    avatar: "G",
    color: "from-gray-400 to-gray-500",
  },
  {
    id: 3,
    role: "Full Stack Engineer",
    company: "Netflix",
    date: "2024-01-18",
    time: "3:15 PM",
    duration: "50 min",
    status: "scheduled",
    progress: 0,
    score: null,
    type: "System Design",
    difficulty: "Hard",
    avatar: "N",
    color: "from-red-500 to-red-600",
  },
  {
    id: 4,
    role: "Backend Developer",
    company: "Spotify",
    date: "2024-01-19",
    time: "11:00 AM",
    duration: "40 min",
    status: "scheduled",
    progress: 0,
    score: null,
    type: "Technical",
    difficulty: "Medium",
    avatar: "S",
    color: "from-gray-400 to-gray-500",
  },
  {
    id: 5,
    role: "DevOps Engineer",
    company: "Uber",
    date: "2024-01-11",
    time: "4:30 PM",
    duration: "45 min",
    status: "completed",
    progress: 100,
    score: 78,
    type: "Technical",
    difficulty: "Hard",
    avatar: "U",
    color: "from-gray-700 to-gray-800",
  },
  {
    id: 6,
    role: "Software Engineer",
    company: "Airbnb",
    date: "2024-01-10",
    time: "1:00 PM",
    duration: "55 min",
    status: "completed",
    progress: 100,
    score: 88,
    type: "Behavioral",
    difficulty: "Easy",
    avatar: "A",
    color: "from-pink-500 to-pink-600",
  },
]

// Separate interviews into finished and upcoming
const finishedInterviews = interviews.filter((interview) => interview.status === "completed")
const upcomingInterviews = interviews.filter(
  (interview) => interview.status === "scheduled" || interview.status === "in-progress",
)

export default function MocklyDashboard() {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-gray-100 border-gray-300",
          text: "text-gray-700",
          dot: "bg-gray-500",
          label: "Completed",
        }
      case "in-progress":
        return {
          bg: "bg-blue-50 border-blue-200",
          text: "text-blue-700",
          dot: "bg-blue-500",
          label: "In Progress",
        }
      case "scheduled":
        return {
          bg: "bg-amber-50 border-amber-200",
          text: "text-amber-700",
          dot: "bg-amber-500",
          label: "Scheduled",
        }
      default:
        return {
          bg: "bg-gray-50 border-gray-200",
          text: "text-gray-700",
          dot: "bg-gray-500",
          label: "Unknown",
        }
    }
  }

  const getDifficultyConfig = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return {
          bg: "bg-gray-100 border-gray-300",
          text: "text-gray-700",
          icon: "⚪",
        }
      case "Medium":
        return {
          bg: "bg-yellow-50 border-yellow-200",
          text: "text-yellow-700",
          icon: "🟡",
        }
      case "Hard":
        return {
          bg: "bg-red-50 border-red-200",
          text: "text-red-700",
          icon: "🔴",
        }
      default:
        return {
          bg: "bg-gray-50 border-gray-200",
          text: "text-gray-700",
          icon: "⚪",
        }
    }
  }

  const getScoreConfig = (score: number) => {
    if (score >= 90) return { color: "text-gray-700", bg: "bg-gray-100", icon: "🏆" }
    if (score >= 80) return { color: "text-blue-600", bg: "bg-blue-50", icon: "⭐" }
    if (score >= 70) return { color: "text-amber-600", bg: "bg-amber-50", icon: "👍" }
    return { color: "text-red-600", bg: "bg-red-50", icon: "📈" }
  }

  const getTypeConfig = (type: string) => {
    switch (type) {
      case "Technical":
        return { bg: "bg-purple-50 border-purple-200", text: "text-purple-700", icon: "💻" }
      case "System Design":
        return { bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-700", icon: "🏗️" }
      case "Behavioral":
        return { bg: "bg-teal-50 border-teal-200", text: "text-teal-700", icon: "🗣️" }
      default:
        return { bg: "bg-gray-50 border-gray-200", text: "text-gray-700", icon: "📋" }
    }
  }

  const InterviewRow = ({
    interview,
    isLast = false,
    index = 0,
  }: { interview: any; isLast?: boolean; index?: number }) => {
    const statusConfig = getStatusConfig(interview.status)
    const difficultyConfig = getDifficultyConfig(interview.difficulty)
    const typeConfig = getTypeConfig(interview.type)
    const scoreConfig = interview.score ? getScoreConfig(interview.score) : null

    return (
      <TableRow
        className={`
          border-0 cursor-pointer
          group
          ${!isLast ? "border-b border-gray-100/50" : ""}
        `}
        onClick={() => console.log(`Clicked interview ${interview.id}`)}
      >
        <TableCell className="py-6 px-6">
          <div className="flex items-center space-x-4">
            <div
              className={`
                w-12 h-12 bg-gradient-to-br ${interview.color} 
                rounded-xl flex items-center justify-center 
                shadow-lg shadow-${interview.color.split("-")[1]}-500/25
                group-hover:shadow-xl group-hover:shadow-${interview.color.split("-")[1]}-500/40
                group-hover:scale-110 group-hover:rotate-3
                transition-all duration-500 ease-out
                transform-gpu
              `}
            >
              <span className="text-white font-semibold text-lg group-hover:scale-110 transition-transform duration-300">
                {interview.avatar}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-base leading-tight group-hover:text-blue-900 transition-all duration-300 group-hover:translate-x-1">
                {interview.role}
              </p>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1">
                {interview.company}
              </p>
            </div>
          </div>
        </TableCell>

        <TableCell className="py-6 px-4 text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-50/80 backdrop-blur-sm rounded-xl px-4 py-3 group-hover:bg-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-400 ease-out">
            <div className="flex items-center space-x-2 text-gray-900 font-medium">
              <Calendar className="h-4 w-4 text-blue-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm group-hover:font-semibold transition-all duration-300">{interview.date}</span>
            </div>
            <div className="w-px h-5 bg-gradient-to-b from-transparent via-gray-300 to-transparent group-hover:via-blue-300 transition-colors duration-300"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm group-hover:text-gray-800 group-hover:font-medium transition-all duration-300">
                {interview.time}
              </span>
            </div>
          </div>
        </TableCell>

        <TableCell className="py-6 px-4 text-center">
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className={`
                ${typeConfig.bg} ${typeConfig.text} border font-medium px-4 py-2 text-xs 
                group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-1
                transition-all duration-400 ease-out transform-gpu
                backdrop-blur-sm
              `}
            >
              <span className="mr-2 group-hover:scale-125 transition-transform duration-300">{typeConfig.icon}</span>
              {interview.type}
            </Badge>
          </div>
        </TableCell>

        <TableCell className="py-6 px-4 text-center">
          <div className="flex justify-center">
            <Badge
              className={`
                ${difficultyConfig.bg} ${difficultyConfig.text} border font-medium px-4 py-2 text-xs 
                group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-1
                transition-all duration-400 ease-out transform-gpu
                backdrop-blur-sm
              `}
            >
              <span className="mr-2 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                {difficultyConfig.icon}
              </span>
              {interview.difficulty}
            </Badge>
          </div>
        </TableCell>

        <TableCell className="py-6 px-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-24 h-3 bg-gray-200 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-400">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out group-hover:from-blue-400 group-hover:to-purple-400"
                style={{ width: `${interview.progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
              {interview.progress}%
            </span>
          </div>
        </TableCell>

        <TableCell className="py-6 px-4 text-center">
          {interview.score ? (
            <div className="flex flex-col items-center space-y-1">
              {scoreConfig && (
                <div
                  className={`
                    ${scoreConfig?.bg} rounded-xl px-4 py-3 flex items-center space-x-2 
                    group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-2
                    transition-all duration-400 ease-out transform-gpu
                    backdrop-blur-sm
                  `}
                >
                  <span className="text-sm group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">
                    {scoreConfig?.icon}
                  </span>
                  <span
                    className={`font-bold text-xl ${scoreConfig?.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {interview.score}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-xl px-4 py-3 group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-300">
                <span className="text-gray-400 text-sm group-hover:text-blue-500 transition-colors duration-300">
                  Pending
                </span>
              </div>
            </div>
          )}
        </TableCell>

        <TableCell className="py-6 px-4 text-center">
          <div className="flex justify-center">
            <Badge
              className={`
                ${statusConfig.bg} ${statusConfig.text} border font-medium px-4 py-2 text-xs 
                flex items-center space-x-2 
                group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-1
                transition-all duration-400 ease-out transform-gpu
                backdrop-blur-sm
              `}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${statusConfig.dot} group-hover:animate-ping transition-all duration-300`}
              ></div>
              <span className="group-hover:font-semibold transition-all duration-300">{statusConfig.label}</span>
            </Badge>
          </div>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Custom smooth scrolling */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Add a custom style for a thicker shadow and more visible dropdown */}
      <style jsx global>{`
        .profile-dropdown-strong {
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18), 0 2px 8px 0 rgba(0,0,0,0.10);
          background: #f8fafc;
          border-radius: 1.25rem;
          border: 1.5px solid #e5e7eb;
        }
        .profile-avatar-contrast {
          border: 2.5px solid #fff;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
          background: #f1f5f9;
        }
      `}</style>

      {/* Main Dashboard */}
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-between bg-white rounded-full px-3 py-2 shadow-lg hover:shadow-2xl transition-all">
                  <span className="flex items-center">
                    <Avatar className="w-12 h-12 mr-3 profile-avatar-contrast">
                      <AvatarImage src="/evaly.png" alt="User profile" />
                      <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                    <span className="font-extrabold text-xl text-gray-900">Evaly</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="profile-dropdown-strong p-0 min-w-[240px]">
                <div className="px-5 pt-5 pb-3 flex flex-col items-center">
                  <Avatar className="w-16 h-16 mb-2 profile-avatar-contrast">
                    <AvatarImage src="/evaly.png" alt="User profile" />
                    <AvatarFallback>EV</AvatarFallback>
                  </Avatar>
                  <span className="font-bold text-lg text-gray-900">saidhamdrizaev@gmail.com</span>
                </div>
                <div className="py-2">
                  <DropdownMenuItem className="px-5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer font-medium text-gray-900">
                    <span className="mr-2"><Users className="inline h-4 w-4" /></span> Personal Cabinet
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer font-medium text-gray-900">
                    <span className="mr-2"><Building2 className="inline h-4 w-4" /></span> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer font-medium text-gray-900">
                    <span className="mr-2"><FileText className="inline h-4 w-4" /></span> Plans
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer font-medium text-gray-900">
                    <span className="mr-2"><Globe className="inline h-4 w-4" /></span> Language
                  </DropdownMenuItem>
                </div>
                <div className="border-t border-gray-200">
                  <DropdownMenuItem className="px-5 py-2 hover:bg-gray-200 rounded-lg cursor-pointer font-semibold text-red-600">
                    <span className="mr-2"><LogOut className="inline h-4 w-4" /></span> Sign Out
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Quick actions" className="pl-10" />
            </div>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-3 h-4 w-4" />
                Interviews
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <BarChart3 className="mr-3 h-4 w-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <Activity className="mr-3 h-4 w-4" />
                Tasks
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <Target className="mr-3 h-4 w-4" />
                Practice
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Secondary</h3>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  <Bell className="mr-3 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  <FileText className="mr-3 h-4 w-4" />
                  Notes
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  <Mail className="mr-3 h-4 w-4" />
                  Feedback
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">CRM Objects</h3>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  <Building2 className="mr-3 h-4 w-4" />
                  Companies
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-600">
                  <Users className="mr-3 h-4 w-4" />
                  People
                </Button>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col no-scrollbar">
          {/* Content Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-semibold text-gray-900">Interviews</h1>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">+1</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  View settings
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      All interviews
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>All interviews</DropdownMenuItem>
                    <DropdownMenuItem>Completed</DropdownMenuItem>
                    <DropdownMenuItem>Upcoming</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sorted by Date</span>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced filter
                  <Badge variant="secondary" className="ml-2">
                    3
                  </Badge>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Table with Sections - No Scrollbar */}
          <div className="flex-1 overflow-auto overflow-x-hidden smooth-scroll bg-gray-50 p-6 space-y-8 no-scrollbar">
            {/* Upcoming Interviews Section */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h2>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 animate-pulse">
                    {upcomingInterviews.length}
                  </Badge>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50 border-b border-gray-200">
                    <TableHead className="font-semibold text-gray-700 py-4 px-6">Interview Details</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Date & Time</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Type</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Difficulty</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Progress</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Score</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingInterviews.map((interview, index) => (
                    <InterviewRow
                      key={interview.id}
                      interview={interview}
                      isLast={index === upcomingInterviews.length - 1}
                      index={index}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Finished Interviews Section */}
            <div
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Finished Interviews</h2>
                  <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                    {finishedInterviews.length}
                  </Badge>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50 border-b border-gray-200">
                    <TableHead className="font-semibold text-gray-700 py-4 px-6">Interview Details</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Date & Time</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Type</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Difficulty</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Progress</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Score</TableHead>
                    <TableHead className="font-semibold text-gray-700 py-4 px-4 text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {finishedInterviews.map((interview, index) => (
                    <InterviewRow
                      key={interview.id}
                      interview={interview}
                      isLast={index === finishedInterviews.length - 1}
                      index={index}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
