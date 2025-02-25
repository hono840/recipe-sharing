import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const useUser = () => {
  // ①ユーザー情報とログイン情報をstateで保持
  const [user, setUser] = useState<{
    id: string;
    email: string;
    username: string;
  } | null>(null);
  const [isLoggedin, setIsLoggedin] = useState<boolean | undefined>(undefined);

  // ②ユーザー情報を初期マウント時に取得
  useEffect(() => {
    // ②-1ユーザー情報をsupabaseから取得
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        // setUserにデータをセット
        setUser(
          // ユーザー情報があればオブジェクトとしてセット
          data?.user
            ? {
                id: data.user.id,
                email: data.user.email ?? "",
                username: data.user.user_metadata.username ?? "",
              }
            : // ユーザー情報がなければnullをセット
              null
        );
        setIsLoggedin(true);
      } else {
        setUser(null);
        setIsLoggedin(false);
      }
    };
    fetchUser();

    // 認証状態の変更を監視
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(
            session?.user
              ? {
                  id: session.user.id,
                  email: session.user.email ?? "",
                  username: session.user.user_metadata.username ?? "",
                }
              : null
          );
        }
        if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );
    return () => authListener?.subscription.unsubscribe();
  }, []);
  return { user, isLoggedin };
};
