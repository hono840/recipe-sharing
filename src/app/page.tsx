"use client";
import React, { useState } from "react";
import Header from "./components/templates/Header";
import SearchBar from "./components/organisms/SearchBar";
import RecipeLists from "./components/organisms/RecipeLists";

const Page = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10">
      {/* ヘッダー */}
      <Header />
      {/* 検索バー */}
      <SearchBar />
      {/* レシピ一覧 */}
      <RecipeLists />
    </div>
  );
};

export default Page;
