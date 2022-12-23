import { useRouter } from "next/router";
import React from "react";
import { supabase } from "./supabase/supabase";

export function useIsLoggedIn() {
  const router = useRouter();
  React.useEffect(() => {
    (async() => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session === null) {
        router.push("/login")
      }
    })();
  }, []);
}