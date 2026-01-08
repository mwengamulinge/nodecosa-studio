import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, animate } from 'framer-motion' // Added animate
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

// --- IMPROVED: Premium Scroll Management ---
const ScrollToHash = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small timeout to wait for PageWrapper animation to start
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        
        if (element) {
          const yOffset = -100 // Navbar height + extra breathing room
          const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          
          // Framer Motion spring animation for "luxury" feel
          animate(window.scrollY, targetY, {
            type: "spring",
            stiffness: 45,  // Lower = smoother/slower
            damping: 20,    // Controls the bounce
            mass: 1,
            onUpdate: (latest) => window.scrollTo(0, latest),
          })
        }
      }, 200) 
      return () => clearTimeout(timeoutId)
    } else {
      // Standard scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.6, 
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
      <ScrollToHash />

      <Preloader onComplete={() => setIsLoading(false)} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navbar />
        
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
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
