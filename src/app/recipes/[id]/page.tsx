import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import Header from "@/app/components/templates/Header";
import React from "react";

const Recipes = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* ヘッダー */}
        <Header />
        {/* レシピ情報 */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-400">レシピタイトル</h1>
          <div className="flex items-center mt-2">
            <img
              src="/images/placeholder-avatar.png"
              alt="投稿者アイコン"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-gray-300">投稿者: ユーザー名</span>
          </div>
          <div className="w-full flex flex-col gap-4">
            <img
              src="/images/placeholder.png"
              alt="レシピ画像"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <button className="p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
              ❤️ いいね
            </button>
          </div>
        </div>

        {/* レシピ詳細 */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400">材料</h2>
          <ul className="list-disc list-inside mt-2">
            <li>材料 1</li>
            <li>材料 2</li>
            <li>材料 3</li>
          </ul>
        </div>

        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400">作り方</h2>
          <ol className="list-decimal list-inside mt-2">
            <li>手順 1</li>
            <li>手順 2</li>
            <li>手順 3</li>
          </ol>
        </div>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default Recipes;
