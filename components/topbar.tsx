"use client";

import { motion } from "framer-motion";

export function Topbar() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-[#181d26]/95 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2">
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
          <motion.span
            key={color}
            whileHover={{ scale: 1.12 }}
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="hidden items-center gap-3 text-xs text-muted sm:flex">
        <span className="rounded-full border border-border bg-[#0d1117] px-3 py-1">
          portfolio.code-workspace
        </span>
        <span>Next.js App Router</span>
      </div>
      <div className="text-xs text-muted">VS Portfolio</div>
    </div>
  );
}
