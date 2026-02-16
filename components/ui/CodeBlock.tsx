"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-neutral-200 bg-neutral-100 p-4">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-200"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
      <pre className="overflow-x-auto pr-16 min-w-0">
        <code className="text-xs sm:text-sm text-neutral-800 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
