"use client"
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getCachedImage, ImageKey } from '@/lib/image-cache';

export function MissionVision() {
  // Floating image cards data
const floatingImages: { 
    key: ImageKey; 
    alt: string; 
    position: string; 
    rotation: string; 
    delay: string; 
  }[] = [
    {
      key: "modernHospital",
      alt: "Modern hospital",
      position: "top-20 left-10",
      rotation: "-12deg",
      delay: "0s"
    },
    {
      key: "medicalProfessional",
      alt: "Medical professional",
      position: "top-40 right-16",
      rotation: "8deg",
      delay: "1s"
    },
    {
      key: "patientCareDetail",
      alt: "Patient care",
      position: "bottom-32 left-20",
      rotation: "15deg",
      delay: "2s"
    },
    {
      key: "medicalTech",
      alt: "Medical technology",
      position: "bottom-20 right-10",
      rotation: "-10deg",
      delay: "1.5s"
    },
    {
      key: "medicalProcedure",
      alt: "Medical procedure",
      position: "top-1/3 left-32",
      rotation: "-6deg",
      delay: "2.5s"
    },
    {
      key: "wearableTech",
      alt: "Health technology",
      position: "top-2/3 right-24",
      rotation: "12deg",
      delay: "0.5s"
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-gray-950 via-blue-950/90 to-gray-950 relative overflow-hidden">
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none"></div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)'
        }}
      ></div>

      {/* Floating Image Cards - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
       {floatingImages.map((img, index) => (
          <div
            key={index}
            className={`absolute ${img.position} w-48 h-32 animate-float-slow opacity-30 hover:opacity-50 transition-opacity duration-700`}
            style={{
              transform: `rotate(${img.rotation})`,
              animationDelay: img.delay,
              filter: index % 2 === 0 ? 'blur(0.5px)' : 'blur(0px)'
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-cyan-500/20">
              <ImageWithFallback
                src={getCachedImage(img.key)}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle cyan particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Center spotlight glow */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      ></div>

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Mission Block */}
        <div className="text-center mb-20 lg:mb-28 animate-fade-in">
          {/* Label */}
          <div className="inline-block mb-6">
            <p className="text-xs text-cyan-400 tracking-[0.3em] uppercase">
              Our Mission
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent mt-2 mx-auto"></div>
          </div>

          {/* Main text */}
          <div className="space-y-2 lg:space-y-3">
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              In a country of delay and limited access, we build systems that see earlier,
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              understand deeper, and act faster. So every person stays ahead of illness
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              not behind it.
            </p>
          </div>
        </div>

        {/* Vision Block */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Label */}
          <div className="inline-block mb-6">
            <p className="text-xs text-blue-400 tracking-[0.3em] uppercase">
              Our Vision
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent mt-2 mx-auto"></div>
          </div>

          {/* Main text */}
          <div className="space-y-2 lg:space-y-3">
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              An India where healthcare is always within reach. Driven by intelligence, guided by prevention,
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
              free from barriers. A future where care arrives before crisis.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
            <span className="text-base lg:text-lg">Explore Ocean AI</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}