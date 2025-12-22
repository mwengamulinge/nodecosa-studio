import { motion } from 'framer-motion'
import { GitBranch, Globe, Server } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'High-Conversion User Experiences',
      description:
        'We build web products that load instantly, rank on SEO, and turn visitors into customers.',
    },
    {
      icon: GitBranch,
      title: 'Automated Business Growth',
      description:
        'We build the bridges between your data and the world, eliminating manual work and human error.',
    },
    {
      icon: Server,
      title: 'Infrastructure That Never Sleeps',
      description:
        'Robust, auto-scaling architecture designed for 99.9% uptime at any volume.',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Get
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade engineering without the enterprise timeline.
          </p>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full mt-6" />
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
                className="group glass-effect rounded-xl p-8 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
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
