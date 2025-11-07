type Project = {
  title: string;
  blurb: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Network Automation Toolkit",
    blurb: "Python + Ansible pipelines to configure, audit, and validate enterprise networks with safety checks and rollbacks.",
    tags: ["Python", "Ansible", "CI/CD"]
  },
  {
    title: "Smart Retail IoT Platform",
    blurb: "Edge?connected sensors with a cloud dashboard to optimize inventory, footfall analytics, and predictive maintenance.",
    tags: ["Next.js", "MQTT", "Timeseries"]
  },
  {
    title: "Full?Stack CRM Dashboard",
    blurb: "A modular CRM with role?based access, real?time activity feed, and analytics powered by PostgreSQL/Prisma.",
    tags: ["React", "Prisma", "PostgreSQL"]
  },
  {
    title: "AI?Powered Incident Triage",
    blurb: "LLM?assisted runbooks that summarize alerts, suggest remediations, and auto?create tickets with context.",
    tags: ["LLM", "Observability", "Automation"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="container-grid">
        <h2 className="font-poppins text-2xl sm:text-3xl mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.title} className="glass outline-gradient rounded-2xl p-5 hover:shadow-glow transition-shadow">
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 text-sm mt-2">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
