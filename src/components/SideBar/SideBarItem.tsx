import React from "react";

interface SideBarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SideBarItem(props: SideBarItemProps) {
  return (
    <button
      className="flex text-[14px] gap-5 hover:bg-secondary w-[180px] h-[40px] items-center rounded-lg p-2 cursor-pointer"
      {...props}
    ></button>
  );
}
