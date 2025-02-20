import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import React from "react";

const RecipesEdit = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* レシピ編集フォーム */}

        <h1 className="text-3xl font-bold text-yellow-400">レシピを編集</h1>
        {/* レシピタイトル */}
        <div className="w-full">
          <label className="block text-lg self-stretch">レシピタイトル</label>
          <input
            type="text"
            // value={recipe.title}
            // onChange={handleChange}
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
            // value={recipe.ingredients}
            // onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
            rows={3}
          ></textarea>
        </div>

        {/* 作り方リスト */}
        <div className="w-full">
          <label className="block text-lg self-stretch">作り方</label>
          <textarea
            // value={recipe.steps}
            // onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
            rows={5}
          ></textarea>
        </div>

        {/* 更新ボタン */}
        <button className="p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-full">
          更新する
        </button>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default RecipesEdit;
