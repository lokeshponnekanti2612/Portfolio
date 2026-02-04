export default function About() {
  return (
    <section id="about" className="mt-28 w-full max-w-3xl scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        About
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Engineering depth, production focus.
      </h2>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
        <p>
          I’m an AI/ML engineer focused on building practical, production-ready generative AI systems.
          My work sits at the intersection of large language model internals, embeddings,
          retrieval-augmented generation, and system reliability.
        </p><p>
          My work emphasizes engineering clarity, understanding retrieval behavior,
          failure modes, and system boundaries, then designing modular solutions that are debuggable,
          maintainable, and production-ready.
        </p>
        <p>
          I’m particularly interested in systems that bridge research ideas and
          production constraints: designing pipelines that are debuggable, measurable, and maintainable,
          not just impressive in demos. I care about clarity in architecture, explicit trade-offs,
          and building AI systems that engineers can reason about and trust.
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Education
        </div>
        <ul className="mt-4 space-y-3 text-sm text-zinc-200">
          <li className="flex flex-col gap-1">
            <span className="font-medium text-white">
              Master&apos;s in Computer Science
            </span>
            <span className="text-zinc-400">
              University of Central Missouri
            </span>
          </li>
          <li className="flex flex-col gap-1">
            <span className="font-medium text-white">
              Bachelor&apos;s in Computer Science
            </span>
            <span className="text-zinc-400">Vasireddy Venkatadri Institute of Technology</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
