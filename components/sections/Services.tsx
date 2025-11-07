const services = [
  {
    title: "IT Solutions & Networking",
    desc: "Network design, security hardening, monitoring, and operations with clear documentation and training."
  },
  {
    title: "Full?Stack Web Development",
    desc: "Modern, scalable web applications with Next.js, TypeScript, and robust API layers."
  },
  {
    title: "Automation Engineering",
    desc: "Scripted workflows, RPA, and integrations that reduce manual toil and improve reliability."
  },
  {
    title: "AI Integration on Demand",
    desc: "LLMs embedded into support and operations with measured outcomes and guardrails."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="container-grid">
        <h2 className="font-poppins text-2xl sm:text-3xl mb-6">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="glass outline-gradient rounded-2xl p-5">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-white/70 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
