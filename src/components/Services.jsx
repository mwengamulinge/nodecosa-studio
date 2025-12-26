import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, Monitor, Sparkles, RefreshCw } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Database,
      title: 'Hyper-Scale Backends',
      description: 'Hardened API layers and real-time databases built on Supabase and PostgreSQL.',
      tag: 'INFRASTRUCTURE',
    },
    {
      icon: Monitor,
      title: 'High-Fidelity Frontends',
      description: 'Next.js and React interfaces that feel like native desktop apps.',
      tag: 'INTERFACES',
    },
    {
      icon: Sparkles,
      title: 'Intelligence Layers',
      description: 'Custom Gemini and OpenAI integrations that automate complex business logic.',
      tag: 'AI / ML',
    },
    {
      icon: RefreshCw,
      title: 'Product Modernization',
      description: 'Transforming monolithic "spaghetti" code into modular, type-safe microservices.',
      tag: 'REFACTORING',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="services" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="kicker mb-4 block">// 03. CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-headline mb-6">
            Engineering,
            <br />
            <span className="text-muted">not just "Coding."</span>
          </h2>
          <p className="text-muted text-lg max-w-xl">
            We don't just write code. We architect systems designed to grow with your business.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-white/5 bg-dark-50/20 hover:bg-dark-50/40 hover:border-primary-500/20 transition-all duration-500">
                {/* Tag */}
                <span className="font-mono text-[10px] text-primary-400 tracking-widest mb-6 block">
                  {service.tag}
                </span>
                
                {/* Icon + Title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-primary-400 group-hover:bg-primary-500/10 transition-all duration-300">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight pt-1">
                    {service.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-muted leading-relaxed pl-14">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-px bg-primary-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
