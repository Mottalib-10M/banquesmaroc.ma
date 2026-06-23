'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/lib/config';

type NavLink = (typeof NAV_LINKS)[number];

function hasChildren(link: NavLink): link is NavLink & { children: readonly { href: string; label: string }[] } {
  return 'children' in link;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
                <path d="M6 14h4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand hidden sm:inline">
              Banques <span className="text-brand-light">Maroc</span>
            </span>
            <span className="text-xl font-bold text-brand sm:hidden">BM</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => hasChildren(link) && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-charcoal hover:text-brand transition-colors rounded-md hover:bg-blue-50"
                >
                  {link.label}
                  {hasChildren(link) && (
                    <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>
                {hasChildren(link) && openDropdown === link.href && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-blue-50 hover:text-brand transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/simulation-credit-immobilier/"
            className="hidden md:inline-flex items-center px-4 py-2 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand-dark transition-colors"
          >
            Simuler un crédit
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-charcoal hover:bg-gray-100"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-charcoal hover:text-brand hover:bg-blue-50 rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {hasChildren(link) && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-gray-600 hover:text-brand hover:bg-blue-50 rounded-md"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <a
                href="/simulation-credit-immobilier/"
                className="block w-full text-center px-4 py-2.5 bg-brand text-white font-medium rounded-lg hover:bg-brand-dark"
                onClick={() => setMobileOpen(false)}
              >
                Simuler un crédit
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
