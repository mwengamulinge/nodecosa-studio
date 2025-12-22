import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import FeaturedWork from './components/FeaturedWork'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import Blogpostpage from './pages/Blogpostpage'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Capabilities />
      <FeaturedWork />
      <Blog />
      <ContactForm />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
