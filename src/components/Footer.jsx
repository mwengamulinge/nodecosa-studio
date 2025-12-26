import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Services', href: '#services' },
      { name: 'Work', href: '#work' },
      { name: 'Insights', href: '/blog', isRoute: true },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'API Integration', href: '#services' },
      { name: 'AI & ML Systems', href: '#services' },
      { name: 'Backend Engineering', href: '#services' },
      { name: 'SaaS Development', href: '#services' },
    ],
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nodecosa', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/nodecosa', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/nodecosa', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@nodecosa.online', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-white/5 py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-mono text-sm tracking-widest">
                NODE<span className="text-primary-400">COSA</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
              High-velocity engineering studio. Building AI-native, 
              edge-distributed applications for founders who ship fast.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 hover:bg-primary-500/20 border border-white/5 hover:border-primary-500/30 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-muted group-hover:text-primary-400 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-mono text-xs text-muted tracking-widest mb-6">
              COMPANY
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-muted hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-mono text-xs text-muted tracking-widest mb-6">
              SERVICES
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {currentYear} Nodecosa Innovation Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a
              href="/privacy"
              className="text-muted hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
