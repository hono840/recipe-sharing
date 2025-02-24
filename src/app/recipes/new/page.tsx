"use client";

import DeleteButton from "@/app/components/atoms/DeleteButton";
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
import { useUser } from "@/app/hooks/useUser";
import { supabase } from "@/app/utils/supabaseClient";
import React, { useEffect, useState } from "react";

const RecipesEdit = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [steps, setSteps] = useState<string[]>([""]);
  const [ingredients, setIngredients] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const user = useUser();

  useEffect(() => {
    if (user) {
      setUserId(user.user?.id ?? "");
    }
  }, [user]);

  // 手順の追加
  const addStep = () => {
    setSteps([...steps, ""]);
  };

  // 手順の変更
  const updateStep = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  // 手順の削除
  const removeStep = (index: number) => {
    if (steps.length === 1) return; // 最低1つの手順は必要
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  // 材料入力
  const onChangeIngredients = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIngredients(e.target.value);
  };

  // レシピタイトル
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // レシピの説明
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // 画像アップロード処理
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      // 画像プレビューを表示
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);

      // 🔹 Supabase に画像をアップロード
      await uploadImageToSupabase(file);
    }
  };

  const uploadImageToSupabase = async (file: File) => {
    try {
      // 🔹 一意なファイル名を作成（現在のタイムスタンプ + 元のファイル名）
      const filePath = `public/${Date.now()}-${file.name}`;

      // 🔹 Supabase Storage に画像をアップロード
      const { error } = await supabase.storage
        .from("recipe-images")
        .upload(filePath, file);

      if (error) {
        console.error("画像アップロードエラー:", error);
        return null;
      }

      // 🔹 アップロード成功時、画像のURLを取得（修正）
      const { data: publicUrlData } = supabase.storage
        .from("recipe-images")
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl; // ✅ 修正

      setImageUrl(publicUrl); // 🔹 state に保存
      return publicUrl;
    } catch (error) {
      console.error("画像アップロード中にエラー:", error);
      return null;
    }
  };

  // レシピの投稿処理
  const postRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!title || !ingredients || steps.length === 0) {
    //   alert("レシピのタイトル、材料、手順は必須です！");
    //   return;
    // }
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
      setIngredients("");
      setSteps([""]);
      setImagePreview(null);
      setSelectedFile(null);
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

          {/* レシピの説明 */}
          <SectionWrapper>
            <SectionTitle>レシピの説明</SectionTitle>
            <TextArea
              value={description}
              onChange={onChangeDescription}
              placeholder="卵とケチャップライスで作るシンプルなオムライスです。"
            />
          </SectionWrapper>

          {/* レシピ画像アップロード */}
          <SectionWrapper>
            <SectionTitle>レシピ画像</SectionTitle>
            <InputFile onChange={handleFileChange} />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="選択した画像"
                className="w-48 h-48 object-cover rounded-lg mt-4"
              />
            )}
          </SectionWrapper>

          {/* 材料リスト */}
          {/* <SectionWrapper>
            <SectionTitle>材料</SectionTitle>
            <TextArea
              placeholder={`・卵：2個\n・牛乳：100ml\n・砂糖：大さじ1`}
              value={ingredients}
              onChange={onChangeIngredients}
            />
          </SectionWrapper> */}

          {/* 手順リスト */}
          {/* <SectionWrapper>
            <ul className="flex flex-col gap-7">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start flex-col gap-2">
                  <SectionTitle>手順{index + 1}</SectionTitle>
                  <TextArea
                    placeholder={`手順 ${index + 1} を入力`}
                    value={step}
                    onChange={(e) => updateStep(index, e.target.value)}
                  />
                  {steps.length > 1 && (
                    <DeleteButton onClick={() => removeStep(index)} />
                  )}
                </li>
              ))}
            </ul>
            <PrimaryButton type="button" onClick={addStep}>
              手順を追加する
            </PrimaryButton>
          </SectionWrapper> */}

          {/* 投稿ボタン */}
          <PrimaryButton type="submit">投稿する</PrimaryButton>
        </form>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default RecipesEdit;
