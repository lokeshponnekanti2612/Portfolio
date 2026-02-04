"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Home() {
  const sectionIds = useMemo(
    () => ["about", "skills", "experience", "projects", "publications", "contact"],
    []
  );
  const [activeSection, setActiveSection] = useState<string>("about");
  const [bgColor, setBgColor] = useState<string>("#0a0a0a");

  useEffect(() => {
    const colors = ["#0f172a", "#1e1b4b", "#1f2937", "#0b3d2e", "#312e81", "#1e293b"];

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      const scaled = progress * (colors.length - 1);
      const index = Math.floor(scaled);
      const t = scaled - index;
      const from = colors[index] ?? colors[0];
      const to = colors[index + 1] ?? colors[colors.length - 1];

      const lerp = (a: number, b: number, amt: number) =>
        Math.round(a + (b - a) * amt);

      const hexToRgb = (hex: string) => {
        const value = hex.replace("#", "");
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        return { r, g, b };
      };

      const a = hexToRgb(from);
      const b = hexToRgb(to);
      const blended = `rgb(${lerp(a.r, b.r, t)}, ${lerp(
        a.g,
        b.g,
        t
      )}, ${lerp(a.b, b.b, t)})`;

      setBgColor(blended);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, options);

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return (
    <div className="min-h-screen text-zinc-100" style={{ background: bgColor }}>
      <header className="sticky top-0 z-50 border-b border-zinc-900/60 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10">
          <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200">
            <a
              href="#about"
              className={`rounded-md px-4 py-2 ${activeSection === "about"
                ? "bg-blue-600 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`rounded-md px-4 py-2 ${activeSection === "skills"
                ? "bg-indigo-600 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              View Skills
            </a>
            <a
              href="#experience"
              className={`rounded-md px-4 py-2 ${activeSection === "experience"
                ? "bg-slate-700 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`rounded-md px-4 py-2 ${activeSection === "projects"
                ? "bg-blue-600 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              Projects
            </a>
            <a
              href="#publications"
              className={`rounded-md px-4 py-2 ${activeSection === "publications"
                ? "bg-purple-600 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              Publications
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-700 px-4 py-2 text-zinc-200 hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className={`rounded-md px-4 py-2 ${activeSection === "contact"
                ? "bg-zinc-700 text-white"
                : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white"
                }`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-6 sm:px-10">
        <section className="flex min-h-[calc(100vh-8rem)] w-full items-center">
          <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
            <div className="w-full max-w-3xl">
              <div className="mb-10 flex items-center gap-6">
                <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                  Introduction
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Hi, I&apos;m
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Lokesh Ponnekanti
              </h1>
              <p className="mt-3 text-lg font-medium text-zinc-300">
                AI / ML Engineer
              </p>
              <p className="mt-6 text-xl leading-relaxed text-zinc-200">
                Building production-ready generative AI systems.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
                I focus on how large language models actually work under the hood from embeddings and retrieval pipelines to agentic workflows and how to turn that understanding into reliable, scalable systems used in real environments.

              </p>
            </div>

            <div className="flex w-full justify-start lg:w-auto lg:justify-end">
              <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                <Image
                  src="/Lokesh.png"
                  alt="Lokesh Ponnekanti"
                  width={320}
                  height={400}
                  className="h-56 w-44 object-cover sm:h-72 sm:w-56 lg:h-80 lg:w-64"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
