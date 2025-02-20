import React from "react";
import PageWrapper from "../components/molecules/PageWrapper";
import PageContentsWrapper from "../components/molecules/PageContentsWrapper";
import Header from "../components/templates/Header";

const MyPage = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        <Header />
        {/* ユーザー情報 */}
        <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="/placeholder-avatar.jpg"
            alt="プロフィール画像"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold text-yellow-400">ユーザー名</h1>
          <button className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
            プロフィール編集
          </button>
        </div>

        {/* 投稿したレシピ一覧 */}
        <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400">投稿したレシピ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <img
                  src="/placeholder.jpg"
                  alt="レシピ画像"
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">
                  レシピタイトル {i + 1}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <button className="text-yellow-400 hover:text-yellow-300">
                    編集
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* いいねしたレシピ一覧 */}
        <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400">
            いいねしたレシピ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                <img
                  src="/placeholder.jpg"
                  alt="レシピ画像"
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">
                  レシピタイトル {i + 1}
                </h3>
                <span className="text-yellow-300">❤️ 10</span>
              </div>
            ))}
          </div>
        </div>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default MyPage;
