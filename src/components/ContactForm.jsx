import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Send, CheckCircle } from 'lucide-react'

const ContactForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xgowrpgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={ref} id="contact" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 block">// LET'S BUILD</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-headline mb-6">
            The future won't wait
            <br />
            <span className="text-muted">for your roadmap.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We are currently accepting <span className="text-white font-medium">two new projects</span> for Q1 2026. 
            Let's talk about yours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-white/5 bg-dark-50/30 p-8 md:p-12">
            {isSubmitted ? (
              // Success state
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Message Received</h3>
                <p className="text-muted">
                  We'll review your project details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block font-mono text-xs text-muted tracking-widest mb-3"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-4 bg-dark border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block font-mono text-xs text-muted tracking-widest mb-3"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-4 bg-dark border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block font-mono text-xs text-muted tracking-widest mb-3"
                  >
                    PROJECT DETAILS
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="w-full px-4 py-4 bg-dark border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-400 disabled:opacity-50 disabled:cursor-not-allowed text-dark font-semibold rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Schedule a Technical Audit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Response time note */}
                <p className="text-center text-sm text-muted">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
