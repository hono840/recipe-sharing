"use client";
import React from "react";
import Header from "./components/templates/Header";

import RecipeLists from "./components/organisms/RecipeLists";
import PageWrapper from "./components/molecules/PageWrapper";
import PageContentsWrapper from "./components/molecules/PageContentsWrapper";
import PageTitle from "./components/atoms/PageTitle";

const Page = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* ヘッダー */}
        <Header />
        <PageTitle>レシピ一覧</PageTitle>
        {/* 検索バー */}
        {/* <SearchBar /> */}
        {/* レシピ一覧 */}
        <RecipeLists />
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default Page;
