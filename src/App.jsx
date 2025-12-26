import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import BlogPage from './pages/BlogPage'
import Blogpostpage from './pages/Blogpostpage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

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
      <Hero />
      <Philosophy />
      <Services />
      <FeaturedWork />
      <Blog />
      <ContactForm />
    </PageWrapper>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark">
      {/* Preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {/* Main content - fades in after preloader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
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
          </Routes>
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
        </AnimatePresence>
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
