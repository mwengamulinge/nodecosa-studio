import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Work', href: '/#work' },
    { name: 'Insights', href: '/blog' },
    { name: 'FAQ', href: '/#faq' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-mono text-sm tracking-widest outline-none">
            NODE<span className="text-primary-400">COSA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-400 text-dark text-sm font-semibold rounded-lg transition-all active:scale-95"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-muted hover:text-white transition-colors p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-2xl rounded-2xl mt-4 border border-white/5"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted text-lg font-medium hover:text-white py-2 border-b border-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Added Start Project to Mobile */}
                <Link
                  to="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-5 py-4 bg-primary-500 text-dark text-center font-bold rounded-xl"
                >
                  Start Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
