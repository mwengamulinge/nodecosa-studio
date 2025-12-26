import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Cloud } from 'lucide-react'

const Philosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const principles = [
    {
      icon: Zap,
      title: 'Performance First',
      description: 'If it takes more than 100ms to respond, it\'s broken. We build for the "Instant Web."',
    },
    {
      icon: Brain,
      title: 'AI-Native',
      description: 'We don\'t just add chatbots. We architect systems where LLMs and RAG pipelines are core infrastructure.',
    },
    {
      icon: Cloud,
      title: 'Zero-Ops',
      description: 'We deploy on serverless edge networks. No maintenance windows, no manual scaling, no downtime.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50/50 to-dark" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="kicker mb-4 block">// 02. PHILOSOPHY</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-headline">
            Legacy is the enemy
            <br />
            <span className="text-muted">of scale.</span>
          </h2>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-white/5 bg-dark-50/30 hover:bg-dark-50/50 hover:border-white/10 transition-all duration-500">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <principle.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy
