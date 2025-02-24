import { supabase } from "./supabaseClient";

/**
 * 画像を Supabase Storage にアップロードする関数
 * @param file アップロードする画像ファイル
 * @returns アップロードされた画像のパス（失敗した場合は null）
 */
export const uploadImage = async (file: File) => {
  if (!file) return null;

  const fileExt = file.name.split(".").pop(); // ファイル拡張子を取得
  const fileName = `${Date.now()}.${fileExt}`; // ユニークなファイル名を作成
  const filePath = `uploads/${fileName}`; // バケット内の保存パス

  // Supabase Storage にアップロード
  const { data, error } = await supabase.storage
    .from("uploads") // バケット名（適宜変更）
    .upload(filePath, file, { cacheControl: "3600", upsert: false });

  if (error) {
    console.error("アップロード失敗:", error.message);
    return null;
  }

  return data.path; // アップロードされたファイルのパスを返す
};

/**
 * アップロードした画像の URL を取得する関数
 * @param filePath Supabase Storage 内のファイルパス
 * @returns 公開 URL
 */
export const getImageUrl = (filePath: string) => {
  return supabase.storage.from("uploads").getPublicUrl(filePath).data.publicUrl;
};
