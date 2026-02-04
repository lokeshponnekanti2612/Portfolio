const skills = [
  {
    title: "AI / Machine Learning",
    items: [
      "Large Language Models (LLMs)",
      "Embeddings and tokenization",
      "Retrieval-Augmented Generation (RAG)",
      "Prompting and agentic workflows",
      "Model evaluation, monitoring, and optimization",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "Python for data pipelines and ML services",
      "API development with FastAPI",
      "Designing reliable, modular ML systems",
    ],
  },
  {
    title: "Data & Vector Search",
    items: [
      "Vector databases (Chroma)",
      "FAISS concepts and HNSW indexing",
      "Similarity search and indexing strategies",
      "Data ingestion, chunking, and retrieval logic",
    ],
  },
  {
    title: "Cloud & MLOps",
    items: [
      "Docker and containerized deployments",
      "Azure ML and Databricks",
      "Experiment tracking, versioning, and production support",
    ],
  },
  {
    title: "Automation & Integration",
    items: [
      "Workflow automation",
      "System and business-process integration using AI",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-28 w-full max-w-5xl scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        Skills
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Focused technical breadth.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
        A structured view of the systems, tools, and workflows I rely on to
        build reliable generative AI products.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              {group.items.map((item) => (
                <li key={item} className="leading-relaxed text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
