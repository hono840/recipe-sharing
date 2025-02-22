"use client";

import React, { useState } from "react";
import PageWrapper from "../components/molecules/PageWrapper";
import PageContentsWrapper from "../components/molecules/PageContentsWrapper";
import Header from "../components/templates/Header";
import { useUser } from "../hooks/useUser";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const MyPage = () => {
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
              <img
                src="/placeholder-avatar.jpg"
                alt="プロフィール画像"
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
            <div className="w-full  bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-yellow-400">
                投稿したレシピ
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
          </>
        ) : (
          // 未ログインの場合
          <>
            <div className="text-center text-lg font-semibold text-yellow-400">
              ログインが必要です
            </div>
            <div className="flex items-center justify-center gap-6">
              <a
                href="/login"
                className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
              >
                ログイン
              </a>
              <a
                href="/signup"
                className="mt-4 p-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
              >
                サインアップ
              </a>
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
