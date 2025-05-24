import React from 'react'
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuRefreshCcwDot } from "react-icons/lu";
import { MdHelpOutline, MdInstallDesktop, MdNotificationsOff } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaListUl } from 'react-icons/fa';
import { HiOutlineSelector } from 'react-icons/hi';

const Header = () => {
    return (
        <header className="flex h-12 items-center justify-between border-b border-[#dad6d64a] px-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <IoChatbubbleEllipses className="h-4 w-4" />
                <span className="font-bold">chats</span>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="outline" size={'sm'} className='text-sm text-gray-700 px-2 rounded-sm'>
                    <LuRefreshCcwDot className="h-4 w-4" />
                    <span>Refresh</span>
                </Button>
                <Button variant="outline" size={'sm'} className='text-sm px-2 rounded-sm'>
                    <MdHelpOutline className="h-4 w-4" />
                    <span>Help</span>
                </Button>
                <Button variant="outline" size={'sm'} className='text-sm px-2 rounded-sm'>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="">5 / 6 phones</span>
                    <HiOutlineSelector className="h-3 w-3 text-gray-400" />
                </Button>
                <Button variant="outline" size={'sm'} className='text-sm px-2 rounded-sm'>
                    <MdInstallDesktop className="h-4 w-4" />
                </Button>
                <Button variant="outline" size={'sm'} className='text-sm px-2 rounded-sm'>
                    <MdNotificationsOff className="h-4 w-4" />
                </Button>
                <Button variant="outline" size={'sm'} className='text-sm px-2 rounded-sm'>
                    <BsStars className="h-4 w-4 fill-yellow-400" />
                    <FaListUl className="h-4 w-4 font-bold" />
                </Button>
            </div>
        </header>
    )
}

export default Header
