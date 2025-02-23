import React from "react";
import RecipeTitle from "../atoms/RecipeTitle";
import SmallText from "../atoms/SmallText";
import LikesCount from "../atoms/LikesCount";
import RecipeListCard from "./RecipeListCard";

const RecipeLists = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* サンプルデータ（動的に変更予定） */}
      {[...Array(6)].map((_, i) => (
        <RecipeListCard key={i}>
          <img
            src="/images/placeholder.png"
            alt="レシピ画像"
            className="w-full h-48 object-cover rounded-md"
          />
          <RecipeTitle>レシピタイトル{i + 1}</RecipeTitle>
          <SmallText>投稿者: ユーザー名</SmallText>
          <div className="flex justify-between items-center mt-2">
            <LikesCount likesCount={10} />
            <a
              href="/recipes/1"
              className="text-yellow-400 hover:text-yellow-300"
            >
              詳細を見る
            </a>
          </div>
        </RecipeListCard>
      ))}
    </div>
  );
};

export default RecipeLists;
