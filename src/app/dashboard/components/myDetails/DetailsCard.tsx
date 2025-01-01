import { ChevronsRight, Mail, MapPin, Phone, Users } from "lucide-react";

export default function DetailsCard() {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-blue-900">
          My Details
        </h5>
        <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
          <span className="text-sm">Update Details</span>
          <ChevronsRight size={20} />
        </button>
      </div>
      <hr className="my-4 h-[1px] border-t-0 bg-gray-400 w-full" />
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 mt-1" fill="red" color="white" />
          <div className="flex flex-col">
            <span className="text-gray-900">bigove6000@newcupon.com</span>
            <span className="text-sm text-gray-500">Personal</span>
          </div>
        </div>
        <hr className="my-4 h-[1px] border-t-0 bg-gray-400 w-full" />
        <div className="flex items-center gap-4 pt-2">
          <Users className="w-5 h-5" color="red" />
          <span className="text-sm text-gray-500">Tax Practitioner number</span>
        </div>
        <hr className="my-4 h-[1px] border-t-0 bg-gray-400 w-full" />
        <div className="flex items-start gap-4 pt-2">
          <Phone className="w-5 h-5 mt-1" fill="red" color="white" />
          <div className="flex flex-col">
            <span className="text-gray-900">6789034567</span>
            <span className="text-sm text-gray-500">Mobile</span>
          </div>
        </div>
        <hr className="my-4 h-[1px] border-t-0 bg-gray-400 w-full" />
        <div className="flex items-start gap-4 pt-2">
          <MapPin className="w-5 h-5 mt-1" fill="red" color="white" />
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-col">
              <div className="space-y-1">
                <span className="block">Test</span>
                <span className="block">User</span>
                <span className="block">DASPOORT,</span>
                <span className="block">Western Cape</span>
                <span className="block">South Africa</span>
                <span className="block">0019</span>
                <span className="text-sm text-gray-500">Postal Address</span>
              </div>
            </div>
            <hr className="my-4 h-[1px] border-t-0 bg-gray-400 w-full" />
            <div className="flex flex-col">
              <div className="space-y-1">
                <span className="block">Test</span>
                <span className="block">User</span>
                <span className="block">DASPOORT,</span>
                <span className="block">Western Cape</span>
                <span className="block">South Africa</span>
                <span className="block">0019</span>
                <span className="text-sm text-gray-500">Physical Address</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
