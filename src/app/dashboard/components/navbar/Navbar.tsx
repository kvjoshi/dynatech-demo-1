import { CircleUserRound, HomeIcon, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#002f6c] h-12 px-4 rounder-br-full rounded-bl-full">
      <div className="flex items-center bg-[#E64000] h-full px-4 rounded-tr-full rounded-br-full text-white mr-2">
        <HomeIcon />
        <span className="text-white font-semibold text-sm">Dashboard</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-white flex items-center justify-center rounded-full w-8 h-8">
          <CircleUserRound />
        </div>
        <div className="bg-white flex items-center justify-center rounded-full w-8 h-8">
          <LogOut />
        </div>
      </div>
    </div>
  );
}
