"use client";

import React, { useState } from "react";
import PageWrapper from "../components/molecules/PageWrapper";
import PageContentsWrapper from "../components/molecules/PageContentsWrapper";
import Header from "../components/templates/Header";
import { useUser } from "../hooks/useUser";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";
import SectionWrapper from "../components/molecules/SectionWrapper";
import SectionTitle from "../components/atoms/SectionTitle";
import RecipeTitle from "../components/atoms/RecipeTitle";
import SectiomContentsWrapper from "../components/molecules/SectiomContentsWrapper";
import GridLayout from "../components/molecules/GridLayout";
import PageTitle from "../components/atoms/PageTitle";
import PrimaryLink from "../components/atoms/PrimaryLink";
import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../types/recipe";

const MyPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { user, isLoggedin } = useUser();
  const router = useRouter();

  // モーダルの状態管理
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isLogoutSuccessOpen, setIsLogoutSuccessOpen] = useState(false);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      setIsLogoutConfirmOpen(false);
      setIsLogoutSuccessOpen(true);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };
  return (
    <PageWrapper>
      <PageContentsWrapper>
        <Header />

        {isLoggedin ? (
          // ログイン済みの場合
          <>
            {/* ユーザー情報 */}
            <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image
                src="/images/placeholder-avatar.png"
                alt="プロフィール画像"
                width={300}
                height={300}
                className="w-24 h-24 rounded-full mb-4"
              />
              {user?.username && (
                <h1 className="text-3xl font-bold text-yellow-400">
                  こんにちは、{user.username}さん
                </h1>
              )}
              <div className="flex justify-center items-center gap-3">
                <button className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">
                  プロフィール編集
                </button>
                <button
                  onClick={() => setIsLogoutConfirmOpen(true)}
                  className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
                >
                  ログアウト
                </button>
              </div>
            </div>

            {/* 投稿したレシピ一覧 */}
            <SectionWrapper>
              <SectionTitle>投稿したレシピ</SectionTitle>
              <GridLayout>
                {recipes.map((recipe, i) => (
                  <SectiomContentsWrapper key={i}>
                    <Image
                      src={recipe.image_url ?? "/images/placeholder.png"}
                      alt="レシピ画像"
                      width={300}
                      height={300}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <RecipeTitle>レシピタイトル {i + 1}</RecipeTitle>
                    <div className="flex justify-between items-center mt-2">
                      <Link
                        // href="/recipes/edit/[id]"
                        href={`/recipes/edit/${i + 1}`}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        編集
                      </Link>
                      <button className="text-red-400 hover:text-red-300">
                        削除
                      </button>
                    </div>
                  </SectiomContentsWrapper>
                ))}
                {/* {[...Array(1)].map((_, i) => (
                  <SectiomContentsWrapper key={i}>
                    <Image
                      src="/images/placeholder.png"
                      alt="レシピ画像"
                      width={300}
                      height={300}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <RecipeTitle>レシピタイトル {i + 1}</RecipeTitle>
                    <div className="flex justify-between items-center mt-2">
                      <Link
                        // href="/recipes/edit/[id]"
                        href={`/recipes/edit/${i + 1}`}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        編集
                      </Link>
                      <button className="text-red-400 hover:text-red-300">
                        削除
                      </button>
                    </div>
                  </SectiomContentsWrapper>
                ))} */}
              </GridLayout>
            </SectionWrapper>

            {/* いいねしたレシピ一覧 */}
            <SectionWrapper>
              <SectionTitle>いいねしたレシピ</SectionTitle>
              <GridLayout>
                {/* {[...Array(1)].map((_, i) => (
                  <SectiomContentsWrapper key={i}>
                    <Image
                      src="/images/placeholder.png"
                      alt="レシピ画像"
                      width={300}
                      height={300}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <RecipeTitle>レシピタイトル {i + 1}</RecipeTitle>
                  </SectiomContentsWrapper>
                ))} */}
              </GridLayout>
            </SectionWrapper>
          </>
        ) : (
          // 未ログインの場合
          <>
            <PageTitle>ログインが必要です</PageTitle>
            <div className="flex items-center justify-center gap-6">
              <PrimaryLink href="/login">ログイン</PrimaryLink>
              <PrimaryLink href="/signup">サインアップ</PrimaryLink>
            </div>
          </>
        )}

        {/* ログアウト確認モーダル */}
        {isLogoutConfirmOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-white text-lg">ログアウトしますか？</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-gray-500 px-4 py-2 rounded-lg text-white"
                  onClick={() => setIsLogoutConfirmOpen(false)}
                >
                  キャンセル
                </button>
                <button
                  className="bg-red-500 px-4 py-2 rounded-lg text-white"
                  onClick={logout}
                >
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ログアウト成功モーダル（1秒後に自動遷移） */}
        {isLogoutSuccessOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-white text-lg">ログアウトしました</p>
            </div>
          </div>
        )}
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default MyPage;
