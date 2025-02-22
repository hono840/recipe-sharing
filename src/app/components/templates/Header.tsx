"use client";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 rounded-lg relative">
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
    </header>
  );
};

export default Header;
