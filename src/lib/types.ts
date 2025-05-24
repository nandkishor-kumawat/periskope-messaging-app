
export interface User {
    id: string
    email: string
    name: string
    created_at: string
}

export interface ChatMember {
    id: string
    chat_id: string
    user_id: string
    user: User
    created_at: string
}

export interface Chat {
    id: string
    name: string
    is_group: boolean
    created_at: string
    members: ChatMember[]
}

export interface File {
    id: string
    message_id: string
    file_name: string
    file_type: string
    file_size: number
    file_url: string
    created_at: string
}

export interface Message {
    id: string
    chat_id: string
    sender_id: string
    content: string
    created_at: string
    user?: User
    files: File[]
}