"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="u-header">
      <div className="u-header-container">
        {/* LOGO */}
        <Link href="/">
          <div className="u-logo">
            <span className="u-logo-text">UnderTangoCoin</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="u-nav-desktop">
          <a href="#ecosistema" className="u-nav-link">Ecosistema</a>
          <a href="#valor" className="u-nav-link">Valor</a>
          <a href="#buy" className="u-nav-buy">Comprar</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button className="u-mobile-btn" onClick={() => setOpen(!open)}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="u-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="u-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="u-nav-mobile">
          <a href="#ecosistema" className="u-nav-mobile-link" onClick={() => setOpen(false)}>
            Ecosistema
          </a>
          <a href="#valor" className="u-nav-mobile-link" onClick={() => setOpen(false)}>
            Valor
          </a>
          <a href="#buy" className="u-nav-mobile-buy" onClick={() => setOpen(false)}>
            Comprar
          </a>
        </div>
      )}
    </header>
  );
}
