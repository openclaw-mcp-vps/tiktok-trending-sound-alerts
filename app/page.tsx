export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          For TikTok Creators
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Get alerts when sounds go{" "}
          <span className="text-[#58a6ff]">viral on TikTok</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-xl mb-10">
          We monitor TikTok for rapidly growing sounds and alert you before they
          peak — so you can ride the wave, not miss it.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start for $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            "Real-time sound tracking",
            "Growth velocity analysis",
            "Email & webhook alerts",
            "Early trend detection"
          ].map((f) => (
            <span
              key={f}
              className="text-sm bg-[#161b22] border border-[#30363d] text-[#c9d1d9] px-4 py-2 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex justify-center px-4 py-16" id="pricing">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">
            Pro Plan
          </p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$11</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited sound monitoring",
              "Instant email alerts",
              "Webhook integrations",
              "Growth velocity dashboard",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does sound trend detection work?",
              a: "We continuously monitor TikTok's sound data and calculate growth velocity. When a sound's usage spikes beyond our threshold, you get an alert immediately."
            },
            {
              q: "How will I receive alerts?",
              a: "Alerts are sent via email and optionally via webhook so you can pipe them into Slack, Discord, or any automation tool you use."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} TikTok Trending Sound Alerts. All rights reserved.
      </footer>
    </main>
  );
}
