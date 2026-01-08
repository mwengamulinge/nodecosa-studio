import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FeaturedWork from './components/FeaturedWork'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import BlogPage from './pages/BlogPage'
import Blogpostpage from './pages/Blogpostpage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'

// --- NEW: Scroll Management Component ---
const ScrollToHash = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the DOM is rendered
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          // Offset calculation: window position - navbar height (approx 80px)
          const yOffset = -80 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timeoutId)
    } else {
      // If no hash, scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}

function HomePage() {
  return (
    <PageWrapper>
      {/* Ensure IDs here match your Navbar hrefs (e.g., id="services") */}
      <section id="hero"><Hero /></section>
      <Philosophy />
      <section id="services"><Services /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="pricing"><Pricing /></section>
      <FeaturedWork />
      <Blog />
      <section id="faq"><FAQ /></section>
      <section id="contact"><ContactForm /></section>
    </PageWrapper>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark">
      {/* Handles smooth scrolling to #ids across all pages */}
      <ScrollToHash />

      <Preloader onComplete={() => setIsLoading(false)} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navbar />
        
        <AnimatePresence mode="wait">
          {/* Note: we use location.pathname as key so transitions only trigger on page changes, not hash changes */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/blog" 
              element={
                <PageWrapper>
                  <BlogPage />
                </PageWrapper>
              } 
            />
            <Route 
              path="/blog/:slug" 
              element={
                <PageWrapper>
                  <Blogpostpage />
                </PageWrapper>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <PageWrapper>
                  <PrivacyPolicy />
                </PageWrapper>
              } 
            />
            <Route 
              path="/terms" 
              element={
                <PageWrapper>
                  <TermsOfService />
                </PageWrapper>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
