"use client";

import PageTitle from "@/app/components/atoms/PageTitle";
import PrimaryButton from "@/app/components/atoms/PrimaryButton";
import SmallText from "@/app/components/atoms/SmallText";
import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import SectionWrapper from "@/app/components/molecules/SectionWrapper";
import Header from "@/app/components/templates/Header";
import { Recipe } from "@/app/types/recipe";
import { supabase } from "@/app/utils/supabaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Recipes = () => {
  const params = useParams();
  const id = params.id;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const fetchRecipeDetails = async () => {
    try {
      const { data: recipeData, error: recipeError } = await supabase
        .from("recipes")
        .select("*")
        .eq("id", id)
        .single();

      if (recipeError) {
        console.error("レシピ取得エラー:", recipeError);
        return;
      }
      setRecipe(recipeData);

      // ingredients（材料）と steps（作り方）を同時に取得
      const { data, error } = await supabase
        .from("recipes")
        .select(
          `
        id,
        ingredients(name),
        steps(step_number, description)
        `
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("詳細取得エラー:", error);
        return;
      }
    } catch {
      console.error("レシピ詳細取得中にエラーが発生しました");
    }
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* ヘッダー */}
        <Header />
        {/* レシピ情報 */}
        <SectionWrapper>
          <PageTitle>{recipe?.name}</PageTitle>
          <div className="flex items-center mt-2">
            <img
              src={"/images/placeholder-avatar.png"}
              alt="投稿者アイコン"
              className="w-10 h-10 rounded-full mr-3"
            />
            <SmallText>投稿者: ユーザー名</SmallText>
          </div>
          <div className="w-full flex flex-col gap-4">
            <img
              src={recipe?.image_url ?? "/images/placeholder-avatar.png"}
              alt="レシピ画像"
              className="w-full h-64 object-cover rounded-md mt-4"
            />
            <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500 w-full max-w-2xl mt-6 shadow-md">
              <p className="whitespace-pre-wrap text-lg leading-relaxed text-white">
                {recipe?.description}
              </p>
            </div>
            <PrimaryButton>❤️ いいね</PrimaryButton>
          </div>
        </SectionWrapper>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default Recipes;
