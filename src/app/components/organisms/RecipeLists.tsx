import React, { useEffect, useState } from "react";
import RecipeTitle from "../atoms/RecipeTitle";
import SmallText from "../atoms/SmallText";
import LikesCount from "../atoms/LikesCount";
import RecipeListCard from "./RecipeListCard";
import { supabase } from "@/app/utils/supabaseClient";

interface Recipe {
  id: string;
  created_at: string;
  name: string;
  description: string;
  user_id: string;
  image_url: string;
}

const RecipeLists = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase.from("recipes").select("*");
      if (error) {
        console.error(error);
      }
      setRecipes(data || []);
      console.log(data);
    } catch {}
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* サンプルデータ（動的に変更予定） */}
      {recipes.map((reicpe) => (
        <RecipeListCard key={reicpe.id}>
          <img
            src="/images/placeholder.png"
            alt="レシピ画像"
            className="w-full h-48 object-cover rounded-md"
          />
          <RecipeTitle>{reicpe.name}</RecipeTitle>
          <SmallText>投稿者: 投稿者</SmallText>
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
