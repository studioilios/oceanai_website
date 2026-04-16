import {
  Stethoscope,
  GraduationCap,
  Cloud,
  Activity,
  FileText,
  Dna,
  Folder,
  Pill,
  ClipboardList,
  BookOpen,
  Globe,
  ShieldCheck,
  User,
  Hospital,
  ArrowRight,
  Building2,
  CreditCard,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getCachedImage } from "@/lib/image-cache";

const partners = [
  {
    icon: Stethoscope,
    label: "Doctors",
  },
  {
    icon: GraduationCap,
    label: "IIT Kanpur",
  },
  {
    icon: Cloud,
    label: "Cloud AI",
  },
  {
    icon: Heart,
    label: "Ayushman Bharat Digital Mission",
  },
  {
    icon: CreditCard,
    label: "Razorpay",
  },
  {
    icon: Building2,
    label: "Healthcare Institutions",
  },
];

const healthDataSources = [
  { icon: Activity, label: "Wearables", color: "from-cyan-500 to-blue-500" },
  {
    icon: FileText,
    label: "Lab Reports",
    color: "from-blue-500 to-indigo-500",
  },
  { icon: Dna, label: "Genetics", color: "from-indigo-500 to-purple-500" },
  {
    icon: Folder,
    label: "Medical Records",
    color: "from-purple-500 to-pink-500",
  },
  { icon: Pill, label: "Medications", color: "from-pink-500 to-rose-500" },
  {
    icon: ClipboardList,
    label: "Screenings",
    color: "from-rose-500 to-cyan-500",
  },
];

const medicalSources = [
  { icon: BookOpen, label: "Clinical Research" },
  { icon: FileText, label: "Medical Journals" },
  { icon: Globe, label: "Global Health Data" },
  { icon: ShieldCheck, label: "Clinical Guidelines" },
];

const priya_sharma = getCachedImage("priya_sharma");
const rajesh_sharma = getCachedImage("rajesh_sharma");
const meena_patel = getCachedImage("meena_patel");

rajesh_sharma;
const testimonials = [
  {
    quote:
      "Ocean AI helped me understand my health reports and connected me with the right specialist. My treatment started on time.",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: priya_sharma,
  },
  {
    quote:
      "The AI assistant explained my diabetes risk factors clearly. I made lifestyle changes early and avoided complications.",
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    image: rajesh_sharma,
  },
  {
    quote:
      "During an emergency, Ocean AI found blood donors nearby within minutes. It saved my daughter's life.",
    name: "Meena Patel",
    location: "Ahmedabad, Gujarat",
    image: meena_patel,
  },
];

export function Credibility() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-cyan-50/20 to-white relative overflow-hidden">
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Subtle divider line */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Testimonials Section */}
        <div className="mb-20 lg:mb-28">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-3">
              See how Ocean AI is changing lives
            </h2>
            <p
              className="text-xl lg:text-2xl text-gray-500 italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Life with Ocean AI
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[3/4]"
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Quote */}
                  <p className="text-white text-sm lg:text-base leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <p className="text-white mb-0.5">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm text-gray-400 tracking-wider mb-12">
            Built with expertise from
          </h2>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mb-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-cyan-600 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]">
                  <partner.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  {partner.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Card Layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1 - Health Data Layer */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg shadow-cyan-500/5 border border-gray-100 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
            {/* Visual */}
            <div className="relative h-72 mb-8 flex items-center justify-center">
              {/* Central AI Node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/30 animate-pulse">
                  <Activity className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                {/* Glow effect */}
                <div className="absolute w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Floating Data Source Tabs */}
              {healthDataSources.map((source, index) => {
                const angle = index * 60 * (Math.PI / 180);
                const radius = 110;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={index}
                    className="absolute flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-md border border-gray-100 text-xs group-hover:shadow-lg transition-all duration-300"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${source.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <source.icon
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-gray-700 whitespace-nowrap">
                      {source.label}
                    </span>
                  </div>
                );
              })}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                {healthDataSources.map((_, index) => {
                  const angle = index * 60 * (Math.PI / 180);
                  const radius = 110;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="url(#dataGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  );
                })}
                <defs>
                  <linearGradient
                    id="dataGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-lg text-center text-gray-800 leading-relaxed">
              All Your Health Data, Connected in One Intelligent System
            </h3>
          </div>

          {/* Card 2 - Medical Intelligence Layer */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg shadow-blue-500/5 border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            {/* Visual */}
            <div className="relative h-72 mb-8 flex items-center justify-center p-6">
              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
              </div>

              {/* Grid of Medical Sources */}
              <div className="relative grid grid-cols-2 gap-6 w-full">
                {medicalSources.map((source, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 group-hover:border-blue-200 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <source.icon
                        className="w-6 h-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center leading-tight">
                      {source.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* AI Brain Icon in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full border-2 border-blue-300 flex items-center justify-center shadow-xl">
                  <Activity
                    className="w-8 h-8 text-blue-600 animate-pulse"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <h3 className="text-lg text-center text-gray-800 leading-relaxed">
              Trained on Advanced Medical Research and Clinical Guidelines
            </h3>
          </div>

          {/* Card 3 - Doctor Collaboration Layer */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg shadow-indigo-500/5 border border-gray-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 lg:col-span-1 md:col-span-2">
            {/* Visual */}
            <div className="relative h-72 mb-8 flex flex-col items-center justify-center gap-4 px-4">
              {/* Patient-AI Conversation */}
              <div className="w-full max-w-sm space-y-3">
                {/* Patient message */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-gray-700">
                    What do my results mean?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex items-start gap-2 justify-end">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white">
                    Analyzing your health data...
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Escalation indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500 my-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span>Escalating to clinicians...</span>
                <ArrowRight className="w-4 h-4 text-cyan-500" />
              </div>

              {/* Doctor Profile Card */}
              <div className="w-full max-w-sm bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100 shadow-lg">
                <div className="flex items-center gap-4">
                  {/* Doctor avatar */}
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <User className="w-7 h-7 text-white" />
                  </div>

                  {/* Doctor info */}
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-900 mb-0.5">
                      Dr. Sarah Johnson
                    </h4>
                    <p className="text-xs text-gray-600">Cardiologist</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Hospital className="w-3 h-3 text-indigo-600" />
                      <span className="text-xs text-indigo-600">
                        Johns Hopkins
                      </span>
                    </div>
                  </div>

                  {/* Verified badge */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Hospital logos */}
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-indigo-200/50">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Hospital className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Mayo Clinic</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Hospital className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Cleveland Clinic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <h3 className="text-lg text-center text-gray-800 leading-relaxed">
              AI Insights Supported by Real Medical Experts
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
