import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


export const getChatById = async (chatId: string) => {
    if (!chatId) return null;
    const { data, error } = await supabase
        .from('chats')
        .select(`
                *,
                members:chat_members(
                    *,
                    user:user_id(
                            id,
                            phone,
                            name
                        )
                    )
        `)
        .eq('id', chatId)
        .single();
    if (error) {
        console.error('Error fetching chat:', error);
        return null;
    }
    return data;
}

