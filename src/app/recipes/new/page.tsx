"use client";

import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import Header from "@/app/components/templates/Header";
import { useUser } from "@/app/hooks/useUser";
import React from "react";

const RecipesNew = () => {
  const { isLoggedin } = useUser();
  return (
    <PageWrapper>
      <PageContentsWrapper>
        <Header />
        {/* レシピ投稿フォーム */}
        <h1 className="text-3xl font-bold text-yellow-400">レシピを投稿</h1>
        {isLoggedin ? (
          <>
            {/* レシピタイトル */}
            <div className="w-full">
              <label className="block text-lg self-stretch">
                レシピタイトル
              </label>
              <input
                type="text"
                placeholder="レシピのタイトルを入力"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* レシピ画像アップロード */}
            <div className="w-full">
              <label className="block text-lg self-stretch">レシピ画像</label>
              <input
                type="file"
                className="w-full file:bg-yellow-400 file:text-black file:font-semibold file:p-2 file:rounded-lg file:hover:bg-yellow-300"
              />
            </div>

            {/* 材料リスト */}
            <div className="w-full">
              <label className="block text-lg self-stretch">材料</label>
              <textarea
                placeholder="材料を入力（例：卵 2個, 牛乳 200ml）"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
                rows={3}
              ></textarea>
            </div>

            {/* 作り方リスト */}
            <div className="w-full">
              <label className="block text-lg self-stretch">作り方</label>
              <textarea
                placeholder="作り方を入力（例：1. フライパンを熱する, 2. 卵を入れる）"
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
              ></textarea>
            </div>

            {/* 投稿ボタン */}
            <button className="mt-6 p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-full">
              投稿する
            </button>
          </>
        ) : (
          <>
            <div className="text-center text-lg font-semibold text-yellow-400">
              ログインもしくはサインアップが必要です
            </div>
            <div className="flex items-center justify-center gap-6">
              <a
                href="/login"
                className="mt-6 p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-full whitespace-nowrap"
              >
                ログイン
              </a>
              <a
                href="/signup"
                className="mt-6 p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-full whitespace-nowrap"
              >
                サインアップ
              </a>
            </div>
          </>
        )}
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default RecipesNew;
