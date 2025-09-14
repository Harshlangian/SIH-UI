import { useState, useContext } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useNavigate } from 'react-router-dom';
import {Brain,FileText,BarChart3,Target,Zap,Bell,Bookmark,GraduationCap,Activity,Upload,Search,TrendingUp,Users,Github,Twitter,Linkedin,Mail
} from 'lucide-react'
import { Switch } from './ui/switch'
import { ThemeProviderContext } from "./ThemeProvider";

const LandingPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeProviderContext);

  const features = [
    {
      icon: Brain,
      title: "AI-based Internship Recommendations",
      description: "Smart algorithms match you with internships based on your skills, interests, and career goals."
    },
    {
      icon: FileText,
      title: "Resume Upload & Parsing",
      description: "Upload your resume and let our AI extract key skills and experiences for better matching."
    },
    {
      icon: BarChart3,
      title: "Personalized Dashboard",
      description: "Track your applications, view recommendations, and monitor your progress all in one place."
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description: "Identify missing skills for your dream internships and get personalized improvement recommendations."
    },
    {
      icon: Zap,
      title: "Hybrid Recommendations",
      description: "Combine AI insights with human expertise for the most accurate internship matches."
    },
    {
      icon: Bell,
      title: "Smart Alerts & Notifications",
      description: "Never miss application deadlines with intelligent notifications and reminders."
    },
    {
      icon: Bookmark,
      title: "Saved Internships",
      description: "Save interesting opportunities and create custom lists for easy organization."
    },
    {
      icon: GraduationCap,
      title: "Course Recommendations",
      description: "Get course suggestions to fill skill gaps and enhance your internship applications."
    },
    {
      icon: Activity,
      title: "Analytics Dashboard",
      description: "Detailed insights into your application performance and market trends."
    }
  ]


  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Upload your resume and let our AI parse your skills and experience"
    },
    {
      icon: Search,
      title: "Get Recommendations",
      description: "Receive personalized internship recommendations based on your profile"
    },
    {
      icon: Bookmark,
      title: "Track & Save",
      description: "Save interesting opportunities and track your application progress"
    },
    {
      icon: TrendingUp,
      title: "Improve Skills",
      description: "Follow our recommendations to enhance your skills and boost your chances"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#0f0f1a] to-[#1a1a2e] relative">
       <div className="absolute top-8 right-8 z-10 flex items-center space-x-2">
        <span className="text-sm font-medium">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        <Switch
            checked={theme === "dark"}
            onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 animate-pulse-glow opacity-30"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
             backgroundImage: ` `// to be enter
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary animate-float">
              🚀 AI-Powered Career Matching
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Find Your Perfect Internship with AI
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Personalized recommendations, skill gap analysis, smart alerts
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl animate-pulse-glow"
                onClick={() => navigate('/login')}
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating  shapes in background*/}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
      </section>



      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful Features for Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to find and secure the perfect internship
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.09 }}
              >
                <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVybnNoaXAlMjBvZmZpY2V8ZW58MXx8fHwxNzU2NjE4Mjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in just 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-br from-primary to-secondary scale-110' 
                    : 'bg-muted'
                }`}>
                  <step.icon className={`w-8 h-8 ${activeStep === index ? 'text-white' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">InternAI</h3>
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
                <li><a href="#" className-="hover:text-primary transition-colors">Blog</a></li>
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

export default LandingPage