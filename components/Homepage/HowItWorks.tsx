import { UserPlus, Scan, Bot, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up & Connect',
    description: 'Create your account and securely connect your existing medical records. Our blockchain technology ensures complete data privacy.',
    gradient: 'from-blue-500 to-cyan-600',
    number: '01'
  },
  {
    icon: Scan,
    title: 'AI Analysis',
    description: 'Our multi-agent AI system analyzes your health data, identifying patterns, risks, and opportunities for preventive care.',
    gradient: 'from-cyan-500 to-blue-600',
    number: '02'
  },
  {
    icon: Bot,
    title: 'Personalized Insights',
    description: 'Receive clear, actionable health insights tailored to your unique profile. Get AI-powered summaries of medical reports.',
    gradient: 'from-amber-500 to-orange-600',
    number: '03'
  },
  {
    icon: HeartPulse,
    title: 'Continuous Care',
    description: '24/7 health monitoring, automated insurance workflows, and seamless coordination with healthcare providers and support programs.',
    gradient: 'from-emerald-500 to-teal-600',
    number: '04'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-cyan-700 rounded-full mb-4 border border-cyan-200 shadow-sm">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            How Ocean AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your healthcare experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden group">
                <div className={`absolute top-0 right-0 text-8xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-5 group-hover:opacity-10 transition-opacity`}>
                  {step.number}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute top-6 right-6 w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {index + 1}
                </div>
                <h3 className="text-xl text-gray-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}