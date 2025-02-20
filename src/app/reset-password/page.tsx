import React from "react";

const ResetPassword = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-6">
      {/* パスワードリセットフォーム */}
      <div className="w-full max-w-[600px] bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400">
          パスワードリセット
        </h1>
        <p className="mt-2 text-gray-300">
          登録したメールアドレスを入力してください。リセットリンクを送信します。
        </p>

        {/* メール入力フィールド */}
        <label className="block mt-4 text-lg">メールアドレス</label>
        <input
          type="email"
          placeholder="example@example.com"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
        />

        {/* 送信ボタン */}
        <button className="mt-6 p-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 w-full">
          リセットリンクを送信
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
