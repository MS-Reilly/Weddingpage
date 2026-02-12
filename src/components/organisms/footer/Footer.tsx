"use client";

import { LogoIconVertical } from "../../../assets/svgs/logos";

export default function Footer() {
  return (
    <footer className="floral-section bg-white/95 py-10 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
        <LogoIconVertical className="h-40 w-auto" />
      </div>
    </footer>
  );
}
