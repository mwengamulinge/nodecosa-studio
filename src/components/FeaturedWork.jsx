import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Clock, Gauge, Server } from 'lucide-react'

const FeaturedWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const metrics = [
    { icon: Clock, value: '42', unit: 'Days', label: 'To Production' },
    { icon: Gauge, value: '<800', unit: 'ms', label: 'Response Time' },
    { icon: Server, value: '99.9', unit: '%', label: 'Uptime' },
  ]

  const techStack = [
    'React', 'Supabase', 'Gemini API', 'Paystack', 'Vercel Edge'
  ]

  return (
    <section ref={ref} id="work" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50/30 to-dark" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 block">// 04. CASE STUDY</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-headline">
            42 Days to
            <br />
            <span className="text-gradient">Production.</span>
          </h2>
        </motion.div>

        {/* Case study card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/5 bg-dark-50/30 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left content */}
              <div className="p-10 lg:p-14">
                {/* Project title */}
                <div className="mb-8">
                  <span className="font-mono text-xs text-muted tracking-widest mb-2 block">
                    THE PROJECT
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    254labs
                  </h3>
                  <p className="text-primary-400 font-medium mt-1">
                    AI Content Engine
                  </p>
                </div>

                {/* Description blocks */}
                <div className="space-y-6 mb-10">
                  <div>
                    <span className="font-mono text-[10px] text-muted tracking-widest block mb-2">
                      THE EXECUTION
                    </span>
                    <p className="text-muted leading-relaxed">
                      From a blank terminal to a fully-functional AI platform in 6 weeks.
                    </p>
                  </div>
                  
                  <div>
                    <span className="font-mono text-[10px] text-muted tracking-widest block mb-2">
                      THE TECH
                    </span>
                    <p className="text-muted leading-relaxed">
                      Edge functions, Vector embeddings, and a sub-second UI.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-muted tracking-widest block mb-2">
                      THE OUTCOME
                    </span>
                    <p className="text-muted leading-relaxed">
                      A production-ready asset that scales automatically to its first 10k users for the cost of a cup of coffee.
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-mono text-muted bg-white/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://254labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  <span>View Live Product</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right metrics */}
              <div className="bg-dark-50/50 p-10 lg:p-14 flex flex-col justify-center">
                <div className="space-y-8">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-6"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                        <metric.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl md:text-5xl font-bold tracking-tight">
                            {metric.value}
                          </span>
                          <span className="text-xl text-muted font-medium">
                            {metric.unit}
                          </span>
                        </div>
                        <span className="text-sm text-muted">
                          {metric.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWork
