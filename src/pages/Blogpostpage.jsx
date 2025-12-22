import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar, ArrowLeft } from 'lucide-react'

// Import MDX files
import ArchitectingForScale from '../content/blog/architecting-for-scale.mdx'
import ApiDesignRevenue from '../content/blog/api-design-revenue.mdx'
import EliminatingTechnicalDebt from '../content/blog/eliminating-technical-debt.mdx'

const posts = {
  'architecting-for-scale': {
    component: ArchitectingForScale,
    meta: {
      title: 'Architecting for Scale: A 254labs Deep Dive',
      category: 'Architecture',
      date: 'January 6, 2025',
      readTime: '8 min read',
    },
  },
  'api-design-revenue': {
    component: ApiDesignRevenue,
    meta: {
      title: 'Why Poor API Design is a Silent Revenue Killer',
      category: 'Business',
      date: 'January 13, 2025',
      readTime: '6 min read',
    },
  },
  'eliminating-technical-debt': {
    component: EliminatingTechnicalDebt,
    meta: {
      title: 'The 2025 Guide to Eliminating Technical Debt',
      category: 'Engineering',
      date: 'January 20, 2025',
      readTime: '10 min read',
    },
  },
}

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <section className="pt-32 pb-24 px-6 lg:px-8 relative min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">
            The post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>
    )
  }

  const PostContent = post.component

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 relative min-h-screen">
      <article className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <span className="text-sm font-medium text-primary-400 uppercase tracking-wider">
              {post.meta.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.meta.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-400 mb-12 pb-8 border-b border-dark-700">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.meta.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.meta.readTime}</span>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-primary-400 prose-code:bg-dark-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-dark-800 prose-pre:border prose-pre:border-dark-700">
            <PostContent />
          </div>

          <div className="mt-16 pt-8 border-t border-dark-700">
            <div className="glass-effect rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Scale Your Infrastructure?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how we can architect a solution for your business.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <span>Get My Technical Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </section>
  )
}

export default BlogPostPage
