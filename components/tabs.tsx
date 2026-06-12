"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileId } from "@/data/content";

type TabsProps = {
  activeFile: FileId;
  openFiles: FileId[];
  onSelect: (file: FileId) => void;
  onClose: (file: FileId) => void;
};

export function Tabs({ activeFile, openFiles, onSelect, onClose }: TabsProps) {
  return (
    <div className="scrollbar-thin flex overflow-x-auto border-b border-border bg-[#161b22]">
      <AnimatePresence initial={false}>
        {openFiles.map((file) => {
          const active = activeFile === file;

          return (
            <motion.div
              key={file}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`group flex min-w-[160px] items-center justify-between border-r border-border px-4 py-3 text-sm ${
                active ? "bg-[#0d1117] text-slate-50" : "text-slate-400"
              }`}
            >
              <button type="button" onClick={() => onSelect(file)} className="flex-1 text-left">
                {file}
              </button>
              {openFiles.length > 1 ? (
                <button
                  type="button"
                  onClick={() => onClose(file)}
                  className="ml-3 rounded px-1 text-muted transition hover:bg-white/10 hover:text-white"
                  aria-label={`Close ${file}`}
                >
                  x
                </button>
              ) : null}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
