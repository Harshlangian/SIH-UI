import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { ArrowRight, Eye, Chrome, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to your account</p>
        </div>

        <form
          className="bg-gray-800 p-8 rounded-xl shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full bg-gray-700 border-gray-600 placeholder-gray-500 text-white rounded-md"
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full bg-gray-700 border-gray-600 placeholder-gray-500 text-white rounded-md"
              />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Checkbox id="remember" className="border-gray-600 bg-gray-700" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                Remember me
              </label>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md">
            Sign In
          </Button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-xs text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-gray-700 border-gray-600 hover:bg-gray-600"
            >
              <Chrome className="mr-2 h-5 w-5" /> Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-700 border-gray-600 hover:bg-gray-600"
            >
              <Apple className="mr-2 h-5 w-5" /> Sign in with Apple
            </Button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account?{' '}
          <a href="#" onClick={() => navigate("/")} className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
