import Membership from "./components/membership";
import DetailsCard from "./components/myDetails/DetailsCard";
import RecentQueries from "./components/recentqueries";
import Sidebar from "./components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Membership />
        <DetailsCard />
        <RecentQueries />
      </div>
    </div>
  );
}
