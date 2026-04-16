import { Brain, Shield, Zap, Users, FileText, Heart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Multi-Agent AI',
    description: 'Intelligent AI agents work together to provide comprehensive health analysis, diagnosis support, and personalized treatment recommendations.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Blockchain Security',
    description: 'Decentralized blockchain technology ensures your medical records are secure, private, and accessible only by you.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Real-Time Insights',
    description: 'Get instant access to medical insights, health trends, and preventive care recommendations powered by advanced analytics.',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    icon: FileText,
    title: 'Smart Medical Records',
    description: 'All your health data in one place. Accessible, organized, and automatically synchronized across all your healthcare providers.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Heart,
    title: 'AI Doctor Summaries',
    description: 'Complex medical reports translated into clear, understandable summaries by AI, so you always know what\'s happening with your health.',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Universal Access',
    description: 'Integration with NGOs, government programs, and insurance providers ensures healthcare support for everyone, everywhere.',
    gradient: 'from-blue-500 to-indigo-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full mb-4 border border-cyan-200">
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Everything You Need for Better Health
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive platform that combines cutting-edge technology with compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}