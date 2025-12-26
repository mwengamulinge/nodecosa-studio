import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Clock, Layers, DollarSign, Wrench } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const posts = [
    {
      icon: Layers,
      category: 'ARCHITECTURE',
      title: 'Architecting for Scale: A 254labs Deep Dive',
      excerpt:
        'How we built infrastructure to handle millions of requests with sub-second latency and zero downtime.',
      readTime: '8 min read',
      slug: 'architecting-for-scale',
    },
    {
      icon: DollarSign,
      category: 'BUSINESS',
      title: 'Why Poor API Design is a Silent Revenue Killer',
      excerpt:
        'The hidden costs of technical debt and how bad integrations bleed money from your business.',
      readTime: '6 min read',
      slug: 'api-design-revenue',
    },
    {
      icon: Wrench,
      category: 'ENGINEERING',
      title: 'The 2025 Guide to Eliminating Technical Debt',
      excerpt:
        'Practical strategies to ship faster without accumulating the kind of debt that slows you down.',
      readTime: '10 min read',
      slug: 'eliminating-technical-debt',
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
    <section ref={ref} id="insights" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="kicker mb-4 block">// 05. FROM THE LAB</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-headline mb-6">
            Insights on
            <br />
            <span className="text-muted">Scalable Engineering</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Lessons learned from building high-performance systems.
          </p>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.article key={index} variants={itemVariants}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full p-8 rounded-2xl border border-white/5 bg-dark-50/20 hover:bg-dark-50/40 hover:border-primary-500/20 transition-all duration-500"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-muted group-hover:text-primary-400 transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] text-muted tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-400 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary-400 text-xs font-medium">
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-200"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
