import { CircleUserRound, HomeIcon, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#002f6c] h-12 rounded-bl-3xl rounded-br-3xl ">
      <div className="flex items-center bg-[#E64000] h-full p-4 rounded-bl-3xl rounded-br-3xl text-white  ">
        <HomeIcon />
        <span className="text-white font-semibold text-sm">Dashboard</span>
      </div>
      <div className="flex items-center space-x-4 bg-white p-2 rounded-br-3xl rounded-bl-3xl">
        <div className="bg-[#002f6c] flex items-center justify-center rounded-full w-8 h-8">
          <CircleUserRound color="white" />
        </div>
        <div className="bg-[#002f6c] flex items-center justify-center rounded-full w-8 h-8">
          <LogOut color="white" />
        </div>
      </div>
    </div>
  );
}
