import { Download, Users } from "lucide-react";

export default function Membership() {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg w-full">
      <h1 className="text-[#004990] font-bold text-2xl hidden md:block">
        Membership
      </h1>
      <div className="border-b hidden md:block"></div>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex items-center border lg:border-none md-border-none border-pink-700 ">
          <Users className="w-8 h-8 mr-4 text-[#004990]" />
          <div className="">
            <h2 className="text-lg font-semibold text-pink-700">CA(SA)</h2>
            <p>Active from: 12/11/2023</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 border border-pink-700">
          <p className="text-md text-center font-bold text-pink-700">
            REQUEST CONFIRMATION OF YOUR MEMBERSHIP
          </p>
        </div>
        <div className="flex mt-4">
          <span className="underline text-[#004990] text-md font-semibold cursor-pointer flex">
            Confirmation of past membership letter{" "}
            <span>
              <Download />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
