import { CgMenuRightAlt } from "react-icons/cg";
import { CiAt } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuPanelRightClose, LuPencilLine } from "react-icons/lu";
import { RiFolderImageFill, RiListSettingsLine } from "react-icons/ri";
import { SiTailscale } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";

const tools = [
    LuPanelRightClose,
    FaArrowsRotate,
    LuPencilLine,
    CgMenuRightAlt,
    TbListDetails,
    SiTailscale,
    FaUsers,
    CiAt,
    RiFolderImageFill,
    RiListSettingsLine
];

export default function RightSidebar() {
    return (
        <aside className="w-[60px] border-l border-[#dad6d64a] bg-[#F7F8FA] flex flex-col items-center py-2 gap-3 pt-8">
            {tools.map((Icon, idx) => (
                <button key={idx} className="p-2 rounded hover:bg-gray-200">
                    <Icon size={18} className="text-gray-400" />
                </button>
            ))}
        </aside>
    );
}
