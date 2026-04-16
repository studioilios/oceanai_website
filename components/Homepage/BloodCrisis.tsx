import { getCachedImage } from '@/lib/image-cache';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BloodCrisis() {
  const bloodCrisis = getCachedImage("bloodCrisisHero") 
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={bloodCrisis}
          alt="Blood Emergency Healthcare"
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Strong Dark Red/Rose Overlay (65%) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/70 via-rose-950/65 to-red-900/70"></div>
        
        {/* Additional gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left">
          
          {/* Small Label */}
          <div className="mb-3">
            <p className="text-red-300/80 text-xs lg:text-sm tracking-wider uppercase">
              Healthcare Emergency
            </p>
          </div>

          {/* Heading (Medium Size) */}
          <h2 className="text-3xl lg:text-4xl text-white mb-6 leading-tight">
            Blood Availability Crisis in India
          </h2>

          {/* Main Stat (Prominent but not oversized) */}
          <div className="mb-4 relative">
            {/* Soft glow behind number */}
            <div className="absolute inset-0 bg-red-400/20 blur-3xl"></div>
            <div className="relative text-5xl lg:text-6xl text-white leading-tight">
              84,000+
            </div>
          </div>

          {/* Supporting Line */}
          <p className="text-lg lg:text-xl text-red-50 mb-4 leading-relaxed">
            people die every week due to lack of blood access
          </p>

          {/* Description (Shortened) */}
          <p className="text-base lg:text-lg text-red-100/70 leading-relaxed max-w-2xl">
            Delayed transfusions during emergencies lead to preventable deaths.
          </p>

        </div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-red-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-rose-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-red-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}