import { createClient } from '@/utils/supabase/server';


export default async function Users() {
    const supabase = await createClient();
    const { data: songs } = await supabase.from("songs").select();

    return <pre>{JSON.stringify(songs, null, 2)}</pre>
  }