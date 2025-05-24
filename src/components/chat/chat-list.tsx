import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { HiFolderArrowDown } from "react-icons/hi2";
import { MdOutlineFilterList } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { IoIosCloseCircle } from "react-icons/io";
import { useChat } from "@/hooks/use-chat";


const ChatList = ({
    activeChatId,
    setActiveChatId,
}: {
    activeChatId: string;
    setActiveChatId: (id: string) => void;
}) => {

    const { chats } = useChat({ chatId: activeChatId });

    return (
        <aside className="border-r border-[#dad6d64a] overflow-y-hidden flex flex-col">

            <div className="bg-gray-50 px-3 h-12 flex items-center gap-2 border-b">
                <div className="flex gap-2">
                    <div className="flex items-end gap-1 rounded-md px-2 py-1 text-[#0c8f4e]">
                        <HiFolderArrowDown size={18} />
                        <span className="text-xs font-medium">Custom filter</span>
                    </div>
                    <Button variant={'outline'} size={'sm'} className="rounded-sm text-xs h-auto px-2">Save</Button>
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <BiSearch size={14} className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <Input className="w-20 rounded-md pl-6 py-1 h-auto text-xs bg-white placeholder:text-xs placeholder:font-semibold" placeholder="Search" />
                    </div>
                    <Button variant="outline" size="sm" className="h-8 gap-1 relative rounded-md border-gray-200 text-xs text-[#0c8f4e] hover:text-green-500">
                        <MdOutlineFilterList className="h-3 w-3" />
                        Filtered
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full flex items-center justify-center">
                            <IoIosCloseCircle size={14} fill="green" />
                        </span>
                    </Button>
                </div>
            </div>


            <div className="flex-1 overflow-y-auto scrollbar">
                <div className="flex flex-col h-0">
                    {chats.map((chat, idx) => (
                        <div
                            className={cn(
                                "p-2 hover:bg-[#f5f6f8] cursor-pointer",
                                activeChatId === chat.id && "bg-[#f5f6f8]"
                            )}
                            key={idx}
                            onClick={() => setActiveChatId(chat.id)}
                        >
                            <div className="flex gap-2">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback>P</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium">{chat.name}</span>
                                        <div className="flex items-center gap-1">
                                            <Badge className="bg-orange-100 text-[10px] font-normal text-orange-600">Demo</Badge>
                                            <Badge className="bg-green-100 text-[10px] font-normal text-green-600">internal</Badge>
                                            <Badge className="h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]">+1</Badge>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <span>Periskope: Test message</span>
                                        <Badge className="ml-1 h-4 w-4 rounded-full bg-gray-200 p-0 text-[8px]"></Badge>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-1 text-xs text-gray-400">
                                            <span>+91 99738 44008</span>
                                            <span>+3</span>
                                        </div>
                                        <div className="text-xs text-gray-400">28-Feb-25</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
    );
}

export default ChatList;