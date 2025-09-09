import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { motion } from 'motion/react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import {Brain,FileText,BarChart3,Target,Bell,Bookmark,GraduationCap,Settings,Search,Filter,MapPin,Clock,DollarSign,Star,TrendingUp,Users,Calendar,CheckCircle,AlertCircle,ArrowRight,Plus,Upload,User,LogOut,Activity,Menu,X,AlertTriangle,Github,Twitter,Linkedin,Mail,Download,Edit,Zap,University
} from 'lucide-react'

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)


  let Username="Hitean Kumar";
  let University="CGC-COE"
  let Email ="hiteank@gmail.com"
  let Year="3"
  let GPA="8.9"

  
  let skillsetprofile=["React", "Node.js", "Python"   , "Java", "SQL", "Git", "MongoDB"];
  let frontcard=[{ icon: Target, label: "Applications", value: "12", change: "+3 this week", color: "text-primary" },
            { icon: Star, label: "Match Score", value: "69%", change: "Average", color: "text-accent" },
            { icon: Calendar, label: "Interviews", value: "3", change: "Scheduled", color: "text-secondary" },
            { icon: TrendingUp, label: "Profile Views", value: "47", change: "+12 this week", color: "text-primary" }
          ];

  // Sample data for charts
  const applicationData = [
    { month: 'Jan', applied: 5, shortlisted: 2, interviews: 1 },
    { month: 'Feb', applied: 8, shortlisted: 3, interviews: 2 },
    { month: 'Mar', applied: 12, shortlisted: 5, interviews: 3 },
    { month: 'Apr', applied: 15, shortlisted: 7, interviews: 4 },
    { month: 'May', applied: 10, shortlisted: 4, interviews: 2 },
  ]

  const skillsData = [
    { skill: 'React', value: 85, color: '#1E90FF' },
    { skill: 'Node.js', value: 70, color: '#39FF14' },
    { skill: 'Python', value: 65, color: '#9B59B6' },
    { skill: 'TypeScript', value: 80, color: '#f59e0b' },
    { skill: 'AWS', value: 45, color: '#ef4444' },
  ]

  const successData = [
    { name: 'Applied', value: 47, color: '#1E90FF' },
    { name: 'Shortlisted', value: 21, color: '#39FF14' },
    { name: 'Interviews', value: 12, color: '#9B59B6' },
    { name: 'Offers', value: 4, color: '#f59e0b' },
  ]

  const recommendations = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Remote",
      duration: "3 months",
      salary: "$25/hour",
      match: 95,
      skills: ["React", "Node.js", "TypeScript"],
      logo: "TC",
      deadline: "2024-04-15"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataFlow",
      location: "New York, NY",
      type: "Hybrid",
      duration: "4 months",
      salary: "$30/hour",
      match: 88,
      skills: ["Python", "Machine Learning", "SQL"],
      logo: "DF",
      deadline: "2024-04-20"
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "DesignHub",
      location: "Seattle, WA",
      type: "On-site",
      duration: "6 months",
      salary: "$20/hour",
      match: 82,
      skills: ["Figma", "User Research", "Prototyping"],
      logo: "DH",
      deadline: "2024-04-25"
    }
  ]

  const savedInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      status: "Applied",
      appliedDate: "2024-03-15",
      interview: null
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "BrandCo",
      status: "Interview Scheduled",
      appliedDate: "2024-03-10",
      interview: "2024-04-05"
    },
    {
      id: 3,
      title: "DevOps Intern",
      company: "CloudTech",
      status: "Shortlisted",
      appliedDate: "2024-03-08",
      interview: null
    }
  ]

  const skillGaps = [
    { skill: "Docker", importance: 85, current: 20, priority: "high" },
    { skill: "AWS", importance: 90, current: 35, priority: "high" },
    { skill: "GraphQL", importance: 75, current: 60, priority: "medium" },
    { skill: "Kubernetes", importance: 80, current: 10, priority: "high" },
    { skill: "MongoDB", importance: 70, current: 55, priority: "low" }
  ]

  const courses = [
    {
      id: 1,
      title: "Docker for Developers",
      provider: "TechEd",
      duration: "6 hours",
      rating: 4.8,
      price: "Free",
      skillMatch: "Docker"
    },
    {
      id: 2,
      title: "AWS Fundamentals",
      provider: "CloudAcademy",
      duration: "12 hours",
      rating: 4.9,
      price: "$49",
      skillMatch: "AWS"
    },
    {
      id: 3,
      title: "GraphQL Complete Guide",
      provider: "DevCourse",
      duration: "8 hours",
      rating: 4.7,
      price: "$29",
      skillMatch: "GraphQL"
    }
  ]

  const alerts = [
    {
      id: 1,
      type: "deadline",
      message: "Application deadline for TechCorp internship in 3 days",
      priority: "high",
      date: "2024-04-12"
    },
    {
      id: 2,
      type: "interview",
      message: "Interview scheduled with BrandCo tomorrow at 2:00 PM",
      priority: "high",
      date: "2024-04-04"
    },
    {
      id: 3,
      type: "new",
      message: "5 new internship matches found",
      priority: "medium",
      date: "2024-04-03"
    },
    {
      id: 4,
      type: "skill",
      message: "Complete Docker course to improve match rate by 15%",
      priority: "medium",
      date: "2024-04-02"
    }
  ]

  const sidebarItems = [
    { icon: Brain, label: "Recommended Internships", id: "recommendations" },
    { icon: Bookmark, label: "Saved Internships", id: "saved" },
    { icon: Target, label: "Skill Gap", id: "skills" },
    { icon: GraduationCap, label: "Course Recommendations", id: "courses" },
    { icon: Bell, label: "Alerts", id: "alerts" },
  ]

  const navigationItems = [
    { label: "Dashboard", id: "dashboard" },
    { label: "Analytics", id: "analytics" },
    { label: "Profile", id: "profile" },
  ]

  const renderMainContent = () => {
    if (currentView === "analytics") {
      return (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Application Trends */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Your application activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="applied" stroke="#1E90FF" strokeWidth={2} name="Applied" />
                    <Line type="monotone" dataKey="shortlisted" stroke="#39FF14" strokeWidth={2} name="Shortlisted" />
                    <Line type="monotone" dataKey="interviews" stroke="#9B59B6" strokeWidth={2} name="Interviews" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Success Rate */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle>Application Success Rate</CardTitle>
                <CardDescription>Breakdown of your application outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={successData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {successData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Skills */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle>Your Top Skills</CardTitle>
                <CardDescription>Skill proficiency levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={skillsData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis type="number" stroke="#a1a1aa" />
                    <YAxis dataKey="skill" type="category" stroke="#a1a1aa" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1a1a2e', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="value" fill="#1E90FF" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Response Rate</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={68} className="w-24 h-2" />
                    <span className="font-semibold text-accent">68%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Interview Rate</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={25} className="w-24 h-2" />
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Offer Rate</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={33} className="w-24 h-2" />
                    <span className="font-semibold text-secondary">33%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Profile Completeness</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={85} className="w-24 h-2" />
                    <span className="font-semibold text-accent">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }

    if (currentView === "profile") {
      return (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-xl">HK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{Username}</h3>
                    <p className="text-muted-foreground">Computer Science Student</p>
                    <Badge variant="outline" className="mt-2">Active</Badge>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p><span className="font-semibold">Email:</span> {Email}  </p>
                  <p><span className="font-semibold">University:</span>    {University}</p>
                  <p><span className="font-semibold">Year:</span>  {Year}</p>
                  <p><span className="font-semibold">GPA:</span>  {GPA}</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Preferences */}
            <Card className="glass-effect border-primary/20 lg:col-span-2">
              <CardHeader>
                <CardTitle>Skills & Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsetprofile.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Preferred Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Technology", "Fintech", "Healthcare", "E-commerce"].map((industry) => (
                      <Badge key={industry} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Work Preferences</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Work Type</label>
                      <p className="text-sm text-muted-foreground">Remote, Hybrid</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Duration</label>
                      <p className="text-sm text-muted-foreground">3-6 months</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }

    // Default dashboard view
    return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {Username}! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening with your internship search today.</p>
          </div>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Interview
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {frontcard.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">{stat.change}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Upload/Update */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Resume Manager
                </CardTitle>
                <CardDescription>Upload or update your resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Drop your resume here or click to browse</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Current Resume:</span>
                  <span className="text-primary">{Username}_resume.pdf</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Update
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Alerts/Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-accent" />
                    Alerts
                  </div>
                  <Badge variant="destructive">{alerts.filter(a => a.priority === 'high').length}</Badge>
                </CardTitle>
                <CardDescription>Important updates and deadlines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.slice(0, 3).map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.priority === 'high' ? 'bg-destructive' : 'bg-accent'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.date}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-accent" />
                  Quick Actions
                </CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Search New Internships
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Take Skill Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Network Events
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommended Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-primary" />
                  AI Recommended Internships
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Personalized recommendations based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map((internship) => (
                  <Card key={internship.id} className="border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-sm">
                              {internship.logo}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{internship.title}</CardTitle>
                            <CardDescription className="text-sm">{internship.company}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-accent text-accent text-xs">
                          {internship.match}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {internship.duration}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {internship.skills.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                        {internship.skills.length > 2 && (
                          <Badge variant="secondary" className="text-xs">+{internship.skills.length - 2}</Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                          Apply
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Row - Saved Internships and Skill Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Saved Internships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-accent" />
                  Saved Internships
                </CardTitle>
                <CardDescription>Track your applications and progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedInternships.map((internship) => (
                  <div key={internship.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-semibold text-sm">{internship.title}</h4>
                      <p className="text-xs text-muted-foreground">{internship.company}</p>
                      {internship.interview && (
                        <p className="text-xs text-accent">Interview: {internship.interview}</p>
                      )}
                    </div>
                    <Badge 
                      variant={internship.status === 'Applied' ? 'secondary' : 'default'}
                      className={internship.status === 'Interview Scheduled' ? 'border-accent text-accent' : ''}
                    >
                      {internship.status}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Applications
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skill Gap Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-secondary" />
                  Skill Gap Analysis
                </CardTitle>
                <CardDescription>Improve your profile with these skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillGaps.slice(0, 3).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            skill.priority === 'high' ? 'border-destructive text-destructive' :
                            skill.priority === 'medium' ? 'border-accent text-accent' :
                            'border-muted-foreground text-muted-foreground'
                          }`}
                        >
                          {skill.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{skill.current}%</span>
                      </div>
                    </div>
                    <Progress value={skill.current} className="h-2" />
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Take Skill Assessment
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0f0f1a] to-[#1a1a2e]">
      {/* Top Nav bat*/}
      <header className="border-b border-border/50 glass-effect sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden"
                >
                  <Menu className="w-5 h-5" />
                </Button>
                <h1 className="text-2xl font-bold gradient-text">INTERNIFY</h1>
                <Badge variant="outline" className="border-accent text-accent">
                  Pro
                </Badge>
              </div>
              
              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    className={currentView === item.id ? "bg-gradient-to-r from-primary to-secondary" : ""}
                    onClick={() => setCurrentView(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">HK</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} lg:w-64 transition-all duration-300 overflow-hidden`}>
          <div className="glass-effect h-full border-r border-border/50">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Quick Links</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10"
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderMainContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-effect mt-12">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold gradient-text mb-4">InternAI</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Revolutionizing internship discovery with AI-powered recommendations and personalized career guidance.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 InternAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard