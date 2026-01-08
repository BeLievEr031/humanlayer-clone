export default function HeroHumanLayer() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-gray-200 font-mono">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-5 text-sm">
        <div className="flex items-center gap-2 px-28">
          <span className="text-pink-500 font-bold text-3xl">Deeprefactor</span>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-400">
          <a className="hover:text-white" href="#">
            Learn
          </a>
          <a className="hover:text-white" href="#">
            GitHub
          </a>
          <a className="hover:text-white" href="#">
            Discord
          </a>
          <a className="hover:text-white" href="#">
            Jobs
          </a>
          <a className="hover:text-white" href="#">
            Blog
          </a>
          <a className="hover:text-white flex items-center gap-1" href="#">
            Framer Dark
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <h1 className="text-3xl md:text-5xl leading-tight font-bold text-white">
          Get AI to solve hard problems in complex codebases
        </h1>

        <div className="mt-8 space-y-4 text-gray-400 text-sm md:text-base">
          <p>
            <span className="text-white font-semibold">CodeLayer</span> is an
            open source IDE that lets you orchestrate AI coding agents.
          </p>
          <p>
            It comes with battle-tested workflows that enable AI to solve hard
            problems in large, complex codebases.
          </p>
          <p>
            Built on Claude Code. Open source. Scale from your laptop to your
            entire team.
          </p>
        </div>

        {/* Form */}
        <div className="mt-14 max-w-md">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span className="uppercase tracking-wide">Email</span>
            <span>Step 1 of 4</span>
          </div>

          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-transparent border border-pink-500/50 
                       focus:border-pink-500 outline-none
                       px-4 py-3 text-white"
          />

          <p className="text-xs text-gray-500 mt-2">Press Enter to continue</p>

          <button
            className="mt-6 w-full bg-[#8f3b5a] hover:bg-[#a9476a]
                       text-black font-semibold py-3 tracking-wide transition"
          >
            JOIN THE WAITLIST
          </button>
        </div>
      </main>

      {/* Testimonial */}
      <section className="border-t border-white/10 bg-[#161616] px-6 py-6">
        <div className="max-w-5xl mx-auto flex gap-4 text-sm text-gray-400">
          <div className="w-1 bg-pink-500" />
          <p>
            Our entire company is using CodeLayer now. We're shipping one banger
            PR after the other. It is so f-ing good. Unbelievable dude.
            <br />
            <span className="block mt-2 text-gray-500">
              — René Brandel · Founder, Casco (YC X25)
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
