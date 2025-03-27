"use client";
import { useUser } from "@/app/hooks/useUser";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { isLoggedin } = useUser();
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 rounded-lg relative">
      <h1 className="text-3xl font-bold text-yellow-400">🍳 Recipe Hub</h1>
      <nav className="hidden md:flex gap-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              レシピ一覧
            </Link>
          </li>
          <li>
            <Link href="/recipes/new" className="hover:text-yellow-300">
              レシピ投稿
            </Link>
          </li>
          {!isLoggedin && (
            <li>
              <Link href="/login" className="hover:text-yellow-300">
                ログイン
              </Link>
            </li>
          )}
          {!isLoggedin && (
            <li>
              <Link href="/signup" className="hover:text-yellow-300">
                サインアップ
              </Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link href="/mypage" className="hover:text-yellow-300">
                マイページ
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
