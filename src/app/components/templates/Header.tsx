"use client";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-[calc(100%_-_48px)] max-w-[1200px] flex justify-between items-center px-6 py-4 bg-gray-800 rounded-lg relative">
      <h1 className="text-3xl font-bold text-yellow-400">🍳 Recipe Hub</h1>
      <nav className="hidden md:flex gap-6">
        <ul className="flex gap-6">
          <li>
            <a href="/mypage" className="hover:text-yellow-300">
              マイページ
            </a>
          </li>
          <li>
            <a href="/recipes/new" className="hover:text-yellow-300">
              レシピ投稿
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-yellow-300">
              ログイン
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="md:hidden text-yellow-400 text-2xl z-50 relative"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-800 shadow-lg transform transition-transform duration-300 p-6 flex flex-col items-center space-y-6 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 w-full text-center">
          <li>
            <a href="/mypage" className="hover:text-yellow-300">
              マイページ
            </a>
          </li>
          <li>
            <a href="/recipes/new" className="hover:text-yellow-300">
              レシピ投稿
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-yellow-300">
              ログイン
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
