import { useState } from 'react'
import { Button } from './ui/button'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import HomePage from './HomePage'
import { Home, LayoutDashboard, Zap } from 'lucide-react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed right-0 top-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-effect rounded-xl px-6 py-3 border border-primary/20">
          <div className="flex flex-col items-center space-y-4">
            <Button
              variant={currentPage === 'landing' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentPage('landing')}
              className={currentPage === 'landing' ? 'bg-gradient-to-r from-primary to-secondary' : 'hover:bg-primary/10 transition-all duration-300'}
            >
              <Home className="w-4 h-4 mr-2" />
              Landing
            </Button>
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentPage('home')}
              className={currentPage === 'home' ? 'bg-gradient-to-r from-accent to-primary' : 'hover:bg-accent/10 transition-all duration-300'}
            >
              <Zap className="w-4 h-4 mr-2" />
              Feed
            </Button>
            <Button
              variant={currentPage === 'dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setCurrentPage('dashboard')}
              className={currentPage === 'dashboard' ? 'bg-gradient-to-r from-secondary to-primary' : 'hover:bg-secondary/10 transition-all duration-300'}
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-10">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'dashboard' && <Dashboard />}
      </div>
    </div>
  )
}