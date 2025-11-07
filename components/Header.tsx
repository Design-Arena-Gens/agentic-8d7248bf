import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md/10">
      <div className="container-grid py-4">
        <div className="glass outline-gradient rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="#" className="font-poppins text-lg tracking-wide gradient-text">Murad Khan</Link>
          <nav className="hidden md:flex gap-6 text-sm text-white/80">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Expertise", "#expertise"],
              ["Projects", "#projects"],
              ["Services", "#services"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <Link key={href} href={href} className="link-underline hover:text-white transition-colors">{label}</Link>
            ))}
          </nav>
          <Link href="#contact" className="md:hidden text-sm text-white/80 link-underline">Contact</Link>
        </div>
      </div>
    </header>
  );
}
