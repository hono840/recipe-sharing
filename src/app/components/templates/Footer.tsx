"use client";

import React from "react";
import { Home, PlusCircle, User } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      id: "home",
      label: "ホーム",
      icon: <Home size={24} path="/" />,
      path: "/",
    },
    // {
    //   id: "search",
    //   label: "検索",
    //   icon: <Search size={24} path="/" />,
    //   path: "/signin",
    // },
    {
      id: "post",
      label: "レシピ投稿",
      icon: <PlusCircle size={24} path="/" />,
      path: "/recipes/new",
    },
    {
      id: "profile",
      label: "マイページ",
      icon: <User size={24} />,
      path: "/mypage",
    },
  ];

  // 指定のパスに遷移された場合はフッターを非表示
  const hiddenFooterPaths = ["/login", "/signup"];
  if (hiddenFooterPaths.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-700 md:hidden">
      <ul className="flex justify-around items-center py-3">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-center cursor-pointer ${
              activeTab === item.id ? "text-blue-400" : "text-gray-400"
            }`}
            onClick={() => {
              setActiveTab(item.id);
              router.push(item.path);
            }}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
