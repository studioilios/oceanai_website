import { getCachedImage } from '@/lib/image-cache';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HealthcareAccessGap() {
  const insuranceAccess = getCachedImage("insuranceAccess")
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={insuranceAccess}
          alt="Healthcare Insurance Access"
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Strong Dark Ocean Blue Overlay (65%) */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/70 via-blue-950/65 to-cyan-900/70"></div>
        
        {/* Additional gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left">
          
          {/* Small Label */}
          <div className="mb-3">
            <p className="text-cyan-300/80 text-xs lg:text-sm tracking-wider uppercase">
              Healthcare Access
            </p>
          </div>

          {/* Heading (Medium Size) */}
          <h2 className="text-3xl lg:text-4xl text-white mb-6 leading-tight">
            Health Insurance Gap in India
          </h2>

          {/* Main Stat (Prominent but not oversized) */}
          <div className="mb-4 relative">
            {/* Soft glow behind number */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl"></div>
            <div className="relative text-5xl lg:text-6xl text-white leading-tight">
              1.2 Billion
            </div>
          </div>

          {/* Supporting Line */}
          <p className="text-lg lg:text-xl text-cyan-50 mb-4 leading-relaxed">
            people lack adequate health insurance
          </p>

          {/* Description (Shortened) */}
          <p className="text-base lg:text-lg text-cyan-100/70 leading-relaxed max-w-2xl">
            Limited access delays treatment and increases healthcare burden.
          </p>

        </div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}