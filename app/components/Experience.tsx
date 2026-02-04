const experience = [
  {
    role: "AI/ML Engineer",
    company: "Crown Equipment Corporation",
    dates: "Sep 2024 – Present",
    bullets: [
      "Reduced average equipment repair time by 30% and improved first-time fix rates by 20% by deploying a GenAI Technician Assistant over 100,000+ pages of technical documentation.",
      "Designed and implemented a domain-specific RAG system delivering low-hallucination, context-rich troubleshooting guidance with sub-500ms retrieval latency.",
      "Built agentic LLM workflows to support multi-step technical diagnostics, improving autonomy and response quality for complex repair scenarios.",
      "Deployed and operated the system in production on Azure, using containerized FastAPI services and CI/CD pipelines to ensure reliability and iterative improvement.",
    ],
  },
  {
    role: "ML Engineer",
    company: "Maxton Medtech",
    dates: "Previously",
    bullets: [
      "Reduced 30-day hospital readmission rates by 12% by deploying an end-to-end ML pipeline for patient risk prediction using structured EHR data and clinical notes.",
      "Built clinical risk prediction models using structured and unstructured data.",
      "Delivered end-to-end ML pipelines including ingestion, feature engineering, training, and evaluation.",
      "Emphasized correctness, validation, and real-world constraints in model design.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-28 w-full max-w-5xl scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        Experience
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Applied systems, shipped to production.
      </h2>
      <div className="mt-10 space-y-6">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-zinc-300">{item.company}</p>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {item.dates}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-zinc-500">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
