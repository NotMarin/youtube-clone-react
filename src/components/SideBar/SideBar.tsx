import React from "react";
import SideBarItem from "./SideBarItem";
import { MdHomeFilled, MdOutlineSubscriptions } from "react-icons/md";
import {
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { PiUserRectangleThin } from "react-icons/pi";
import { GoHistory, GoVideo } from "react-icons/go";
import { RiFireLine, RiPlayListAddFill } from "react-icons/ri";
import { IoMusicalNoteOutline, IoTimeOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineTrophy } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa6";

const sections = [
  {
    title: "",
    items: [
      { icon: MdHomeFilled, label: "Home" },
      { icon: SiYoutubeshorts, label: "Shorts" },
      { icon: MdOutlineSubscriptions, label: "Subscriptions" },
    ],
  },
  {
    title: "You",
    items: [
      { icon: PiUserRectangleThin, label: "Your Channel" },
      { icon: GoHistory, label: "History" },
      { icon: RiPlayListAddFill, label: "Playlist" },
      { icon: GoVideo, label: "Your Videos" },
      { icon: IoTimeOutline, label: "Watch later" },
      { icon: AiOutlineLike, label: "Liked Videos" },
    ],
  },
  {
    title: "Explore",
    items: [
      { icon: RiFireLine, label: "Trending" },
      { icon: IoMusicalNoteOutline, label: "Music" },
      { icon: CiStreamOn, label: "Live" },
      { icon: SiYoutubegaming, label: "Gaming" },
      { icon: BsNewspaper, label: "News" },
      { icon: AiOutlineTrophy, label: "Sports" },
      { icon: HiOutlineLightBulb, label: "Learning" },
    ],
  },
  {
    title: "More from YouTube",
    items: [
      { icon: FaYoutube, label: "YouTube Premium" },
      { icon: SiYoutubestudio, label: "YouTube Studio" },
      { icon: SiYoutubemusic, label: "YouTube Music" },
      { icon: SiYoutubekids, label: "YouTube Kids" },
    ],
  },
];

export default function SideBar() {
  return (
    <div className="flex flex-col pb-20 overflow-auto side-scrollbar w-[215px]">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col px-3 border-b border-secondary py-3"
        >
          {section.title && (
            <div>
              <p className="text-[16px] px-3">{section.title}</p>
            </div>
          )}
          {section.items.map((item, idx) => (
            <SideBarItem key={idx}>
              <item.icon className="size-6" />
              {item.label}
            </SideBarItem>
          ))}
        </div>
      ))}
    </div>
  );
}
