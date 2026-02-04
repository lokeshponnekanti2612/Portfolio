const contacts = [
  {
    label: "Email",
    value: "ponnekantilokesh83@gmail.com",
    href: "mailto:ponnekantilokesh83@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "ponnekanti-lokesh-094477223",
    href: "http://www.linkedin.com/in/ponnekanti-lokesh-094477223",
  },
  {
    label: "GitHub",
    value: "lokeshponnekanti2612",
    href: "https://github.com/lokeshponnekanti2612",
  },
  {
    label: "Google Scholar",
    value: "zVrZPlsAAAAJ",
    href: "https://scholar.google.com/citations?hl=en&user=zVrZPlsAAAAJ",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-28 w-full max-w-3xl pb-24 scroll-mt-24">
      <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
        Contact
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Let&apos;s connect.
      </h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-400">
        Feel free to reach out for collaboration, research, or engineering
        discussions.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex min-w-0 flex-col gap-1">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {contact.label}
            </span>
            <a
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="break-all text-blue-300 hover:text-blue-200"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
