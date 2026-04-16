import { Heart, Activity, Scan, Car, TrendingUp, Shield } from 'lucide-react';

const statistics = [
  {
    icon: Heart,
    label: 'Heart Disease',
    number: '31%',
    description: 'of deaths in India are caused by cardiovascular disease.',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'from-rose-50 to-pink-50'
  },
  {
    icon: Activity,
    label: 'Diabetes',
    number: '100M+',
    description: 'Indians are living with diabetes.',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'from-cyan-50 to-blue-50'
  },
  {
    icon: Scan,
    label: 'Cancer',
    number: '1 in 9',
    description: 'Indians may develop cancer during their lifetime.',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    icon: Car,
    label: 'Road Accidents',
    number: '150,000+',
    description: 'people die every year in India due to road accidents.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-50'
  },
  {
    icon: TrendingUp,
    label: 'Hypertension',
    number: '1 in 4',
    description: 'Indian adults suffer from high blood pressure.',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    icon: Shield,
    label: 'Health Insurance',
    number: '~60%',
    description: 'of Indians do not have health insurance coverage.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50'
  }
];

export function HealthcareChallenge() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-cyan-50/10 to-white relative overflow-hidden">
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Light AI glow elements */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            India's Healthcare Challenge
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Millions of people in India face serious health risks due to chronic diseases, accidents, 
            delayed diagnosis, and limited healthcare access.
          </p>
        </div>

        {/* Statistics Grid - 3 cards per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-base text-gray-700">{stat.label}</span>
                </div>

                {/* Large Number */}
                <div className={`text-5xl lg:text-6xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 leading-none relative`}>
                  {stat.number}
                  {/* Subtle glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-cyan-100/50 shadow-lg">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Many health problems in India are detected too late or treated too late.
            </p>
            <p className="text-lg lg:text-xl bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-relaxed">
              Ocean AI is building intelligent healthcare to detect risks earlier and support better health decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}