"use client";
import LeftSidebar from "@/components/chat/left-sidebar";
import Header from "@/components/chat/header";
import ChatList from "@/components/chat/chat-list";
import ChatHeader from "@/components/chat/chat-header";
import Messages from "@/components/chat/messages";
import ChatForm from "@/components/chat/chat-form";
import RightSidebar from "@/components/chat/right-sidebar";
import React, { useCallback } from "react";
import { useAuth } from "@/lib/auth-provider";
import { useRouter } from "next/navigation";

export default function ChatsPage() {

    const [activeChatId, setActiveChatId] = React.useState('');

    const setActiveChat = useCallback((chatId: string) => {
        setActiveChatId(chatId);
    }, [])

    const { loading, user } = useAuth();
    const router = useRouter();

    if (!loading && !user) {
        router.replace('/login')
        return;
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-[60px_1fr] h-dvh w-full overflow-hidden bg-white">
            <LeftSidebar />
            <div className="flex flex-1 relative flex-col">
                <Header />
                <div className="flex flex-1">
                    <div className="flex w-full">
                        <ChatList activeChatId={activeChatId} setActiveChatId={setActiveChat} />
                        {
                            activeChatId && (
                                <>
                                    <div className="flex flex-col flex-1 overflow-hidden">
                                        <ChatHeader chatId={activeChatId} />
                                        <Messages chatId={activeChatId} />
                                        <ChatForm chatId={activeChatId} />
                                    </div>
                                    <RightSidebar />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
