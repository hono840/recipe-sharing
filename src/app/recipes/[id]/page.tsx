import PageTitle from "@/app/components/atoms/PageTitle";
import PrimaryButton from "@/app/components/atoms/PrimaryButton";
import RecipeTitle from "@/app/components/atoms/RecipeTitle";
import SectionTitle from "@/app/components/atoms/SectionTitle";
import SmallText from "@/app/components/atoms/SmallText";
import PageContentsWrapper from "@/app/components/molecules/PageContentsWrapper";
import PageWrapper from "@/app/components/molecules/PageWrapper";
import SectionWrapper from "@/app/components/molecules/SectionWrapper";
import Header from "@/app/components/templates/Header";
import React from "react";

const Recipes = () => {
  return (
    <PageWrapper>
      <PageContentsWrapper>
        {/* ヘッダー */}
        <Header />
        {/* レシピ情報 */}
        <SectionWrapper>
          <PageTitle>レシピタイトル</PageTitle>
          <div className="flex items-center mt-2">
            <img
              src="/images/placeholder-avatar.png"
              alt="投稿者アイコン"
              className="w-10 h-10 rounded-full mr-3"
            />
            <SmallText>投稿者: ユーザー名</SmallText>
          </div>
          <div className="w-full flex flex-col gap-4">
            <img
              src="/images/placeholder.png"
              alt="レシピ画像"
              className="w-full h-64 object-cover rounded-md mt-4"
            />

            <PrimaryButton>❤️ いいね</PrimaryButton>
          </div>
        </SectionWrapper>

        {/* レシピ詳細 */}
        <SectionWrapper>
          <SectionTitle>材料</SectionTitle>
          <ul className="list-disc list-inside mt-2">
            <li>材料 1</li>
            <li>材料 2</li>
            <li>材料 3</li>
          </ul>
        </SectionWrapper>

        {/* 作り方 */}
        <SectionWrapper>
          <SectionTitle>作り方</SectionTitle>
          <ol className="list-decimal list-inside mt-2">
            <li>手順 1</li>
            <li>手順 2</li>
            <li>手順 3</li>
          </ol>
        </SectionWrapper>
      </PageContentsWrapper>
    </PageWrapper>
  );
};

export default Recipes;
