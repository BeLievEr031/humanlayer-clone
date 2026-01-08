export default function FeaturesTerminal() {
  return (
    <section className="bg-[#111111] text-gray-300 font-mono px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Feature 1 */}
        <div className="border-t border-dotted border-white/20 pt-10">
          <h3 className="text-white font-semibold text-lg">
            Superhuman for Claude Code
          </h3>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-3xl">
            Keyboard-first workflows designed for builders who value speed and control.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="border-t border-dotted border-white/20 pt-10">
          <h3 className="text-white font-semibold text-lg">
            Advanced Context Engineering
          </h3>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-3xl">
            Scale AI-first dev to your entire team, without devolving into a chaotic slop-fest.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="border-t border-dotted border-white/20 pt-10">
          <h3 className="text-white font-semibold tracking-widest text-lg">
            MULTICLAUDE
          </h3>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-3xl">
            Run Claude Code sessions in parallel. Worktrees? Done. Remote cloud workers? You got it.
          </p>
        </div>

        {/* Pink Divider */}
        <div className="border-t border-dotted border-pink-500/70 pt-10" />

        {/* Testimonial */}
        <div className="bg-[#1a1a1a] p-6 md:p-8 flex gap-4 items-start">
          <div className="w-1 bg-pink-500 shrink-0" />
          <div>
            <p className="italic text-gray-300 text-sm md:text-base leading-relaxed">
              This has improved my productivity (and token consumption) by at least 50%.
              Taking a superhuman style approach just makes soo much sense.
              <br />
              <br />
              Also, its so freaking cool to look back at all the work you've done in a day.
            </p>
            <p className="mt-4 text-gray-500 text-sm">
              — Tyler Brown · Founder, Revlo.ai
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
