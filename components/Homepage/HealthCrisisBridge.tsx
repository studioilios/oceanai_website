import { AlertCircle, Clock, Heart } from 'lucide-react';

const highlights = [
  {
    icon: AlertCircle,
    text: 'Late diagnosis is common'
  },
  {
    icon: Clock,
    text: 'Emergency care is often delayed'
  },
  {
    icon: Heart,
    text: 'Preventive healthcare is still limited'
  }
];

export function HealthCrisisBridge() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-cyan-50/20 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Centered Content */}
        <div className="text-center mb-12">
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            A Growing Health Crisis
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            India is facing a rapid rise in chronic diseases, emergency risks, and limited healthcare access.
          </p>

        </div>

        {/* 3 Inline Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
