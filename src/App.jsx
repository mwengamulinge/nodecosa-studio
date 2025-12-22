import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Capabilities from './components/Capabilities'
import FeaturedWork from './components/FeaturedWork'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Capabilities />
      <FeaturedWork />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
