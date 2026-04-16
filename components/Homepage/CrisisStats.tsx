import { AlertTriangle, Droplet, Hospital, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getCachedImage } from '@/lib/image-cache';
type ColorKey = 'red' | 'orange' | 'yellow';

const crisisPoints :{
  icon: any;
  stat: string;
  label: string;
  description: string;
  detail: string;
  color: ColorKey; 
}[] = [
  {
    icon: Droplet,
    stat: '2.5M',
    label: 'Deaths per year',
    description: 'due to lack of blood availability',
    detail: 'A crisis caused by poor awareness, slow coordination, and inefficient systems — not scarcity.',
    color: 'red'
  },
  {
    icon: Hospital,
    stat: '1.6M',
    label: 'Deaths per year',
    description: 'due to lack of medical facilities and affordability',
    detail: 'Rural communities, low-income families, and underserved patients struggle to access timely care.',
    color: 'orange'
  },
  {
    icon: TrendingDown,
    stat: 'Millions',
    label: 'Fall into poverty',
    description: 'because of medical expenses',
    detail: 'Healthcare has become a financial burden instead of a basic need.',
    color: 'yellow'
  }
];

const colorClasses = {
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-100 text-red-600',
    stat: 'text-red-600',
    border: 'border-red-200'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    stat: 'text-orange-600',
    border: 'border-orange-200'
  },
  yellow: {
    bg: 'bg-yellow-50',
    icon: 'bg-yellow-100 text-yellow-600',
    stat: 'text-yellow-600',
    border: 'border-yellow-200'
  }
};

export function CrisisStats() {
  const healthcareRural = getCachedImage("healthcareRural")
  return (
    <section id="crisis" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>⚕️ The Healthcare Crisis</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            India's Most Critical Healthcare Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India faces one of the world's deepest healthcare gaps. These are preventable tragedies 
            — and Ocean AI exists to change this reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {crisisPoints.map((point, index) => (
            <div
              key={index}
              className={`${colorClasses[point.color].bg} border-2 ${colorClasses[point.color].border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colorClasses[point.color].icon} mb-6`}>
                <point.icon className="w-7 h-7" />
              </div>
              <div className={`text-4xl ${colorClasses[point.color].stat} mb-2`}>
                ❌ {point.stat}
              </div>
              <div className="text-lg text-gray-900 mb-2">{point.label}</div>
              <div className="text-gray-700 mb-4">{point.description}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <ImageWithFallback
            src={healthcareRural}
            alt="Healthcare in India"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="text-3xl lg:text-4xl mb-4">
                Ocean AI Exists to Change This Reality
              </h3>
              <p className="text-xl text-gray-200 max-w-2xl">
                A unified AI ecosystem built to save millions of lives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}