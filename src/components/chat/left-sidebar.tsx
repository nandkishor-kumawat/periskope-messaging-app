import { usePathname } from "next/navigation";
import { BiSolidCoupon } from "react-icons/bi";
import { BsGearFill, BsStars } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { HiSpeakerphone } from "react-icons/hi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuPanelRightClose } from "react-icons/lu";
import { MdChecklist } from "react-icons/md";
import { RiChatAiLine, RiContactsBookFill, RiFolderImageFill } from "react-icons/ri";
import { TbStarsFilled } from "react-icons/tb";
import { TiHome } from "react-icons/ti";

const topIcons = [
    { icon: TiHome, label: "Home" },
    { icon: null },
    { icon: IoChatbubbleEllipses, label: "Chat" },
    { icon: BiSolidCoupon, label: "Offers" },
    { icon: GoGraph, label: "Stats" },
    { icon: null },
    { icon: FaListUl, label: "Options" },
    { icon: HiSpeakerphone, label: "Announcements" },
    { icon: BsStars, label: "Automations" },
    { icon: null },
    { icon: RiContactsBookFill, label: "Contacts" },
    { icon: RiFolderImageFill, label: "Automations" },
    { icon: null },
    { icon: MdChecklist, label: "Tasks" },
    { icon: BsGearFill, label: "Settings" },
];

const bottomIcons = [
    { icon: TbStarsFilled, label: "Theme" },
    { icon: LuPanelRightClose, label: "Profile" },
];

const LeftSidebar = () => {
    const pathname = usePathname()
    const isChatPage = pathname.includes("/chat");
    return (
        <aside className="bg-[#F7F8FA] bor der-r p-2 flex flex-col items-center h-full">

            <div className="h-12">
                <button
                    className="p-2 rounded hover:bg-gray-200 relative group"
                >
                    <RiChatAiLine size={20} className="text-muted-foreground" />
                    <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded z-10">
                        {"Chat AI"}
                    </span>
                </button>
            </div>

            <div className="flex flex-col gap-1 flex-grow">
                {topIcons.map(({ icon: Icon, label }, idx) => (
                    Icon ? (
                        <button
                            key={idx}
                            className="p-2 rounded hover:bg-gray-200 relative group text-muted-foreground hover:text-[#0c8f4e] overflow-hidden hover:overflow-visible"
                            style={{
                                color: isChatPage && label === "Chat" ? "#0c8f4e" : undefined,
                                backgroundColor: isChatPage && label === "Chat" ? " #e5e7eb" : undefined,
                            }}
                        >
                            <Icon size={20} />
                            {/* <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded z-10">
                                {label}
                            </span> */}
                        </button>
                    ) : (
                        <div key={idx} className="w-full border-t"></div>
                    )
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {bottomIcons.map(({ icon: Icon, label }, idx) => (
                    <button
                        key={idx}
                        className="p-2 rounded hover:bg-gray-200 relative group"
                    >
                        <Icon size={20} className="text-muted-foreground" />
                        <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded z-10">
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    );
}

export default LeftSidebar;