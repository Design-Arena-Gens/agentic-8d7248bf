const skills = [
  {
    title: "Networking & Infrastructure",
    points: [
      "LAN/WAN, VLANs, routing & firewalls",
      "Cisco/MikroTik, VPNs, Zero?trust",
      "Monitoring & incident response"
    ]
  },
  {
    title: "Full?Stack Development",
    points: [
      "Next.js, React, TypeScript",
      "Node.js, REST/GraphQL APIs",
      "PostgreSQL, Prisma, Redis"
    ]
  },
  {
    title: "Automation & DevOps",
    points: [
      "Python, Bash, Ansible",
      "CI/CD, Docker, Kubernetes",
      "RPA and workflow orchestration"
    ]
  },
  {
    title: "AI Integration on Demand",
    points: [
      "LLM enablement for ops & support",
      "Embedding search, agents, tools",
      "Responsible rollout & evaluation"
    ]
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-12 sm:py-16">
      <div className="container-grid">
        <h2 className="font-poppins text-2xl sm:text-3xl mb-6">Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.title} className="glass outline-gradient rounded-2xl p-5">
              <h3 className="font-semibold text-white mb-3">{s.title}</h3>
              <ul className="text-white/70 text-sm space-y-2 list-disc list-inside">
                {s.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
