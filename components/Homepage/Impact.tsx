import { getCachedImage } from '@/lib/image-cache';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Globe, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { icon: Globe, value: '150+', label: 'Countries Served', gradient: 'from-blue-500 to-cyan-600' },
  { icon: Users, value: '2M+', label: 'Lives Impacted', gradient: 'from-cyan-500 to-blue-600' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', gradient: 'from-amber-500 to-orange-600' },
  { icon: Award, value: '50+', label: 'Healthcare Partners', gradient: 'from-emerald-500 to-teal-600' }
];

export function Impact() {
  const universalHealth = getCachedImage("universalHealth")
  return (
    <section id="impact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full mb-4 border border-cyan-200">
              Global Impact
            </div>
            <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Making Healthcare a Universal Right
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ocean AI isn't just an app — it is the foundation of a new global healthcare ecosystem, 
              where quality care is not a privilege but a universal right.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Affordable for Everyone</h3>
                  <p className="text-gray-600">Breaking down financial barriers with integrated support from NGOs and government programs.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Accessible Anywhere</h3>
                  <p className="text-gray-600">Cloud-based platform accessible from any device, in any location, at any time.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-2xl border border-cyan-100">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Intelligent Care</h3>
                  <p className="text-gray-600">AI-powered insights that rival the world's best medical experts, available to everyone.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={universalHealth}
                alt="Diverse people representing universal healthcare"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent rounded-3xl"></div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}