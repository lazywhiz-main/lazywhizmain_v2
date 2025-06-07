'use client';

import React, { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Service' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">LAZYWHIZ</div>
        {/* Desktop Nav */}
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Hamburger Icon (mobile only) */}
        <button
          className="hamburger"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={handleMenuClose}>
          <nav className="mobile-menu" onClick={e => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu-item"
                onClick={handleMenuClose}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 