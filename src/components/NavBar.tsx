import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { PiVideoCameraThin } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";

interface NavBarProps {
  onMenuClick: () => void;
}

export default function NavBar({ onMenuClick }: NavBarProps) {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between items-center h-[56px] mx-3 bg-primary">
      <div className="flex flex-row gap-3 items-center h-5">
        <button
          className="flex size-10 hover:bg-secondary items-center justify-center rounded-full"
          aria-label="Menu"
          onClick={onMenuClick}
        >
          <IoMenuOutline className="flex size-7" />
        </button>
        <Link to="/" className="flex w-[90px] h-[20px]">
          <img src={logo} alt="YouTube Logo" className="flex" />
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row">
          <input
            type="text"
            className="flex rounded-s-full bg-primary border-secondary border h-[40px] px-4 focus:outline-none focus:border-[#065fd4] w-full max-w-[560px] min-w-[200px] md:w-[50vw]"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="flex bg-secondary h-[40px] w-[64px] items-center justify-center rounded-e-full"
            aria-label="Search button"
          >
            <CiSearch className="size-6" />
          </button>
        </div>
        <div>
          <button
            className="flex bg-secondary h-[40px] w-[40px] items-center justify-center rounded-full"
            aria-label="Microphone"
          >
            <FaMicrophone className="size-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <button
          className="flex rounded-full hover:bg-secondary h-[40px] w-[40px] items-center justify-center"
          aria-label="Create"
        >
          <PiVideoCameraThin className="size-5" />
        </button>
        <button
          className="flex rounded-full hover:bg-secondary h-[40px] w-[40px] items-center justify-center"
          aria-label="Notifications"
        >
          <IoMdNotificationsOutline className="size-6" />
        </button>
        <button
          className="flex rounded-full hover:bg-secondary h-[40px] w-[40px] items-center justify-center"
          aria-label="User"
        >
          <FaRegUser className="size-5" />
        </button>
      </div>
    </div>
  );
}
