// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../components/supabase/supabase';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  });
  res.status(200).send({ data, error })
}
