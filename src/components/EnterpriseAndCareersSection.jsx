export default function EnterpriseAndCareersSection() {
  return (
    <section className="bg-[#121212] text-gray-300 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Top dotted divider */}
        <div className="border-t border-dashed border-pink-500/70 mb-14" />

        {/* Enterprise Section */}
        <h2 className="text-white font-mono text-2xl md:text-3xl mb-6">
          For the Enterprise – Invest in outcomes, not tools
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-400 max-w-4xl">
          <p>
            Want to scale AI-first development to your entire org? Get tailored
            workflows, custom integrations, and cutting-edge advice.
          </p>

          <p>
            Deeprefactor&apos;s expert engineers will ship in the trenches with
            you and your team until everyone is a{" "}
            <span className="text-white">100x engineer</span>.
          </p>

          <p>
            Shoot us an email at{" "}
            <a
              href="mailto:evan@deeprefactor.pro"
              className="text-pink-400 hover:underline"
            >
              evan@deeprefactor.pro
            </a>
            , mention your team size and current AI development stack.
          </p>
        </div>

        {/* Middle dotted divider */}
        <div className="border-t border-dashed border-pink-500/70 my-16" />

        {/* Careers Section */}
        <h2 className="text-white font-mono text-2xl md:text-3xl mb-6">
          Join the team building the future of codegen
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-400 max-w-4xl">
          <p>Love hacking on and extending coding agents?</p>
          <p>
            Are you obsessed with clean code and complex cloud architecture
            problems?
          </p>
          <p>Are you a 99.9th percentile Claude Code user?</p>

          {/* <p>
            Drop us a line at{" "}
            <a
              href="https://humanlayer.dev/jobs"
              className="text-pink-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              humanlayer.dev/jobs
            </a>
            .
          </p> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-700/50 pt-6 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>Company Overview</span>
            <span>|</span>
            <span>Careers</span>
            <span>|</span>
            <span>Terms of Use</span>
            <span>|</span>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>GitHub</span>
            <span>|</span>
            <span>X</span>
            <span>|</span>
            <span>Discord</span>
            <span>|</span>
            <span>YouTube</span>
          </div>

          <div>© 2025 Deeprefactor</div>
        </div>
      </footer>
    </section>
  );
}
