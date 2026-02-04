const publications = [
  {
    title: "Heart Disease Detection Using Machine Learning and Deep Learning",
    description:
      "Research-focused machine learning study on predicting heart disease risk using an ensemble of classical ML algorithms and deep learning models, evaluated on a clinical dataset with 1,026 patients and 13 features.",
    contributions: [
      "Combined classical ML models with neural networks using an ensemble/meta-learning approach.",
      "Implemented feature selection to improve signal quality.",
      "Used 5-fold cross-validation for reliable evaluation.",
      "Achieved 84.48% classification accuracy.",
      "Performed confusion matrix and performance analysis to assess diagnostic reliability.",
    ],
    tools: [
      "Python",
      "Pandas, NumPy",
      "scikit-learn (Logistic Regression, SVM, Naïve Bayes)",
      "Keras (Feedforward Neural Network, LSTM)",
      "Feature Selection (Correlation Matrix, Fisher Score)",
      "Ensemble Learning / Meta-Learner",
      "Cross-validation and confusion matrix analysis",
    ],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="mt-28 w-full max-w-5xl scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        Publications
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Research with measurable outcomes.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
        A compact summary of peer-reviewed style work grounded in evaluation,
        validation, and reproducibility.
      </p>

      <div className="mt-10 space-y-6">
        {publications.map((paper) => (
          <article
            key={paper.title}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{paper.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {paper.description}
            </p>

            <div className="mt-4">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Technical contributions
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
                {paper.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Tools and methods
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                {paper.tools.join(" • ")}
              </p>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Optional links
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://scholar.google.com/citations?hl=en&user=zVrZPlsAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 hover:border-zinc-500 hover:text-white"
                >
                  Google Scholar
                </a>
                <a
                  href="https://ijfans.org/issue-content/heart-disease-detection-using-machine-learning-and-deep-learning-2991"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 hover:border-zinc-500 hover:text-white"
                >
                  DOI
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
