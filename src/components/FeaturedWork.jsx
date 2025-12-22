import { motion } from 'framer-motion'
import { Users, FileText, Target, ExternalLink } from 'lucide-react'

const FeaturedWork = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Users' },
    { icon: FileText, value: '500K+', label: 'Words' },
    { icon: Target, value: '99%', label: 'Bypass' },
  ]

  return (
    <section id="work" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-effect mb-4">
            <span className="text-sm font-medium text-primary-400">
              Featured Case Study
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">254labs</h2>
            <h3 className="text-2xl text-primary-400 font-semibold mb-6">
              AI Humanizer SaaS Platform
            </h3>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We architected and built 254labs, a leading platform trusted by
              thousands to process AI-generated text. Focus was on
              high-throughput data processing and undetectability algorithms.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-primary-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            <a
              href="https://254labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-lg hover:bg-dark-800/70 transition-all duration-300 group"
            >
              <span className="font-medium">View Client</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 hover:bg-dark-800/70 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-blue-500/20 to-purple-500/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10 w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/50">
                  <div className="w-12 h-12 bg-primary-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Supabase', 'Gemini API', 'Paystack'].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
