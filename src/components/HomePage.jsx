import { useState, useEffect, useCallback } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { Progress } from './ui/progress'
import { motion, AnimatePresence } from 'motion/react'
import {
  Brain,
  FileText,
  BarChart3,
  Target,
  Bell,
  Bookmark,
  GraduationCap,
  Settings,
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Plus,
  Upload,
  User,
  LogOut,
  Activity,
  Menu,
  X,
  AlertTriangle,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Download,
  Edit,
  Zap,
  Heart,
  Share2,
  BookmarkPlus,
  ExternalLink,
  Building2,
  GraduationCap as Graduation,
  Code,
  Palette,
  BarChart,
  Briefcase,
  ChevronDown,
  SlidersHorizontal
} from 'lucide-react'

const HomePage = () => {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [sortBy, setSortBy] = useState('match')
  const [showFilters, setShowFilters] = useState(false)
  const [savedInternships, setSavedInternships] = useState(new Set())
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Sample internship data with more variety
  const initialInternships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Remote",
      duration: "3 months",
      salary: "$25/hour",
      match: 95,
      skills: ["React", "Node.js", "TypeScript", "Python"],
      logo: "TC",
      deadline: "2024-04-15",
      description: "Build scalable web applications using modern technologies. Work with senior engineers on real-world projects.",
      applicants: 127,
      posted: "2 days ago",
      category: "technology",
      company_size: "500-1000",
      benefits: ["Health Insurance", "Learning Budget", "Flexible Hours"]
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
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      logo: "DF",
      deadline: "2024-04-20",
      description: "Analyze large datasets and build predictive models. Experience with cutting-edge ML technologies.",
      applicants: 89,
      posted: "1 day ago",
      category: "data",
      company_size: "100-500",
      benefits: ["Remote Work", "Mentorship", "Project Ownership"]
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
      skills: ["Figma", "User Research", "Prototyping", "Adobe Creative"],
      logo: "DH",
      deadline: "2024-04-25",
      description: "Design user-centered experiences for millions of users. Collaborate with product teams on innovative solutions.",
      applicants: 156,
      posted: "3 days ago",
      category: "design",
      company_size: "50-100",
      benefits: ["Design Tools", "Portfolio Support", "Networking Events"]
    },
    {
      id: 4,
      title: "Marketing Analytics Intern",
      company: "GrowthLabs",
      location: "Austin, TX",
      type: "Remote",
      duration: "3 months",
      salary: "$18/hour",
      match: 76,
      skills: ["Google Analytics", "Excel", "SQL", "Tableau"],
      logo: "GL",
      deadline: "2024-05-01",
      description: "Drive data-driven marketing decisions. Analyze campaign performance and user behavior patterns.",
      applicants: 94,
      posted: "4 days ago",
      category: "marketing",
      company_size: "20-50",
      benefits: ["Course Reimbursement", "Flexible Schedule", "Team Events"]
    },
    {
      id: 5,
      title: "DevOps Engineering Intern",
      company: "CloudTech",
      location: "Denver, CO",
      type: "Hybrid",
      duration: "4 months",
      salary: "$28/hour",
      match: 91,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      logo: "CT",
      deadline: "2024-04-18",
      description: "Build and maintain cloud infrastructure. Learn industry-standard DevOps practices and tools.",
      applicants: 67,
      posted: "1 day ago",
      category: "technology",
      company_size: "200-500",
      benefits: ["Cloud Certifications", "Hardware Budget", "Conference Tickets"]
    },
    {
      id: 6,
      title: "Product Management Intern",
      company: "InnovateCo",
      location: "Boston, MA",
      type: "On-site",
      duration: "5 months",
      salary: "$24/hour",
      match: 79,
      skills: ["Product Strategy", "User Research", "Analytics", "Roadmapping"],
      logo: "IC",
      deadline: "2024-04-30",
      description: "Shape product direction and strategy. Work directly with customers and cross-functional teams.",
      applicants: 143,
      posted: "2 days ago",
      category: "product",
      company_size: "100-200",
      benefits: ["Product Training", "Customer Access", "Leadership Mentoring"]
    }
  ]

  // Alerts and notifications
  const alerts = [
    {
      id: 1,
      type: "deadline",
      message: "TechCorp internship deadline in 3 days",
      priority: "high",
      time: "2h ago"
    },
    {
      id: 2,
      type: "match",
      message: "New 95% match found",
      priority: "medium",
      time: "4h ago"
    },
    {
      id: 3,
      type: "interview",
      message: "Interview confirmed for tomorrow",
      priority: "high",
      time: "6h ago"
    }
  ]

  // Skills gap data
  const skillGaps = [
    { skill: "AWS", gap: 75, priority: "high" },
    { skill: "Docker", gap: 60, priority: "medium" },
    { skill: "GraphQL", gap: 45, priority: "low" }
  ]

  // Course recommendations
  const courses = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      provider: "AWS Training",
      duration: "8 hours",
      rating: 4.8,
      price: "Free"
    },
    {
      id: 2,
      title: "Docker Fundamentals",
      provider: "TechEd",
      duration: "6 hours",
      rating: 4.7,
      price: "$39"
    }
  ]

  const filterOptions = [
    { value: 'all', label: 'All Internships', count: initialInternships.length },
    { value: 'technology', label: 'Technology', count: initialInternships.filter(i => i.category === 'technology').length },
    { value: 'design', label: 'Design', count: initialInternships.filter(i => i.category === 'design').length },
    { value: 'data', label: 'Data Science', count: initialInternships.filter(i => i.category === 'data').length },
    { value: 'marketing', label: 'Marketing', count: initialInternships.filter(i => i.category === 'marketing').length },
    { value: 'product', label: 'Product', count: initialInternships.filter(i => i.category === 'product').length }
  ]

  const sortOptions = [
    { value: 'match', label: 'Best Match' },
    { value: 'salary', label: 'Highest Salary' },
    { value: 'deadline', label: 'Deadline' },
    { value: 'posted', label: 'Recently Posted' }
  ]

  // Initialize internships
  useEffect(() => {
    setInternships(initialInternships)
  }, [])

  // Filter and sort internships
  const filteredAndSortedInternships = internships
    .filter(internship => selectedFilter === 'all' || internship.category === selectedFilter)
    .sort((a, b) => {
      switch (sortBy) {
        case 'match':
          return b.match - a.match
        case 'salary':
          return parseInt(b.salary.replace(/\D/g, '')) - parseInt(a.salary.replace(/\D/g, ''))
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        case 'posted':
          return a.posted.localeCompare(b.posted)
        default:
          return 0
      }
    })

  // Simulate infinite scroll
  const loadMoreInternships = useCallback(() => {
    if (loading) return
    
    setLoading(true)
    setTimeout(() => {
      const newInternships = initialInternships.map(internship => ({
        ...internship,
        id: internship.id + internships.length,
        posted: `${Math.floor(Math.random() * 7) + 1} days ago`
      }))
      setInternships(prev => [...prev, ...newInternships])
      setLoading(false)
    }, 1000)
  }, [loading, internships.length])

  // Handle scroll for infinite loading
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return
      loadMoreInternships()
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMoreInternships])

  const handleSaveInternship = (id) => {
    setSavedInternships(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'technology': return <Code className="w-4 h-4" />
      case 'design': return <Palette className="w-4 h-4" />
      case 'data': return <BarChart className="w-4 h-4" />
      case 'marketing': return <TrendingUp className="w-4 h-4" />
      case 'product': return <Briefcase className="w-4 h-4" />
      default: return <Building2 className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0f0f1a] to-[#1a1a2e]">
      {/* Top Navigation */}
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
                <h1 className="text-2xl font-bold gradient-text">InternAI</h1>
                <Badge variant="outline" className="border-accent text-accent">
                  Pro
                </Badge>
              </div>
              
              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                <Button variant="default" className="bg-gradient-to-r from-primary to-secondary">
                  Home
                </Button>
                <Button variant="ghost" className="hover:bg-primary/10 transition-all duration-300">
                  Dashboard
                </Button>
                <Button variant="ghost" className="hover:bg-primary/10 transition-all duration-300">
                  Analytics
                </Button>
                <Button variant="ghost" className="hover:bg-primary/10 transition-all duration-300">
                  Profile
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" className="hover:bg-accent/10 transition-all duration-300">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">JD</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive transition-all duration-300">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-effect border-r border-border/50 overflow-hidden"
            >
              <div className="p-6 space-y-6">
                {/* Quick Actions */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-accent" />
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      Search Internships
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Upload className="w-4 h-4 mr-2" />
                      Update Resume
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Target className="w-4 h-4 mr-2" />
                      Skill Assessment
                    </Button>
                  </div>
                </div>

                {/* Alerts */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Bell className="w-4 h-4 mr-2 text-accent" />
                    Alerts
                  </h3>
                  <div className="space-y-3">
                    {alerts.map((alert) => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-3 rounded-lg bg-muted/50 border-l-2 border-accent"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm">{alert.message}</p>
                            <p className="text-xs text-muted-foreground">{alert.time}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${
                            alert.priority === 'high' ? 'bg-destructive' : 'bg-accent'
                          }`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skill Gap */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-secondary" />
                    Skill Gaps
                  </h3>
                  <div className="space-y-3">
                    {skillGaps.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{skill.skill}</span>
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
                        </div>
                        <Progress value={skill.gap} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Recommendations */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                    Recommended Courses
                  </h3>
                  <div className="space-y-3">
                    {courses.map((course) => (
                      <div key={course.id} className="p-3 rounded-lg bg-muted/30">
                        <h4 className="text-sm font-medium">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">{course.provider}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-accent">{course.price}</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 mr-1" />
                            <span className="text-xs">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Header with Search and Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Discover Internships ✨</h1>
                <p className="text-muted-foreground">AI-powered recommendations just for you</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="hover:bg-primary/10"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search internships, companies, skills..."
                className="pl-10 glass-effect border-primary/20 focus:border-primary/40"
              />
            </div>

            {/* Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 glass-effect rounded-lg border border-primary/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Filter by Category</h4>
                      <div className="flex flex-wrap gap-2">
                        {filterOptions.map((option) => (
                          <Button
                            key={option.value}
                            variant={selectedFilter === option.value ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedFilter(option.value)}
                            className={selectedFilter === option.value ? "bg-gradient-to-r from-primary to-secondary" : ""}
                          >
                            {option.label} ({option.count})
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Sort by</h4>
                      <div className="flex flex-wrap gap-2">
                        {sortOptions.map((option) => (
                          <Button
                            key={option.value}
                            variant={sortBy === option.value ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSortBy(option.value)}
                            className={sortBy === option.value ? "bg-gradient-to-r from-accent to-secondary" : ""}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Internship Feed */}
          <div className="space-y-6">
            <AnimatePresence>
              {filteredAndSortedInternships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full max-w-2xl mx-auto"
                >
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    {/* Card Header */}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                              {internship.logo}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-xl">{internship.title}</CardTitle>
                            <CardDescription className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1" />
                              {internship.company}
                              <span className="mx-2">•</span>
                              {internship.company_size} employees
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={`border-accent text-accent ${internship.match >= 90 ? 'animate-pulse-glow' : ''}`}
                          >
                            {internship.match}% match
                          </Badge>
                          {getCategoryIcon(internship.category)}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Description */}
                      <p className="text-muted-foreground">{internship.description}</p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/20 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">Location</p>
                            <p className="text-sm font-medium">{internship.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <div>
                            <p className="text-xs text-muted-foreground">Duration</p>
                            <p className="text-sm font-medium">{internship.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-secondary" />
                          <div>
                            <p className="text-xs text-muted-foreground">Salary</p>
                            <p className="text-sm font-medium">{internship.salary}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">Applicants</p>
                            <p className="text-sm font-medium">{internship.applicants}</p>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-sm font-semibold mb-2">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="hover:bg-primary/20 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <p className="text-sm font-semibold mb-2">Benefits</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Posted {internship.posted}
                          </span>
                          <span className="flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            Deadline: {internship.deadline}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleSaveInternship(internship.id)}
                            className={`transition-all duration-300 ${
                              savedInternships.has(internship.id) 
                                ? 'bg-accent/20 border-accent text-accent' 
                                : 'hover:bg-accent/10'
                            }`}
                          >
                            <BookmarkPlus className="w-4 h-4 mr-2" />
                            {savedInternships.has(internship.id) ? 'Saved' : 'Save'}
                          </Button>
                          <Button 
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transition-all duration-300"
                            size="sm"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Loading Indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center py-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-4 h-4 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </motion.div>
            )}
          </div>
        </main>

        {/* Mobile Sidebar Toggle */}
        {!sidebarOpen && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="fixed bottom-4 right-4 z-50 lg:hidden glass-effect"
          >
            <Menu className="w-4 h-4" />
          </Button>
        )}
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
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Social Links</a></li>
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

export default HomePage