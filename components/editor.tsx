"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { about, competitive, contact, FileId, hero, projects, skills } from "@/data/content";

type EditorProps = {
  activeFile: FileId;
  onOpenFile: (file: FileId) => void;
};

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export function Editor({ activeFile, onOpenFile }: EditorProps) {
  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto bg-[#0d1117] bg-grid bg-[size:24px_24px] p-4 sm:p-6 lg:p-8">
      {activeFile === "home.tsx" ? <HomeView onOpenFile={onOpenFile} /> : null}
      {activeFile === "about.tsx" ? <AboutView /> : null}
      {activeFile === "projects.tsx" ? <ProjectsView /> : null}
      {activeFile === "skills.json" ? <SkillsView /> : null}
      {activeFile === "contact.tsx" ? <ContactView /> : null}
      {activeFile === "competitive.tsx" ? <CompetitiveView /> : null}
    </div>
  );
}

function EditorHeader({
  file,
  accent,
  lineHint,
}: {
  file: string;
  accent: string;
  lineHint: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
      <span className="rounded-full border px-3 py-1" style={{ borderColor: accent, color: accent }}>
        {file}
      </span>
      <span className="text-muted">{lineHint}</span>
    </div>
  );
}

function HomeView({ onOpenFile }: { onOpenFile: (file: FileId) => void }) {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-5xl">
      <EditorHeader file="home.tsx" accent="#4fc1ff" lineHint="export default function Hero()" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-[0.3em] text-success">const developer =</div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {hero.name}
            <span className="mt-3 block text-2xl text-accent sm:text-3xl">{hero.role}</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">{hero.tagline}</p>
          <div className="max-w-2xl rounded-2xl border border-border bg-white/5 p-4">
            <p className="max-h-40 overflow-y-auto pr-2 text-sm leading-7 text-white [font-family:Arial,Helvetica,sans-serif]">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpenFile(hero.primaryCta.target)}
              className="rounded-xl border border-accent bg-accent px-5 py-3 text-sm font-semibold text-[#081018] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              {hero.primaryCta.label}
            </button>
            <button
              type="button"
              onClick={() => onOpenFile(hero.secondaryCta.target)}
              className="rounded-xl border border-border bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10"
            >
              {hero.secondaryCta.label}
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-panel p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-success/10" />
          <div className="relative space-y-4">
            <div className="text-sm text-gold">// active stack</div>
            <div className="space-y-3">
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.35 }}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="text-xs text-success">ready</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function CompetitiveView() {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-5xl">
      <EditorHeader file="competitive.tsx" accent="#ff7b72" lineHint="function CompetitiveView()" />
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-white">{competitive.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-300">{competitive.body}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {competitive.profiles.map((p, index) => (
            <motion.div
              key={p.platform}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="rounded-2xl border border-border bg-panel p-6"
              style={{ "--tw-border-opacity": 1 } as CSSProperties}
            >
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">{p.platform}</div>
              <div className="text-lg font-semibold" style={{ color: p.accent }}>{p.handle}</div>
              <div className="mt-1 text-3xl font-semibold font-mono" style={{ color: p.accent }}>{p.rating}</div>
              <div className="mt-2 text-xs text-slate-400">{p.detail}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {competitive.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="rounded-2xl border border-border bg-panel p-5"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-muted">{stat.label}</div>
              <div className="mt-3 text-2xl font-semibold text-accent">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


function AboutView() {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-5xl">
      <EditorHeader file="about.tsx" accent="#3fb950" lineHint="function AboutSection()" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-white">{about.title}</h2>
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="rounded-2xl border border-border bg-panel p-5"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-muted">{stat.label}</div>
              <div className="mt-3 text-2xl font-semibold text-accent">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProjectsView() {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-6xl">
      <EditorHeader file="projects.tsx" accent="#ff7b72" lineHint="const projects = []" />
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Selected work focused on product clarity, measurable outcomes, and visual depth.
          </p>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function SkillsView() {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-5xl">
      <EditorHeader file="skills.json" accent="#e3b341" lineHint='{ "skills": [...] }' />
      <div className="overflow-hidden rounded-3xl border border-border bg-panel">
        <div className="border-b border-border px-5 py-4 text-sm text-muted">
          JSON Viewer
        </div>
        <div className="grid gap-0 lg:grid-cols-2">
          {Object.entries(skills).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07 * index }}
              className="border-b border-r border-border p-5 last:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="mb-3 text-sm text-pink">{key}</div>
              <div className="space-y-2 text-sm">
                {value.map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 px-3 py-2 text-white">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ContactView() {
  return (
    <motion.section {...sectionMotion} className="mx-auto max-w-5xl">
      <EditorHeader file="contact.tsx" accent="#4fc1ff" lineHint="return <ContactCard />" />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-border bg-panel p-6">
          <h2 className="text-3xl font-semibold text-white">{contact.heading}</h2>
          <p className="mt-4 text-sm leading-8 text-slate-300">{contact.blurb}</p>
          <div className="mt-8 space-y-4">
            {contact.details.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-[0.22em] text-muted">{detail.label}</span>
                <span className="text-sm text-slate-100">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
        <form className="space-y-4 rounded-3xl border border-border bg-[#11161f]/90 p-6">
          <div className="text-sm uppercase tracking-[0.24em] text-success">contactForm.ts</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-border bg-[#0d1117] px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-border bg-[#0d1117] px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-300">
            Project Brief
            <textarea
              rows={6}
              placeholder="Tell me about your idea..."
              className="w-full rounded-2xl border border-border bg-[#0d1117] px-4 py-3 text-slate-100 outline-none transition focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="rounded-xl border border-accent bg-accent px-5 py-3 text-sm font-semibold text-[#081018] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
