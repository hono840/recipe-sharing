import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export const useUser = () => {
  const [user, setUser] = useState<{
    id: string;
    email: string;
    username: string;
  } | null>(null);
  const [isLoggedin, setIsLoggedin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) {
        setUser(
          data?.user
            ? {
                id: data.user.id,
                email: data.user.email ?? "",
                username: data.user.user_metadata.username ?? "",
              }
            : null
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
                  username: session.user.user_metadata.userName ?? "",
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
