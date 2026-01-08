export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We discuss your goals, audience, and vision. You complete a brief questionnaire.",
      timeline: "Days 1-2"
    },
    {
      number: "02",
      title: "Setup",
      description: "You create a hosting account (we guide you). Domain gets connected. 50% deposit secures your spot.",
      timeline: "Day 3"
    },
    {
      number: "03",
      title: "Build",
      description: "We develop your site with regular progress updates. You review and provide feedback.",
      timeline: "Week 1-2"
    },
    {
      number: "04",
      title: "Launch",
      description: "Your site goes live on your custom domain. Full documentation and training provided.",
      timeline: "Day 15"
    },
    {
      number: "05",
      title: "Support",
      description: "Optional managed hosting ($30/month) or DIY - your choice. You own everything.",
      timeline: "Ongoing"
    }
  ]

  return (
    <section className="py-20 bg-zinc-950" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold mb-2">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple. Transparent. Professional. From first conversation to launch in 2-3 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 via-green-500 to-transparent"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-green-500 transition-colors">
                    <span className="text-green-500 text-sm font-semibold">{step.timeline}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="mailto:contact@nodecosa.com"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}
