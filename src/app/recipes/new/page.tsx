"use client";

import Input from "@/app/components/atoms/Input";
import InputFile from "@/app/components/atoms/InputFile";
import PageTitle from "@/app/components/atoms/PageTitle";
import PrimaryButton from "@/app/components/atoms/PrimaryButton";
import SectionTitle from "@/app/components/atoms/SectionTitle";
import TextArea from "@/app/components/atoms/TextArea";
import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import SectionWrapper from "@/app/components/molecules/SectionWrapper";
import Header from "@/app/components/templates/Header";
import { RECIPE_TEMPLATE } from "@/app/constants/recipeTemplate";
import { useUser } from "@/app/hooks/useUser";
import { supabase } from "@/app/utils/supabaseClient";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RecipesEdit = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const user = useUser();

  useEffect(() => {
    if (user) {
      setUserId(user.user?.id ?? "");
    }
  }, [user]);

  // レシピタイトル
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // レシピの説明
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // テンプレート本文を使用
  const usedTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDescription(RECIPE_TEMPLATE);
  };

  // 画像アップロード処理
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // 画像プレビューを表示
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);

      await uploadImageToSupabase(file);
    }
  };

  const uploadImageToSupabase = async (file: File) => {
    try {
      const filePath = `public/${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("recipe-images")
        .upload(filePath, file);

      if (error) {
        console.error("画像アップロードエラー:", error);
        return null;
      }

      const { data: publicUrlData } = supabase.storage
        .from("recipe-images")
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl;

      setImageUrl(publicUrl);
      return publicUrl;
    } catch (error) {
      console.error("画像アップロード中にエラー:", error);
      return null;
    }
  };

  // レシピの投稿処理
  const postRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      alert("レシピのタイトル、説明は必須です！");
      return;
    }
    try {
      const { error } = await supabase.from("recipes").insert([
        {
          name: title,
          description: description,
          image_url: imageUrl || null,
          user_id: userId,
          created_at: new Date(),
        },
      ]);
      if (error) {
        console.error("レシピ投稿中にエラー:", error);
        alert("エラーが発生しました。");
        return;
      }
      alert("レシピが投稿されました！");
      setTitle(""); // フォームをリセット
      setDescription("");
      setImagePreview(null);
      setImageUrl(null);
    } catch {
      console.error("レシピ投稿中にエラー:");
      alert("エラーが発生しました。");
    }
  };

  return (
    <PageWrapper>
      <PageContentsWrapper>
        <Header />
        {/* レシピ編集フォーム */}
        <PageTitle>レシピ投稿</PageTitle>
        <form
          onSubmit={postRecipe}
          className="w-full flex flex-col gap-7 pb-10"
        >
          {/* レシピタイトル */}
          <SectionWrapper>
            <SectionTitle>レシピタイトル</SectionTitle>
            <Input
              value={title}
              onChange={onChangeTitle}
              placeholder="（例）簡単オムライス"
            />
          </SectionWrapper>

          {/* レシピ画像アップロード */}
          <SectionWrapper>
            <SectionTitle>レシピ画像</SectionTitle>
            <InputFile onChange={handleFileChange} />

            {imagePreview && (
              <Image
                src={imagePreview}
                alt="選択した画像"
                width={300}
                height={300}
                className="w-48 h-48 object-cover rounded-lg mt-4"
              />
            )}
          </SectionWrapper>

          {/* レシピの本文 */}
          <SectionWrapper>
            <div className="flex justify-between items-center">
              <SectionTitle>レシピの本文</SectionTitle>
              <button
                onClick={usedTemplate}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
              >
                テンプレート本文を使用
              </button>
            </div>
            <TextArea
              rows={20}
              value={description}
              onChange={onChangeDescription}
              placeholder={RECIPE_TEMPLATE}
            />
          </SectionWrapper>

          {/* 投稿ボタン */}
          <PrimaryButton type="submit">投稿する</PrimaryButton>
        </form>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default RecipesEdit;
