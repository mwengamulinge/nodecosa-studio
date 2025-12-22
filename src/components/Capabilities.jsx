import { motion } from 'framer-motion'
import { Shield, Layers, Zap, Globe, CheckCircle2 } from 'lucide-react'

const Capabilities = () => {
  const features = [
    { icon: Shield, label: 'Enterprise Security Standards' },
    { icon: Layers, label: 'Scalable Architecture' },
    { icon: Zap, label: '99.9% Uptime Guarantee' },
    { icon: Globe, label: 'Global Delivery' },
  ]

  const specializations = [
    'Automation Tools',
    'Fintech Apps',
    'Data Processing',
    'SaaS Development',
  ]

  return (
    <section id="capabilities" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineered for Scale
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We utilize the latest stacks to ensure your infrastructure is
              future-proof, secure, and lightning fast. Our focus is on
              automation and efficiency.
            </p>

            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  </div>
                  <span className="text-lg text-gray-300">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {specializations.map((spec, index) => {
              const icons = [Shield, Layers, Zap, Globe]
              const Icon = icons[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-8 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{spec}</h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
