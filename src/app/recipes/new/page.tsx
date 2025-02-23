"use client";

import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import Header from "@/app/components/templates/Header";
import { useUser } from "@/app/hooks/useUser";
import React, { useState } from "react";

const RecipesNew = () => {
  const { isLoggedin } = useUser();
  const [steps, setSteps] = useState<string[]>([""]);

  // 手順の追加
  const addStep = () => {
    setSteps([...steps, ""]);
  };

  // 手順の変更
  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  // 手順の削除
  const removeStep = (index: number) => {
    if (steps.length === 1) return; // 最低1つの手順は必要
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };
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
                placeholder={"・卵：2個\n・牛乳：100ml\n・砂糖：大さじ1"}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
                rows={3}
              ></textarea>
            </div>

            {/* 手順リスト */}
            <div className="w-full">
              <ul className="flex flex-col gap-7">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start flex-col gap-2">
                    <label className="block text-lg self-stretch">
                      手順{index + 1}
                    </label>
                    <textarea
                      className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
                      rows={3}
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                      placeholder={`手順 ${index + 1} を入力`}
                    />
                    {steps.length > 1 && (
                      <button
                        className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded"
                        onClick={() => removeStep(index)}
                      >
                        削除
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <button
                onClick={addStep}
                className="mt-6 p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-40"
              >
                手順を追加する
              </button>
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
