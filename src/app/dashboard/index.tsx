import Membership from "./components/membership";
import { MyAccount } from "./components/my-account";
import DetailsCard from "./components/myDetails/DetailsCard";
import Navbar from "./components/navbar/Navbar";
import RecentQueries from "./components/recentqueries";
import Sidebar from "./components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="md:bg-blue-600 min-h-screen xl:pb-8 xl:pr-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="hidden xl:block xl:col-start-1 xl:col-end-4">
          <Sidebar />
        </div>
        <div className="md:col-start-1 md:col-end-13 xl:col-start-4 xl:col-end-13">
          <Navbar />
        </div>
        <div className="md:col-start-1 md:col-end-6 xl:col-start-4 xl:col-end-7">
          <DetailsCard />
        </div>
        <div className="md:col-start-6 md:col-end-13 xl:col-start-7 xl:col-end-13 gap-5 flex flex-col">
          <div className="flex flex-col xl:flex-row gap-5">
            <Membership />
            <MyAccount />
          </div>
          <div>
            <RecentQueries />
          </div>
        </div>
      </div>
    </div>
  );
}
