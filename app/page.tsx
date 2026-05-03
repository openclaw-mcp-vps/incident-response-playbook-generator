export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          DevOps Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Custom<br />
          <span className="text-[#58a6ff]">Incident Response Playbooks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Answer a few questions about your tech stack, team size, and infrastructure — get a tailored, downloadable step-by-step incident response procedure in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $35/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to respond faster</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$35</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Guided questionnaire for any stack",
              "Unlimited playbook generations",
              "Downloadable PDF & Markdown",
              "Team size & role-aware steps",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What information do I need to provide?",
              a: "Just answer a short questionnaire about your tech stack (cloud provider, services, languages), team size, and on-call structure. No technical expertise required beyond knowing your own setup."
            },
            {
              q: "Can I download the generated playbooks?",
              a: "Yes. Every playbook can be exported as a PDF or Markdown file, ready to drop into your runbooks, Notion, Confluence, or any documentation system."
            },
            {
              q: "Is this suitable for small teams?",
              a: "Absolutely. The generator adapts procedures to your team size — whether you're a solo engineer or a 50-person SRE team, the playbooks reflect realistic roles and escalation paths."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Incident Response Playbook Generator. All rights reserved.
      </footer>
    </main>
  );
}
