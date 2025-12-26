import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
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
            Terms of Service
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
            <h2 className="text-xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted leading-relaxed">
              By accessing or using the Nodecosa Innovation Studio website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <p className="text-muted leading-relaxed">
              Nodecosa Innovation Studio provides software development, API integration, AI/ML systems, backend engineering, and SaaS development services. The specific scope, deliverables, timeline, and pricing for each project are defined in individual project agreements between Nodecosa and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Project Agreements</h2>
            <p className="text-muted leading-relaxed mb-4">
              All client engagements are governed by separate project agreements that outline:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Project scope and deliverables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Timeline and milestones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Pricing and payment terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Intellectual property rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Confidentiality obligations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted leading-relaxed mb-4">
              Unless otherwise specified in a project agreement:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Upon full payment, clients receive ownership of custom code and deliverables created specifically for their project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Nodecosa retains ownership of pre-existing tools, libraries, and frameworks used in development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Nodecosa may use general knowledge and techniques gained during projects for future work</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
            <p className="text-muted leading-relaxed">
              Payment terms are specified in individual project agreements. Generally, projects require an upfront deposit before work begins, with remaining payments due upon milestone completion or project delivery. Late payments may result in project suspension until outstanding balances are settled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Client Responsibilities</h2>
            <p className="text-muted leading-relaxed mb-4">
              Clients agree to:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Provide accurate and complete information necessary for project completion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Respond to communications and provide feedback in a timely manner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Ensure they have the rights to any materials provided to us</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">—</span>
                <span>Make payments according to agreed-upon terms</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              To the maximum extent permitted by law, Nodecosa Innovation Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services. Our total liability for any claims arising from a project shall not exceed the total amount paid by the client for that specific project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Warranties and Disclaimers</h2>
            <p className="text-muted leading-relaxed">
              We provide our services with reasonable skill and care. However, we do not warrant that our services will be uninterrupted, error-free, or meet all of your requirements. Software development inherently involves iterative processes and may require adjustments after initial delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Confidentiality</h2>
            <p className="text-muted leading-relaxed">
              Both parties agree to keep confidential any proprietary information shared during the course of a project. This includes business strategies, technical specifications, and any other sensitive information. Confidentiality obligations survive the termination of any project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Termination</h2>
            <p className="text-muted leading-relaxed">
              Either party may terminate a project agreement with written notice as specified in the individual agreement. Upon termination, the client shall pay for all work completed up to the termination date. Nodecosa will deliver all completed work upon receipt of final payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="text-muted leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Continued use of our services after changes constitutes acceptance of the modified terms. Existing project agreements will be governed by the terms in effect at the time of signing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Kenya.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-muted leading-relaxed">
              For any questions regarding these terms, please contact us at:
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
              Nodecosa Innovation Studio — Nairobi, Kenya
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  )
}

export default TermsOfService
