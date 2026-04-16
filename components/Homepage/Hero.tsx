import { ArrowRight, Activity, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';
import { getCachedImage } from '@/lib/image-cache';

export function Hero() {
   const techMission = getCachedImage("techMission")
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-8 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ocean AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">
              About
            </Link>
            <a href="#features" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-cyan-600 transition-colors">
              How It Works
            </a>
            <a href="#impact" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Impact
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full mb-6 border border-cyan-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Revolutionizing Global Healthcare</span>
            </div>
            <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Your Personal Health Guardian
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ocean AI brings intelligence, access, and affordability into one unified healthcare system. 
              Powered by multi-agent AI, blockchain, and real-time medical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-cyan-200 text-cyan-700 rounded-xl hover:border-cyan-400 hover:shadow-lg transition-all">
                Watch Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100 shadow-sm">
                <div className="text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-sm text-gray-600">AI Health Support</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">100%</div>
                <div className="text-sm text-gray-600">Data Privacy</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-100 shadow-sm">
                <div className="text-3xl bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent mb-1">Global</div>
                <div className="text-sm text-gray-600">Accessibility</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={techMission}
                alt="Healthcare Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-cyan-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Health Score</div>
                  <div className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Excellent</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border border-blue-100">
              <div className="text-sm text-gray-500 mb-1">AI Analysis</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -z-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}