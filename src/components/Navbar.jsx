import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Work', href: '/#work' },
    { name: 'Insights', href: '/blog' },
  ]

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    
    // If it's a hash link and we're on the home page, scroll to section
    if (href.startsWith('/#') && isHomePage) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              NODE<span className="text-gradient">COSA</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link
              to="/#contact"
              className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Start Project
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Link
                to="/#contact"
                className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium text-center transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
