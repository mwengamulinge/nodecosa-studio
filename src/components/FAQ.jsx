import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Who owns the website?",
      answer: "You do! Everything is built on your hosting account and registered in your name. You have full control from day one. We're just the builders, not the landlords."
    },
    {
      question: "What about hosting and domains?",
      answer: "You can manage your own (we guide you through the 2-minute setup), or choose our Managed Hosting plan ($30/month) for complete peace of mind. Domain registration is ~$12/year if you handle it, or we can do it for you (+$50 convenience fee)."
    },
    {
      question: "How long does it take?",
      answer: "Landing pages: 1-2 weeks. Full websites: 2-3 weeks. Timeline starts after deposit payment and hosting setup are complete. We provide regular progress updates throughout."
    },
    {
      question: "What if I need changes after launch?",
      answer: "Managed Hosting clients get 1 hour of updates per month included. Additional changes are billed at $50/hour. You can also make updates yourself if you prefer - you own everything."
    },
    {
      question: "Do you work with clients outside Kenya?",
      answer: "Absolutely! We work with startups globally. All communication is remote via email, Zoom, and WhatsApp. We've built sites for clients across multiple time zones."
    },
    {
      question: "What's your revision policy?",
      answer: "All packages include 2 rounds of revisions. We work closely with you during development to ensure we're building what you envisioned, reducing the need for major changes."
    },
    {
      question: "Can I cancel Managed Hosting anytime?",
      answer: "Yes, with 30-day notice. We'll help transfer everything to your control at no extra charge. No hard feelings - your site stays on YOUR hosting account regardless."
    },
    {
      question: "What do you need from me to get started?",
      answer: "Your goals/vision, content (text and images), brand assets (logo, colors), and 50% deposit. We'll guide you through the hosting setup and everything else."
    }
  ]

  return (
    <section className="py-20 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-zinc-800 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <span className="text-left text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-green-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-5 bg-zinc-950">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="mailto:contact@nodecosa.com"
            className="inline-block text-green-500 hover:text-green-400 font-semibold transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}
