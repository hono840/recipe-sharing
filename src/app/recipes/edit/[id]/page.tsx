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
import React, { useState } from "react";

const RecipesEdit = () => {
  const [steps, setSteps] = useState<string[]>([""]);

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
  return (
    <PageWrapper>
      <PageContentsWrapper>
        <Header />
        {/* レシピ編集フォーム */}
        <PageTitle>レシピ編集</PageTitle>
        {/* レシピタイトル */}
        <SectionWrapper>
          <SectionTitle>レシピタイトル</SectionTitle>
          <Input />
        </SectionWrapper>

        {/* レシピ画像アップロード */}
        <SectionWrapper>
          <SectionTitle>レシピ画像</SectionTitle>
          <InputFile />
        </SectionWrapper>

        {/* 材料リスト */}
        <SectionWrapper>
          <SectionTitle>材料</SectionTitle>
          <TextArea placeholder={`・卵：2個\n・牛乳：100ml\n・砂糖：大さじ1`} />
        </SectionWrapper>

        {/* 手順リスト */}
        <SectionWrapper>
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
          <PrimaryButton onClick={addStep}>手順を追加する</PrimaryButton>
        </SectionWrapper>

        {/* 更新ボタン */}
        <PrimaryButton>更新する</PrimaryButton>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default RecipesEdit;
