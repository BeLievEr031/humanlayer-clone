export default function ContextEngineeringSection() {
  return (
    <section className="bg-[#111111] text-gray-300 py-24 px-6">
      {/* Top dotted line */}
      <div className="border-t border-dashed border-pink-500/60 mb-16" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          From the team that brought you{" "}
          <span className="text-white">"Context Engineering"</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Leading experts on getting the most out of today’s models.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-700/50 rounded-lg p-6 bg-[#141414]">
            <h3 className="text-white font-semibold mb-3">
              No Vibes Allowed – Solving Hard Problems in Complex Codebases
            </h3>

            <div className="flex gap-4 text-pink-400 mb-4">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              This talk, given at the{" "}
              <span className="text-pink-400">
                AI Engineer Code Summit in NYC
              </span>{" "}
              in November 2025 (and given earlier at{" "}
              <span className="text-pink-400">YC on August 20th, 2025</span>)
              lays out the groundwork for using AI to solve hard problems
              in complex codebases.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-700/50 rounded-lg p-6 bg-[#141414]">
            <h3 className="text-white font-semibold mb-3">
              12 Factor Agents
            </h3>

            <div className="flex gap-4 text-pink-400 mb-4">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A set of principles for building reliable and scalable LLM
              applications, inspired by the original{" "}
              <span className="text-pink-400">12-Factor App</span> methodology.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              The original repo that coined the term{" "}
              <span className="italic">“context engineering”</span> back in April 2025.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-700/50 rounded-lg p-6 bg-[#141414]">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span>🦄</span> AI That Works
            </h3>

            <div className="flex gap-4 text-pink-400 mb-4">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">Podcast</a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              A weekly conversation about how we can all get the most
              juice out of today’s models with{" "}
              <span className="text-pink-400">@hellovai</span> &{" "}
              <span className="text-pink-400">@dexhorthy</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom dotted line */}
      <div className="border-t border-dashed border-pink-500/60 mt-16" />
    </section>
  );
}
