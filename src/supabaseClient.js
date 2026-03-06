import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cqxxgcbvljgkrrapehix.supabase.co"
const supabaseKey = "sb_publishable_9BEz-pxu7AeSsc0PUymoHA_UIPQFKsd"

export const supabase = createClient(supabaseUrl, supabaseKey)