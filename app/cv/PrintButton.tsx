"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print font-mono text-sm link-underline self-start cursor-pointer bg-transparent p-0 text-left"
    >
      download pdf ↓
    </button>
  );
}
