import { ArrowRight, Brain, Activity, Heart, Network, Stethoscope, GraduationCap, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';
import { getCachedImage } from '@/lib/image-cache';

const features = [
  {
    icon: Brain,
    title: 'AI Health Intelligence',
    description: 'Advanced machine learning models that understand your unique health patterns and provide intelligent insights.'
  },
  {
    icon: Activity,
    title: 'Continuous Health Monitoring',
    description: 'Real-time tracking of vital health metrics to catch potential issues before they become serious.'
  },
  {
    icon: Heart,
    title: 'Personalized Medical Insights',
    description: 'Tailored health recommendations based on your medical history, lifestyle, and genetic profile.'
  },
  {
    icon: Network,
    title: 'Connected Healthcare Ecosystem',
    description: 'Seamlessly connecting patients, doctors, and health data into a unified intelligent system.'
  }
];

const partners = [
  {
    icon: Stethoscope,
    label: 'Doctors',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: GraduationCap,
    label: 'IIT Kanpur',
    gradient: 'from-cyan-500 to-teal-600'
  },
  {
    icon: Cloud,
    label: 'Cloud AI',
    gradient: 'from-teal-500 to-blue-600'
  }
];

export function About() {
  const heroImg = getCachedImage('techMission');
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 lg:px-8 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ocean AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-cyan-700 font-medium transition-colors">
              About
            </Link>
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Home
            </Link>
            <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-32 lg:py-40">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Geometric AI lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl lg:text-8xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
            About Ocean AI
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building the intelligence layer for the future of healthcare.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full mb-6 border border-cyan-200">
                <span className="text-sm uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-cyan-900 to-blue-900 bg-clip-text text-transparent mb-8 leading-tight">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ocean AI is building a new approach to healthcare where intelligence works continuously 
                  in the background to help people understand and protect their health.
                </p>
                <p>
                  By combining artificial intelligence, medical knowledge, and real-world health data, we 
                  aim to make healthcare more proactive, accessible, and personalized.
                </p>
              </div>
            </div>

            {/* Right side visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-100">
                <ImageWithFallback
                  src={heroImg}
                  alt="Healthcare AI Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-cyan-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">AI Powered</div>
                    <div className="text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      Intelligence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full mb-8 border border-blue-200">
            <span className="text-sm uppercase tracking-wide">Our Vision</span>
          </div>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
            Our Vision
          </h2>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
            <p>
              We believe the future of healthcare will move from reactive treatment to continuous prevention.
            </p>
            <p>
              Ocean AI is designed to become the intelligence layer that connects patients, clinicians, 
              health data, and technology into a smarter healthcare ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Built With Experts */}
      <section className="py-24 lg:py-32 bg-white relative">
        {/* Subtle divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Label */}
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-2">
              Collaborated With
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto"></div>
          </div>

          {/* Partner blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-gray-100/50 hover:border-cyan-200/60 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
              >
                {/* Icon container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300`}>
                  <partner.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <p className="text-base text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">
                  {partner.label}
                </p>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full mb-6 border border-cyan-200">
              <span className="text-sm uppercase tracking-wide">What We're Building</span>
            </div>
            <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              What We Are Building
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-200 rounded-full mb-8 border border-white/20">
            <span className="text-sm uppercase tracking-wide">Our Philosophy</span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-white mb-8 leading-tight">
            Healthcare should not begin at the hospital.
          </h2>
          <p className="text-2xl lg:text-3xl text-cyan-100 mb-6 leading-relaxed">
            It should begin with understanding your body every day.
          </p>
          <p className="text-xl text-cyan-200 leading-relaxed">
            Ocean AI is built around this idea.
          </p>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
            Join Us in Building the Future of Healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            We're actively collaborating with researchers, clinicians, and innovators who share our 
            vision of making healthcare more intelligent, accessible, and proactive.
          </p>
          <button className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300">
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}