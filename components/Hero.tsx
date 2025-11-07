import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-16 sm:pt-20 lg:pt-24 pb-8">
      <div className="container-grid">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass outline-gradient text-xs text-white/70 mb-5">
            <span className="h-2 w-2 rounded-full" style={{ background: 'radial-gradient(circle, #00f0ff, #3b82f6)' }} />
            Karachi, Pakistan
          </div>
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Murad Khan ? <span className="gradient-text">Building Smarter Systems</span> for the Digital Age.
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg">
            IT solutions expert and developer specializing in modern web systems, automation, and on?demand AI integration.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="#projects" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors outline-gradient">
              View Work
            </Link>
            <Link href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] text-black font-medium">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 container-grid">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            "Networks",
            "Web Dev",
            "Automation",
            "APIs",
            "Cloud",
            "AI + RPA"
          ].map((badge) => (
            <div key={badge} className="glass outline-gradient rounded-xl px-3 py-2 text-xs text-white/70 text-center animate-float">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
