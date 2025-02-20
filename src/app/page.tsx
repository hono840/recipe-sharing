"use client";
import React, { useState } from "react";
import Header from "./components/templates/Header";
// import SearchBar from "./components/organisms/SearchBar";
import RecipeLists from "./components/organisms/RecipeLists";
import PageWrapper from "./components/molecules/PageWrapper";
import PageContentsWrapper from "./components/molecules/PageContentsWrapper";

const Page = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* ヘッダー */}
        <Header />
        {/* 検索バー */}
        {/* <SearchBar /> */}
        {/* レシピ一覧 */}
        <RecipeLists />
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default Page;
