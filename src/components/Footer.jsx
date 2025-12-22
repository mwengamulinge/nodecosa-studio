import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Services', href: '#services' },
      { name: 'Capabilities', href: '#capabilities' },
      { name: 'Work', href: '#work' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'API Integration', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'Backend Engineering', href: '#services' },
      { name: 'SaaS Development', href: '#services' },
    ],
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@nodecosa.com', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-gray-800 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                NODE<span className="text-gradient">COSA</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Innovation Studio specializing in precision engineering for modern
              software. Building the invisible backbone of the web.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nodecosa Innovation Studio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}

export default Footer
