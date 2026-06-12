export function StatusBar() {
  return (
    <div className="flex items-center justify-between border-t border-accentSoft/40 bg-accentSoft/90 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white">
      <div className="flex items-center gap-4">
        <span>main</span>
        <span>TypeScript</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Prettier</span>
        <span>UTF-8</span>
        <span>Ln 42, Col 17</span>
      </div>
    </div>
  );
}
