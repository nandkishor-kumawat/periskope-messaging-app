import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'
import type { Chat, Message, User } from '@/lib/types'
import { useAuth } from '@/lib/auth-provider'

export const useChat = (props: { chatId: string }) => {
    const { user } = useAuth();
    const [chats, setChats] = useState<Chat[]>([])
    const [messages, setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState<Message | null>(null)
    const [newChat, setNewChat] = useState<Chat | null>(null)
    const [updatedUser, setUpdatedUser] = useState<User | null>(null)
    const [deletedChat, setDeletedChat] = useState<Chat | null>(null)
    const [deletedMessage, setDeletedMessage] = useState<Message | null>(null)

    useEffect(() => {
        if (!user?.id) return

        getUserChats(user.id).then(setChats)

        const messageListener = supabase.channel('public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) =>
                setNewMessage(payload.new as Message)
            )
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'messages' }, (payload) =>
                setDeletedMessage(payload.old as Message)
            )
            .subscribe()

        const userListener = supabase.channel('public:users')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, (payload) =>
                setUpdatedUser(payload.new as User)
            )
            .subscribe()

        const chatListener = supabase.channel('public:chats')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) =>
                setNewChat(payload.new as Chat)
            )
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'chats' }, (payload) =>
                setDeletedChat(payload.old as Chat)
            )
            .subscribe()

        return () => {
            supabase.removeChannel(messageListener)
            supabase.removeChannel(userListener)
            supabase.removeChannel(chatListener)
        }
    }, [user?.id])

    useEffect(() => {
        if (props?.chatId) {
            fetchMessages(props.chatId).then(setMessages)
        }
    }, [props.chatId])

    useEffect(() => {
        if (newMessage && newMessage.chat_id === props.chatId) {
            const handle = async () => {
                const { data, error } = await supabase
                    .from('messages')
                    .select('*, user:sender_id(*), files:files(*)')
                    .eq('id', newMessage.id)
                    .single();

                if (error) {
                    console.error('Failed to fetch full message with files:', error);
                    return;
                }

                setMessages((prev) => [...prev, data]);
            };
            handle();
        }
    }, [newMessage, props.chatId]);


    useEffect(() => {
        if (deletedMessage) {
            setMessages((prev) => prev.filter((msg) => msg.id !== deletedMessage.id))
        }
    }, [deletedMessage])

    useEffect(() => {
        if (newChat) setChats((prev) => [...prev, newChat])
    }, [newChat])

    useEffect(() => {
        if (deletedChat) setChats((prev) => prev.filter((chat) => chat.id !== deletedChat.id))
    }, [deletedChat])


    return {
        messages,
        chats,
        users: updatedUser
    }
}

export const getUserChats = async (userId: string): Promise<Chat[]> => {
    if (!userId) return [];
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
        .order('created_at', { ascending: false });
    if (error) {
        console.error('Error fetching chats:', error);
        return [];
    }

    return data.filter((chat: Chat) => chat.members.some((member: Chat['members'][number]) => member.user_id === userId));
}

export const fetchUser = async (userId: string): Promise<User | null> => {
    const { data, error } = await supabase.from('users').select('*').eq('id', userId)
    if (error || !data?.[0]) {
        console.error('Fetch user error:', error)
        return null
    }
    return data[0]
}

export const fetchMessages = async (chatId: string) => {
    const { data, error } = await supabase
        .from('messages')
        .select('*, user:sender_id(*), files:files(*)')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });
    if (error) console.error('Fetch messages error:', error)
    return data || []
}


export const addMessage = async (chat_id: string, sender_id: string, content: string) => {
    const { data, error } = await supabase
        .from('messages')
        .insert([{ chat_id, sender_id, content }])
        .select()
    if (error) console.error('Add message error:', error)
    return data?.[0] || null
}

export const deleteChat = async (chatId: string) => {
    const { data, error } = await supabase.from('chats').delete().eq('id', chatId)
    if (error) console.error('Delete chat error:', error)
    return data
}

export const deleteMessage = async (messageId: string) => {
    const { data, error } = await supabase.from('messages').delete().eq('id', messageId)
    if (error) console.error('Delete message error:', error)
    return data
}
