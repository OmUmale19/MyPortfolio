"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/content";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-[#11161f]/90 p-5 shadow-lg shadow-black/20"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15 transition duration-500 group-hover:opacity-25`}
      />
      <div className="relative space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.24em] text-accent">
              Project {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold">
            {project.metric}
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
