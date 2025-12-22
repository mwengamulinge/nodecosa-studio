import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Layers, DollarSign, Wrench } from 'lucide-react'

const BlogPage = () => {
  const posts = [
    {
      icon: Layers,
      category: 'Architecture',
      title: 'Architecting for Scale: A 254labs Deep Dive',
      excerpt:
        'How we built infrastructure to handle millions of requests with sub-second latency and zero downtime.',
      readTime: '8 min read',
      slug: 'architecting-for-scale',
      date: 'January 6, 2025',
    },
    {
      icon: DollarSign,
      category: 'Business',
      title: 'Why Poor API Design is a Silent Revenue Killer',
      excerpt:
        'The hidden costs of technical debt and how bad integrations bleed money from your business.',
      readTime: '6 min read',
      slug: 'api-design-revenue',
      date: 'January 13, 2025',
    },
    {
      icon: Wrench,
      category: 'Engineering',
      title: 'The 2025 Guide to Eliminating Technical Debt',
      excerpt:
        'Practical strategies to ship faster without accumulating the kind of debt that slows you down.',
      readTime: '10 min read',
      slug: 'eliminating-technical-debt',
      date: 'January 20, 2025',
    },
  ]

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights on Scalable Engineering
          </h1>
          <p className="text-xl text-gray-400">
            Lessons learned from building high-performance systems.
          </p>
          <div className="w-16 h-1 bg-primary-500 rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {posts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group glass-effect rounded-xl p-8 hover:bg-dark-800/70 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6 block"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogPage
