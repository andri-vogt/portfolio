"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print font-mono text-[length:var(--text-mono)] uppercase tracking-[0.1em] link-underline self-start cursor-pointer bg-transparent p-0 text-left"
    >
      [ Download PDF ]
    </button>
  );
}
