export default function Pricing() {
  return (
    <section className="py-20 bg-black" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-green-500 text-sm font-semibold mb-2">TRANSPARENT PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            No hidden fees. No surprises. Just great websites at fair prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Landing Page */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-green-500">$500</span>
            </div>
            <p className="text-gray-400 mb-6">
              Perfect for product launches, campaigns, or simple brand presence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Single high-conversion page
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Mobile responsive design
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Contact form integration
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                1-2 weeks delivery
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                2 revision rounds
              </li>
            </ul>
            <a 
              href="mailto:contact@nodecosa.com" 
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-colors"
            >
              Get Started →
            </a>
          </div>

          {/* Multi-Page Website */}
          <div className="bg-zinc-900 rounded-2xl p-8 border-2 border-green-500 relative hover:scale-105 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Multi-Page Website</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-green-500">$1,200</span>
            </div>
            <p className="text-gray-400 mb-6">
              Ideal for established businesses needing comprehensive online presence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Up to 5 custom pages
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Full React/modern stack
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Conversion-optimized design
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Analytics integration
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                2-3 weeks delivery
              </li>
            </ul>
            <a 
              href="mailto:contact@nodecosa.com" 
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-colors"
            >
              Get Started →
            </a>
          </div>

          {/* Managed Hosting */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Managed Hosting</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-green-500">$30</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-gray-400 mb-6">
              Let us handle all the technical stuff while you focus on your business.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Enterprise hosting infrastructure
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                SSL certificate & security
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Performance monitoring
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                1 hour of updates/month
              </li>
              <li className="flex items-start text-gray-300">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Priority support (24hr response)
              </li>
            </ul>
            <a 
              href="mailto:contact@nodecosa.com" 
              className="block w-full text-center border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-black font-semibold py-3 rounded-lg transition-colors"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Add-ons */}
        <div className="text-center text-gray-400">
          <p className="text-sm">
            <span className="font-semibold">Add-ons:</span> Domain Registration (+$50) • Extra Pages (+$150/each) • SEO Setup (+$200)
          </p>
        </div>
      </div>
    </section>
  )
}
