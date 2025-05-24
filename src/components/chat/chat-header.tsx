import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { BsStars } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { getChatById } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Chat } from "@/lib/types";

const ChatHeader = ({
    chatId
}: {
    chatId: string;
}) => {

    const [chat, setChat] = useState<Chat | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            const chat = await getChatById(chatId);
            setChat(chat);
        };
        fetchMembers();
    }, [chatId]);

    const { members = [] } = chat || {};

    if (!chat) return null;

    return (
        <div className="border-b border-[#dad6d64a] h-12 px-2 py-1.5 flex justify-between items-center bg-white">
            <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10 border border-white">
                    <AvatarFallback className="text-xs">RA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h2 className="font-bold text-sm">{chat.name}</h2>
                    <p className="text-xs text-gray-500 line-clamp-1">
                        {members.map(({ user }) => user.name).join(', ')}
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex -space-x-1">
                    {members.map(({ user }, idx) => (
                        <Avatar key={idx} className="h-8 w-8 border border-white">
                            <AvatarFallback className="text-xs">{user.name.split(" ").map(e => e[0]).join('').toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <div className="flex items-center gap-2 px-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                        <BsStars className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                        <BiSearch className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;