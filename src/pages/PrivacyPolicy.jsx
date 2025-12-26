import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const lastUpdated = 'December 26, 2025'

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <span className="kicker mb-4 block">// LEGAL</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-headline mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-10"
        >
          <section>
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted leading-relaxed">
              Nodecosa Innovation Studio ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted leading-relaxed mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Submit a contact form (name, email address, project details)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Communicate with us via email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Engage our services as a client</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Respond to your inquiries and provide requested services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Communicate with you about projects and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Improve our website and services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted leading-relaxed">
              Our website uses Formspree to process contact form submissions. When you submit a form, your data is transmitted through their servers. We also use Vercel for website hosting. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
            <p className="text-muted leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are retained for up to 24 months unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Request access to your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Request correction of inaccurate data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Withdraw consent at any time</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted leading-relaxed">
              Our website uses essential cookies required for basic site functionality. We do not use tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="mt-4">
              <a 
                href="mailto:hello@nodecosa.online" 
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                hello@nodecosa.online
              </a>
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <p className="text-sm text-muted">
              This policy is governed by the laws of Kenya.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}

export default PrivacyPolicy
