'use client'

import { useRef, useState } from 'react'
import { HiOutlineSelector, HiOutlineSparkles } from 'react-icons/hi'
import { GoClock, GoPaperclip } from 'react-icons/go'
import { AiOutlineHistory } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import { FaSquarePollHorizontal } from 'react-icons/fa6'
import { CiFaceSmile } from 'react-icons/ci'

import { Button } from '../ui/button'
import { useAuth } from '@/lib/auth-provider'
import { supabase } from '@/lib/supabase'

interface ChatFormProps {
    chatId: string
}

const ChatForm: React.FC<ChatFormProps> = ({ chatId }) => {
    const { user } = useAuth()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const sendMessage = async () => {
        const trimmed = message.trim()
        if (!trimmed || !user?.id) return

        setLoading(true)
        try {
            const { error } = await supabase.from('messages').insert({
                chat_id: chatId,
                sender_id: user.id,
                content: trimmed,
            })

            if (!error) setMessage('')
        } catch (err) {
            console.error('Unexpected error:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
            e.currentTarget.focus()
        }
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !user?.id) return;

        const MAX_SIZE = 10 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            alert('File size must be less than 10MB');
            return;
        }

        setLoading(true);
        try {
            const filePath = `${chatId}/${Date.now()}_${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from('files')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const fileUrl = supabase.storage.from('files').getPublicUrl(filePath).data.publicUrl;
            const fileType = file.type || 'application/octet-stream';

            const { data: messageInsertData, error: messageInsertError } = await supabase
                .from('messages')
                .insert({
                    chat_id: chatId,
                    sender_id: user.id,
                    content: '',
                })
                .select('id')
                .single();

            if (messageInsertError || !messageInsertData?.id) throw messageInsertError;

            const { error: fileInsertError } = await supabase.from('files').insert({
                message_id: messageInsertData.id,
                file_name: file.name,
                file_size: file.size,
                file_type: fileType,
                file_url: fileUrl,
            });

            if (fileInsertError) throw fileInsertError;
        } catch (err) {
            console.error('File upload error:', err);
            alert('Failed to upload file');
        } finally {
            setLoading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };



    return (
        <div className="border-t border-[#dad6d64a] bg-white px-4 pt-2 pb-3 relative">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
            />

            <div className="absolute bottom-full flex items-center gap-2 text-xs mb-1 font-medium">
                <span className="bg-green-50 text-green-600 px-2 py-1 rounded flex items-center gap-1">WhatsApp</span>
                <span className="bg-yellow-50 text-yellow-800 px-2 py-1 rounded flex items-center gap-1">Private Note</span>
                <span className="text-gray-400 text-[10px]">17925</span>
            </div>

            <div className="mb-3 flex items-end">
                <input
                    type="text"
                    placeholder="Message..."
                    className="w-full border-none py-2 text-sm outline-none focus-visible:outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                />
                <button
                    className="aspect-square text-[#0c8f4e] hover:text-green-700 p-2 disabled:opacity-50"
                    onClick={sendMessage}
                    disabled={loading || !message.trim()}
                >
                    <IoMdSend size={20} />
                </button>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <GoPaperclip size={18} />
                    </Button>
                    <Button variant="ghost" size="icon"><CiFaceSmile size={18} /></Button>
                    <Button variant="ghost" size="icon"><GoClock size={18} /></Button>
                    <Button variant="ghost" size="icon"><AiOutlineHistory size={18} /></Button>
                    <Button variant="ghost" size="icon"><HiOutlineSparkles size={18} /></Button>
                    <Button variant="ghost" size="icon"><FaSquarePollHorizontal size={18} /></Button>
                    <Button variant="ghost" size="icon"><FaMicrophone size={18} /></Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="text-sm px-2 rounded-sm">
                        <FaMicrophone className="h-3 w-3 text-gray-400" />
                        <span>Periskope</span>
                        <HiOutlineSelector className="h-3 w-3 text-gray-400" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatForm
