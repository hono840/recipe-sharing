"use client";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
          },
        },
      });
      if (error) console.error(error);
    } catch {
      console.error("サインアップに失敗しました");
    }

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ username: "", email: "", password: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg relative">
        {/* ローディングオーバーレイ */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
            登録中...
          </div>
        )}

        {/* トースト通知 */}
        {success && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
            サインアップ成功！
          </div>
        )}

        <h2 className="text-2xl font-semibold text-center mb-4">
          サインアップ
        </h2>

        <form onSubmit={signup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">ユーザー名</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={onChangeValue}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeValue}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">パスワード</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChangeValue}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition disabled:opacity-50"
          >
            登録
          </button>
        </form>

        {/* 👇 すでにアカウントを持っている人向けの案内 */}
        <p className="mt-4 text-xs text-gray-400 text-center">
          すでにアカウントをお持ちの方は{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            こちらからログイン
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
