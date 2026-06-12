"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileId, sidebarGroups } from "@/data/content";

type SidebarProps = {
  activeFile: FileId;
  onOpenFile: (file: FileId) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

function SidebarContent({ activeFile, onOpenFile }: Omit<SidebarProps, "mobileOpen" | "onCloseMobile">) {
  return (
    <div className="flex h-full flex-col bg-[#11161f]/90">
      <div className="border-b border-border px-4 py-3 text-xs uppercase tracking-[0.3em] text-muted">
        Explorer
      </div>
      <div className="scrollbar-thin flex-1 overflow-y-auto px-2 py-3">
        {sidebarGroups.map((group) => (
          <div key={group.label}>
            <div className="px-2 pb-2 text-[11px] uppercase tracking-[0.24em] text-muted">
              {group.label}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = item === activeFile;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => onOpenFile(item)}
                    className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition ${
                      active
                        ? "border-accent/40 bg-accent/10 text-slate-100"
                        : "border-transparent text-slate-300 hover:border-border hover:bg-white/5"
                    }`}
                  >
                    <span className="text-accent">{item.endsWith(".json") ? "{ }" : "<>"}</span>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sidebar(props: SidebarProps) {
  return (
    <>
      <aside className="hidden w-72 border-r border-border lg:block">
        <SidebarContent activeFile={props.activeFile} onOpenFile={props.onOpenFile} />
      </aside>
      <AnimatePresence>
        {props.mobileOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={props.onCloseMobile}
              className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            />
            <motion.aside
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="fixed inset-y-0 left-0 z-40 w-72 border-r border-border shadow-editor lg:hidden"
            >
              <SidebarContent activeFile={props.activeFile} onOpenFile={props.onOpenFile} />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
