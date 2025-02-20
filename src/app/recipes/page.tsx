"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

interface Recipe {
  id: string;
  created_at: string;
  name: string;
  description: string;
  user_id: string;
}

const Page = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase.from("recipes").select("*");
      if (data) {
        setRecipes(data);
        console.log(data);
      }
      if (error) {
        console.error("レシピデータを取得中エラーが発生しました", error);
        return;
      }
    } catch {
      console.error("レシピデータを取得中エラーが発生しました");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div>
      <ul>
        {recipes ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <p>{recipe.name}</p>
              <p>{recipe.description}</p>
            </li>
          ))
        ) : (
          <p>レシピデータがありません</p>
        )}
        {/* {recipes.map((recipe) => (
          <li>
            <p>{recipe.name}</p>
            <p>{recipe.description}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Page;
