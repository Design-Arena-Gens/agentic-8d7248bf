export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="container-grid">
        <div className="glass outline-gradient rounded-2xl px-6 sm:px-8 py-8 sm:py-10 shadow-soft">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="font-poppins text-2xl sm:text-3xl">About</h2>
              <p className="text-white/60 text-sm mt-2">Professional tech architect</p>
            </div>
            <div className="md:col-span-2 text-white/80 leading-relaxed">
              <p>
                I?m a Karachi?based IT solutions expert and full?stack developer focused on building dependable, scalable systems. My work spans enterprise networking, modern web apps, automation workflows, and connecting AI where it delivers measurable value.
              </p>
              <p className="mt-4">
                I design with reliability and maintainability in mind ? from network?aware services to cloud?native applications with CI/CD, observability, and security best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
