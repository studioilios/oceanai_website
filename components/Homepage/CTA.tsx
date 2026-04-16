import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getCachedImage } from '@/lib/image-cache';

export function CTA() {
  const medicalAiBg = getCachedImage("medicalAiBg")
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={medicalAiBg}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">
          Ready to Transform Your Healthcare?
        </h2>
        <p className="text-xl text-cyan-100 mb-12 leading-relaxed">
          Join millions who have already taken control of their health with Ocean AI. 
          Experience the future of healthcare today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl hover:bg-white/20 transition-all">
            <Mail className="w-5 h-5" />
            Contact Sales
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-cyan-100">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free 30-day trial</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}