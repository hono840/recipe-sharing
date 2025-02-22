"use client";
import { useUser } from "@/app/hooks/useUser";
import { supabase } from "@/app/utils/supabaseClient";
import React from "react";

const Header = () => {
  const { isLoggedin } = useUser();
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 rounded-lg relative">
      <h1 className="text-3xl font-bold text-yellow-400">🍳 Recipe Hub</h1>
      <nav className="hidden md:flex gap-6">
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-yellow-300">
              レシピ一覧
            </a>
          </li>
          <li>
            <a href="/recipes/new" className="hover:text-yellow-300">
              レシピ投稿
            </a>
          </li>
          {!isLoggedin && (
            <li>
              <a href="/login" className="hover:text-yellow-300">
                ログイン
              </a>
            </li>
          )}
          {!isLoggedin && (
            <li>
              <a href="/signup" className="hover:text-yellow-300">
                サインアップ
              </a>
            </li>
          )}
          {isLoggedin && (
            <li>
              <a href="/mypage" className="hover:text-yellow-300">
                マイページ
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
