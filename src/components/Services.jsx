import { motion } from 'framer-motion'
import { Code2, Smartphone, Server } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'API Integrations',
      description:
        'Seamless connection between complex systems and third-party data sources.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description:
        'Native and cross-platform performance optimized for modern iOS and Android devices.',
    },
    {
      icon: Server,
      title: 'Backend Solutions',
      description:
        'Robust server-side architectures designed for heavy scaling and security.',
    },
  ]

  return (
    <section id="services" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Core Competencies
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
