"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons for burger/X

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full text-primary px-6 py-4 flex items-center justify-between border-b border-gray-300 bg-white z-50 relative">
      {/* Logo */}
      <div className="font-heading flex items-center space-x-2">
        <span className="text-xl">🍽</span>
        <span className="font-semibold text-lg">The Gilded Fork</span>
      </div>

      {/* Desktop Nav + Button */}
      <div className="hidden md:flex items-center space-x-6 font-body">
        <nav className="flex space-x-6 text-sm text-secondary hover:text-primary">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About Us</Link>
        </nav>
        <Link href="/booking" className="btn-primary">
          Book a Table
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Modal */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl flex flex-col items-start px-6 py-4 space-y-4 font-body md:hidden animate-slideDown">
          <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-sm text-secondary hover:text-primary">
            Home
          </Link>
          <Link href="/menu" onClick={() => setMenuOpen(false)} className="w-full text-sm text-secondary hover:text-primary">
            Menu
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="w-full text-sm text-secondary hover:text-primary">
            About Us
          </Link>
          <Link href="/booking" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center">
            Book a Table
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
