import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'

const Hero = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Kicker */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="kicker inline-flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              // 01. HIGH-VELOCITY STUDIO
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-headline leading-[0.95] mb-8"
          >
            Software at the
            <br />
            <span className="text-gradient">speed of thought.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Nodecosa is a high-velocity engineering studio. We build AI-native, 
            edge-distributed, and zero-debt applications for founders who refuse 
            to settle for "good enough."
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-dark font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span>Ship your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            {/* Secondary CTA */}
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              <span>View the Stack</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-muted tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
