import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, User, Lock } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background with metallic curves */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-screen h-screen "
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs className="z-10">
            <linearGradient id="metallic1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="50%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
            <linearGradient id="metallic2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9ca3af" />
              <stop offset="50%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
          </defs>

          {/* Large flowing curves */}
          <path d="M-100 200 Q200 100 400 200 T800 150 L800 0 L-100 0 Z" fill="url(#metallic1)" opacity="0.8" />
          <path d="M-100 300 Q300 200 500 300 T900 250 L900 100 L-100 100 Z" fill="url(#metallic2)" opacity="0.6" />
          <path d="M-100 400 Q250 300 450 400 T800 350 L800 200 L-100 200 Z" fill="url(#metallic1)" opacity="0.4" />

          {/* Smaller accent curves */}
          <ellipse
            cx="150"
            cy="450"
            rx="80"
            ry="30"
            fill="url(#metallic2)"
            opacity="0.3"
            transform="rotate(-15 150 450)"
          />
          <ellipse
            cx="650"
            cy="100"
            rx="60"
            ry="20"
            fill="url(#metallic1)"
            opacity="0.5"
            transform="rotate(25 650 100)"
          />
        </svg>

        {/* Red accent dots */}
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="text-[red] text-2xl font-bold">Internify</div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            HOME
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            ABOUT US
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            CONTACT
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
            LOG IN
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between px-6 py-12">
        {/* Welcome Text */}
  <h1 className="text-zinc-600 text-6xl font-bold leading-tight">
  Welcome Back!
</h1>


        {/* Login Card */}
        <div className="border-[10px] border-zinc-700 bg-white rounded-3xl p-8 w-96 shadow-2xl">
          {/* Header with red dot */}
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Log in</h2>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Username Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User size={20} />
              </div>
              <Input
                type="text"
                placeholder="Username"
                className="pl-12 h-12 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Lock size={20} />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-12 pr-12 h-12 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} className="rounded" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <Button className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg font-medium">Log in</Button>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="border-t border-gray-200 flex-1"></div>
              <span className="px-4 text-gray-400 text-sm">Or</span>
              <div className="border-t border-gray-200 flex-1"></div>
            </div>

            {/* Sign Up Button */}
            <Button
              variant="secondary"
              className="w-full h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
