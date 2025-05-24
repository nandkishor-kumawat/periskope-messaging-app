import { cn, formatDate, getInitials } from '@/lib/utils';
import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useAuth } from '@/lib/auth-provider';
import type { Message } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

const MessagePreviewPure = ({ message }: { message: Message }) => {
    const { user } = useAuth();
    const isSender = message.sender_id === user?.id;

    return (
        <div className={cn("sm:max-w-[80%] max-w-[90%] flex", isSender ? "ml-auto" : "flex-row gap-2")}>
            {!isSender && (
                <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10 border border-white">
                        <AvatarFallback className="text-xs">
                            {getInitials(message?.user?.name)}
                        </AvatarFallback>
                    </Avatar>
                </div>
            )}
            <div className={`rounded px-2.5 ${isSender ? 'bg-[#E7FEDC]' : 'bg-[#fff]'} text-sm shadow pb-0.5`}>
                <div className="flex justify-between sm:gap-10 gap-4 pt-2.5 pb-1.5">
                    <p className={`${isSender ? "text-[#0c8f4e]" : "text-[#22d77b]"} text-xs font-semibold`}>
                        {message?.user?.name}
                    </p>
                    <span className="text-xs text-gray-400">+91 93839 39393</span>
                </div>

                {message.files && message.files.length > 0 && (
                    <div className="mt-1 flex flex-col gap-2">
                        {message.files.map((file) => (
                            file.file_type.startsWith('image/') ? (
                                <Image
                                    key={file.id}
                                    src={file.file_url}
                                    alt={file.file_name}
                                    className="max-w-xs rounded border"
                                />
                            ) : (
                                <div key={file.id} className="px-2">
                                    <Link
                                        href={file.file_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm line-clamp-1 flex items-center gap-2"
                                        download
                                    >
                                        <FiDownload size={18} /> {file.file_name}
                                    </Link>
                                    <span className="text-[10px] text-gray-400">
                                        {formatBytes(file.file_size)}
                                    </span>
                                </div>
                            )
                        ))}
                    </div>
                )}

                <p className="whitespace-pre-wrap break-words min-w-fit">{message.content}</p>

                <div className={`flex items-center gap-1 mt-1 justify-end`}>
                    <span className='text-[10px] text-gray-500'>
                        {formatDate(message.created_at)}
                    </span>
                    {isSender && <BsCheckAll className='text-[#5293EC]' size={16} />}
                </div>
            </div>
        </div>
    );
};

const MessagePreview = React.memo(MessagePreviewPure, (prevProps, nextProps) => {
    return (
        prevProps.message.id === nextProps.message.id &&
        prevProps.message.content === nextProps.message.content &&
        prevProps.message.sender_id === nextProps.message.sender_id &&
        prevProps.message.chat_id === nextProps.message.chat_id &&
        prevProps.message.created_at === nextProps.message.created_at &&
        prevProps.message.files.length === nextProps.message.files.length
    );
});

export default MessagePreview;
