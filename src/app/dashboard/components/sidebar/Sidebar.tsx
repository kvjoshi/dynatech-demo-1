import {
  Calendar,
  CalendarCheck,
  ClipboardList,
  History,
  HomeIcon,
  IdCard,
  LogOut,
  MessageSquareMore,
  MessageSquareText,
  Shield,
  TableOfContents,
  User,
  Users,
} from "lucide-react";
import saicia from "../../../../assets/saica-logo-white-2.png";

const Sidebar = () => {
  return (
    <div>
      <aside
        className="fixed top-0 left-0 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#004990] overflow-y-auto"
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4">
            <img src={saicia} alt="SAICA Logo" className="w-[90%]" />
          </div>

          {/* User Profile */}
          <div className=" text-white ">
            <div className="flex flex-col items-center mb-4 justify-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-3">
                <User
                  fill="#004990"
                  color="#004990"
                  strokeWidth={0.5}
                  size={40}
                />
              </div>
              <h1 className="text-lg font-semibold mb-2">Bella Paul</h1>
              <div className="flex items-center gap-2 mb-2">
                <Users fill="white" color="white" strokeWidth={1.5} size={20} />
                <div className="flex flex-col">
                  <span className="text-white text-sm">Member (CA)</span>
                  <span className="text-gray-300 text-xs">Membership</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IdCard color="white" />
                <div>
                  <div className="text-gray-300 text-sm">SAICA ID</div>
                  <div className="text-white text-xs">78976789</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar />
                <div>
                  <div className="text-gray-300 text-sm">Member since</div>
                  <div className="text-white text-xs">12/11/2023</div>
                </div>
              </div>
              <div className="text-sm mt-2">
                <div className="flex gap-2">
                  <Users
                    fill="white"
                    color="white"
                    strokeWidth={1.5}
                    size={20}
                  />
                  <div className="text-white">Responsible Partner</div>
                </div>
                <div className="flex gap-2">
                  <Users
                    fill="white"
                    color="white"
                    strokeWidth={1.5}
                    size={20}
                  />
                  <div className="text-white">Registered Tax Practitioner</div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="grid grid-cols-2 bg-[#F2FBFE]  gap-1  rounded-tr-3xl p-4">
              <div className="flex flex-col items-center justify-center text-center bg-[#EA1946] rounded-tl-full rounded-bl-full rounded-tr-full p-8">
                <HomeIcon color="white" size={30} />
                <span className="white">Dashboard</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <TableOfContents color="#004990" size={30} />
                <span className="text-[#004990]">Application</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <div className="bg-[#004990] rounded-full w-8 h-8 flex items-center justify-center mb-3">
                  <User
                    fill="white"
                    color="white"
                    strokeWidth={0.5}
                    size={50}
                  />
                </div>
                <span className="text-[#004990]">Profile</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <MessageSquareMore color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Queries</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <MessageSquareText color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Membership Compliance</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <Shield color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Complaint</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <CalendarCheck color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Upcoming Events</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <ClipboardList color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Exam</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <History color="white" fill="#004990" size={30} />
                <span className="text-[#004990]">Exam</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center hover:bg-gray-200 hover:rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full p-6 ">
                <LogOut color="#004990" size={30} />
                <span className="text-[#004990]">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
