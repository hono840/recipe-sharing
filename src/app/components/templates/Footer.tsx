"use client";

import React from "react";
import { Home, Search, PlusCircle, Bell, User } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", label: "ホーム", icon: <Home size={24} path="/" /> },
    { id: "search", label: "検索", icon: <Search size={24} path="/" /> },
    { id: "post", label: "投稿", icon: <PlusCircle size={24} path="/" /> },
    {
      id: "notifications",
      label: "通知",
      icon: <Bell size={24} path="/signin" />,
    },
    {
      id: "profile",
      label: "マイページ",
      icon: <User size={24} path="/mypage" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white border-t border-gray-700 md:hidden">
      <ul className="flex justify-around items-center py-3">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col items-center cursor-pointer ${
              activeTab === item.id ? "text-blue-400" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(item.id)}
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
