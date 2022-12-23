import { useRouter } from "next/router"
import React from "react";
import { supabase } from "../components/supabase/supabase"
export default function Page() {
  const router = useRouter();
  React.useEffect(() => {
    (async() => {
      const { data, error } = await supabase.auth.getSession();
      if (!data || !data.session || error) {
        router.push("/login");
        return;
      }
      const { email, name, avatar_url}  = data.session.user.user_metadata;
      const { data: profileData, error: profileError } = await 
        supabase.from("profiles").select().filter("email", "eq", email);
      if (profileError) {
        router.push("/login");
        return ;
      }
      if (profileData.length === 0) { //profile doesn't exist
        const { data: insertedProfileData, error: insertErrorProfile} = 
          await supabase.from("profiles").insert({
            email,
            name,
            avatar_url
          });

        if (insertErrorProfile) {
          router.push("/login");
          return ;
        }
      } else if (avatar_url) { //update avatar url
        await supabase.from("profiles").update({ avatar_url }).eq('id', profileData[0].id);
      }
      router.push("/")
    })();
  }, [])
  return null;
}