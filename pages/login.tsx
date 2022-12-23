// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { ScreenVariantProvider } from "../components/plasmic/devocional/PlasmicGlobalVariant__Screen";
import { PlasmicLogin } from "../components/plasmic/devocional/PlasmicLogin";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../components/supabase/supabase";

function Login() {

  const onInstagramLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/redirect`
      }
    });
  } 

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicLogin
        instagram={{
          onClick: onInstagramLogin
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default Login;
