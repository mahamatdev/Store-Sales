
import DashboardHeader from "../components/dashboard/DashboardHeader"
import StatsCards from "../components/dashboard/StatsCards"
function DashboardView() {
  

  return (
    <div>
      <DashboardHeader title="Store Sales Dashboard" para="Track orders, monitor revenue, and manage inventory in one place" btn1="Add New Sales" btn2="Log out"/>
      <StatsCards />
    </div>
  )
}

export default DashboardView
