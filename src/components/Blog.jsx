import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Layers, DollarSign, Wrench } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      icon: Layers,
      category: 'Architecture',
      title: 'Architecting for Scale: A 254labs Deep Dive',
      excerpt:
        'How we built infrastructure to handle millions of requests with sub-second latency and zero downtime.',
      readTime: '8 min read',
      slug: 'architecting-for-scale',
    },
    {
      icon: DollarSign,
      category: 'Business',
      title: 'Why Poor API Design is a Silent Revenue Killer',
      excerpt:
        'The hidden costs of technical debt and how bad integrations bleed money from your business.',
      readTime: '6 min read',
      slug: 'api-design-revenue',
    },
    {
      icon: Wrench,
      category: 'Engineering',
      title: 'The 2025 Guide to Eliminating Technical Debt',
      excerpt:
        'Practical strategies to ship faster without accumulating the kind of debt that slows you down.',
      readTime: '10 min read',
      slug: 'eliminating-technical-debt',
    },
  ]

  return (
    <section id="insights" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-effect mb-4">
            <span className="text-sm font-medium text-primary-400">
              From the Lab
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights on Scalable Engineering
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lessons learned from building high-performance systems.
          </p>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group glass-effect rounded-xl p-8 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col h-full block"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-lg hover:bg-dark-800/70 transition-all duration-300 group"
          >
            <span className="font-medium">View All Posts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
