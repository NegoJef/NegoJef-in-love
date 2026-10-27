
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://csiisakwtvnxpzdfzkwu.supabase.co/rest/v1/';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_BQirksrx3KPvi3zhvh-Hdw_dqvxT7OZ';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    
    auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: window.sessionStorage,
    detectSessionInUrl: false
    }

  }
);
