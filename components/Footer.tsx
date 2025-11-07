import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 mt-8">
      <div className="container-grid">
        <div className="glass outline-gradient rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">? {new Date().getFullYear()} Murad Khan. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/70 text-sm">
            <Link href="https://github.com/" className="link-underline" target="_blank">GitHub</Link>
            <Link href="https://www.linkedin.com/" className="link-underline" target="_blank">LinkedIn</Link>
            <Link href="mailto:hello@murad.dev" className="link-underline">Email</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
