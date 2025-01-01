import { User, Users } from "lucide-react";
import saicia from "../../../../assets/saica-logo-white-2.png";

export default function Sidebar() {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#004990]"
        aria-label="Sidebar">
        <div>
          <div>
            <img src={saicia} alt="" className="w-[90%] m-4" />
          </div>

          <div>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center ">
              <User
                fill="#004990"
                color="#004990"
                strokeWidth={0.5}
                size={40}
              />
            </div>
            <div>
              <h1>Bella Paul</h1>
              <div>
                <Users fill="white" color="white" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
