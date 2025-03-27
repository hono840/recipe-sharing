"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabaseClient";
import Link from "next/link";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) console.error(error);
    } catch {
      console.error("ログインに失敗しました");
    }

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ email: "", password: "" });
      router.push("/mypage");
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg relative">
        {/* ローディングオーバーレイ */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
            ログイン中...
          </div>
        )}

        {/* トースト通知 */}
        {success && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
            ログイン成功！
          </div>
        )}

        <h2 className="text-2xl font-semibold text-center mb-4">ログイン</h2>

        <form onSubmit={login} className="space-y-4">
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
            ログイン
          </button>
        </form>

        {/* 👇 アカウントを持っていない人向けの案内 */}
        <p className="mt-4 text-xs text-gray-400 text-center">
          アカウントをお持ちでない方は{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            こちらからサインアップ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
