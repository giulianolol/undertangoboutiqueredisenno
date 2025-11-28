"use client";
import Link from "next/link";
import Reveal from "./reveal";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            {/* <img src="/logo.svg" alt="" className="h-8" /> */}
            <span className="font-display text-xl text-red-500">UnderTangoCoin</span>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <a href="#ecosistema" className="text-gray-300 hover:text-white">Ecosistema</a>
          <a href="#valor" className="text-gray-300 hover:text-white">Valor</a>
          <a href="#buy" className="bg-red-600 hover:bg-redDark px-4 py-2 rounded-lg font-semibold shadow-sm">Comprar</a>
        </nav>
      </div>
    </header>
  );
}
