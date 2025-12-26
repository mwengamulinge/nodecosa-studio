import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    { name: 'Work', href: '/#work' },
    { name: 'Insights', href: '/blog' },
  ]

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    
    if (href.startsWith('/#') && isHomePage) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-mono text-sm tracking-widest">
              NODE<span className="text-primary-400">COSA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-400 text-dark text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Start Project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted hover:text-white transition-colors duration-200 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted hover:text-white transition-colors duration-200 py-2"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
                <a
                  href="#contact"
                  className="mt-2 px-5 py-3 bg-primary-500 hover:bg-primary-400 text-dark text-sm font-semibold rounded-lg text-center transition-all duration-200"
                  onClick={() => handleNavClick('#contact')}
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
