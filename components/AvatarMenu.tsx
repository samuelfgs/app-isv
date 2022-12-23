// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAvatarMenu,
  DefaultAvatarMenuProps
} from "./plasmic/devocional/PlasmicAvatarMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from "./supabase/supabase";
import { useRouter } from "next/router";
import { Session } from "@supabase/supabase-js";
import { usePlasmicQueryData } from "@plasmicapp/query";

export interface AvatarMenuProps extends DefaultAvatarMenuProps {}


export const getAvatarUrl = (session?: Session | null) => {
  if (!session) {
    return undefined;
  }
  if ("avatar_url" in session.user.user_metadata) {
    return session.user.user_metadata.avatar_url;
  }
  return undefined;
}

function AvatarMenu_(props: AvatarMenuProps, ref: HTMLElementRefOf<"div">) {
  const { data, error } = usePlasmicQueryData("logged_user", async() => {
    const { data, error } = await supabase.auth.getSession();
    return data;
  });
  
  const router = useRouter();
  const onLogout = async() => {
    const { error } = await supabase.auth.signOut();
    if (error === null) {
      router.push("/login")
    }
  }

  return <PlasmicAvatarMenu 
    root={{ ref }} 
    {...props} 
    logout={{
      onClick: onLogout
    }}
    url={getAvatarUrl(data?.session)}
  />;
}

const AvatarMenu = React.forwardRef(AvatarMenu_);
export default AvatarMenu;
