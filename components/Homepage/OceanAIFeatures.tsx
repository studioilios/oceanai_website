import { Stethoscope, Shield, UserCog, Network } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Doctor 24/7',
    description: 'Access intelligent health guidance anytime, anywhere.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Government & Private Insurance Integrated',
    description: 'Seamlessly connect with insurance systems for faster and smarter healthcare access.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: UserCog,
    title: 'Personalized AI Companion',
    description: 'Understands your health data, lifestyle, and history to guide better decisions.',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Network,
    title: 'Interactive Healthcare AI',
    description: 'Engage with an intelligent system that continuously learns and adapts to your health needs.',
    gradient: 'from-purple-500 to-pink-600'
  }
];

export function OceanAIFeatures() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-cyan-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            What Ocean AI Does
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Intelligent healthcare designed to be continuous, personalized, and accessible.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-cyan-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Soft hover glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-900 mb-4 leading-snug group-hover:text-cyan-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
