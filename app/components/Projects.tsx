const projects = [
  {
    title: "GenAI Technician Assistant (RAG Knowledge Engine)",
    description:
      "End-to-end retrieval-augmented assistant designed to answer technician-style questions over technical PDF manuals, optimized for grounded and reliable responses.",
    details: [
      "Sentence-level chunking for precise retrieval.",
      "Local embeddings using SentenceTransformers (MiniLM).",
      "Vector indexing and similarity search with ChromaDB.",
      "RAG pipeline with clear separation between ingestion, embedding, retrieval, and generation.",
      "Logging and configuration management to support production reliability.",
    ],
    technologies: [
      "Python",
      "SentenceTransformers (MiniLM)",
      "ChromaDB",
      "RAG",
      "Pydantic",
      "Logging and configuration management",
    ],
    github: "https://github.com/lokeshponnekanti2612/GenAI-Technical-Assistant",
  },
  {
    title: "Clinical Risk Prediction Pipeline",
    description:
      "Production-style machine learning pipeline built to predict patient risk using structured and unstructured clinical data under realistic healthcare constraints.",
    details: [
      "Data ingestion from multiple sources.",
      "Feature engineering across structured and text-based inputs.",
      "Model training and evaluation with reproducibility in mind.",
      "Clear pipeline stages with validation logic.",
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "SQL", "ML pipelines"],
    github:
      "https://github.com/lokeshponnekanti2612/30-day-hospital-readmission-ML-pipeline",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-28 w-full max-w-5xl scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        Projects
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Systems built with real-world constraints.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
        A selection of applied systems that emphasize architecture, data flow,
        and production readiness.
      </p>

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Project
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {project.description}
            </p>

            <div className="mt-4">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Engineering details
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Technologies
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                {project.technologies.join(" • ")}
              </p>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Optional
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300"
                >
                  Diagram Placeholder
                </button>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 hover:border-zinc-500 hover:text-white"
                  >
                    GitHub Link
                  </a>
                ) : (
                  <button
                    type="button"
                    className="rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300"
                  >
                    GitHub Link
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
