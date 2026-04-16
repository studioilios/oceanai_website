import {
  Activity,
  Mail,
  MessageSquare,
  Briefcase,
  Terminal,
} from "lucide-react";
const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#" },
    { name: "Security", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Support", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "HIPAA Compliance", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">Ocean AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Reinventing healthcare by bringing intelligence, access, and
              affordability into one unified system.
            </p>
            <div className="flex gap-3">
              {/* Twitter Replacement */}
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#1DA1F2] transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>

              {/* LinkedIn Replacement */}
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#0077B5] transition-all group"
              >
                <Briefcase className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>

              {/* GitHub Replacement */}
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#333] transition-all group"
              >
                <Terminal className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>

              {/* Mail (Still in Lucide) */}
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transition-all group"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Ocean AI. All rights reserved.</p>
          <p className="text-gray-400 flex items-center gap-2">
            Made with <span className="text-cyan-400">❤️</span> for a healthier
            world
          </p>
        </div>
      </div>
    </footer>
  );
}
