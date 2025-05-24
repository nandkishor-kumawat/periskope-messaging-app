import React, { useEffect } from 'react';
import MessagePreview from './message-preview';
import { useChat } from '@/hooks/use-chat';

// Helper to format date nicely (like WhatsApp)
const formatDateDivider = (date: Date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    // Format dates without time
    const d = date.toDateString();
    const t = today.toDateString();
    const y = yesterday.toDateString();

    if (d === t) return 'Today';
    if (d === y) return 'Yesterday';

    return date.toLocaleDateString('en-GB'); // UK format: day/month/year
};

const Messages = ({ chatId }: { chatId: string }) => {
    const { messages } = useChat({ chatId });
    const messageEndRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({
                behavior: 'instant',
                block: 'end',
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    let lastDate: string | null = null;

    return (
        <div className="flex flex-col flex-1 px-0.5 py-2 bg-[#f8f6f4] bg-[url('/bg.png')]">
            <div className="flex-1 overflow-y-auto scrollbar">
                <div className="flex flex-col p-4 h-0 space-y-4">
                    {messages.map((message) => {
                        const messageDate = new Date(message.created_at);
                        const dateStr = messageDate.toDateString();

                        // Check if we need to show date divider
                        const showDateDivider = lastDate !== dateStr;
                        lastDate = dateStr;

                        return (
                            <React.Fragment key={message.id}>
                                {showDateDivider && (
                                    <p className="mx-auto w-fit px-1.5 py-0.5 rounded-sm font-semibold bg-[#efeff0] text-xs text-[#79828d]">
                                        {formatDateDivider(messageDate)}
                                    </p>
                                )}
                                <MessagePreview message={message} />
                            </React.Fragment>
                        );
                    })}

                    <div className="min-h-6 shrink-0" ref={messageEndRef}></div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
