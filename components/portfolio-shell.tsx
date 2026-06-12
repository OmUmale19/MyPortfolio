"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Editor } from "@/components/editor";
import { Sidebar } from "@/components/sidebar";
import { StatusBar } from "@/components/status-bar";
import { Tabs } from "@/components/tabs";
import { Topbar } from "@/components/topbar";
import { FileId } from "@/data/content";

const defaultFile: FileId = "home.tsx";

export function PortfolioShell() {
  const [activeFile, setActiveFile] = useState<FileId>(defaultFile);
  const [openFiles, setOpenFiles] = useState<FileId[]>([defaultFile]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const openFile = (file: FileId) => {
    setActiveFile(file);
    setOpenFiles((current) => (current.includes(file) ? current : [...current, file]));
    setMobileSidebarOpen(false);
  };

  const closeFile = (file: FileId) => {
    setOpenFiles((current) => {
      const next = current.filter((item) => item !== file);

      if (next.length === 0) {
        setActiveFile(defaultFile);
        return [defaultFile];
      }

      if (activeFile === file) {
        setActiveFile(next[next.length - 1]);
      }

      return next;
    });
  };

  return (
    <main className="min-h-screen overflow-hidden px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-4 flex items-center justify-between px-1 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="rounded-xl border border-border bg-white/5 px-4 py-2 text-sm text-slate-100"
          >
            Explorer
          </button>
          <div className="text-xs uppercase tracking-[0.22em] text-muted">{activeFile}</div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1017]/90 shadow-editor backdrop-blur">
          <Topbar />
          <div className="flex min-h-[calc(100vh-6.5rem)] flex-col lg:flex-row">
            <Sidebar
              activeFile={activeFile}
              onOpenFile={openFile}
              mobileOpen={mobileSidebarOpen}
              onCloseMobile={() => setMobileSidebarOpen(false)}
            />
            <section className="flex min-h-0 flex-1 flex-col">
              <Tabs activeFile={activeFile} openFiles={openFiles} onSelect={openFile} onClose={closeFile} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <Editor activeFile={activeFile} onOpenFile={openFile} />
                </motion.div>
              </AnimatePresence>
              <StatusBar />
            </section>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
