import Membership from "./components/membership";
import DetailsCard from "./components/myDetails/DetailsCard";
import RecentQueries from "./components/recentqueries";

export default function Dashboard() {
  return (
    <div>
      <Membership />
      <DetailsCard />
      <RecentQueries />
    </div>
  );
}
