import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container-grid">
        <div className="glass outline-gradient rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="font-poppins text-2xl sm:text-3xl">Let?s build something reliable</h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Whether it?s modernizing infrastructure, launching a robust web platform, or automating critical workflows ? I can help design and ship it.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="mailto:hello@murad.dev" className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] text-black font-medium">Email</Link>
            <Link href="https://www.linkedin.com/" target="_blank" className="px-5 py-3 rounded-xl bg-white/10 hover:bg.white/15 outline-gradient">LinkedIn</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
