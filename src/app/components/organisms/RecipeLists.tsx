import React from "react";

const RecipeLists = () => {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* サンプルデータ（動的に変更予定） */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            src="/placeholder.jpg"
            alt="レシピ画像"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-semibold mt-3">
            レシピタイトルレシピタイトルレシピタイトルレシピタイトルレシピタイトルレシピタイトル{" "}
            {i + 1}
          </h2>
          <p className="text-sm text-gray-400">投稿者: ユーザー名</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-yellow-300">❤️ 10</span>
            <a
              href="/recipes/1"
              className="text-yellow-400 hover:text-yellow-300"
            >
              詳細を見る
            </a>
          </div>
        </div>
      ))}
    </main>
  );
};

export default RecipeLists;
