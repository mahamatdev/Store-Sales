
import DashboardHeader from "../components/dashboard/DashboardHeader"
import StatsCards from "../components/dashboard/StatsCards"
import OrderControls from "../components/dashboard/OrderControls"
function DashboardView() {
  

  return (
    <div>
      <DashboardHeader title="Store Sales Dashboard" para="Track orders, monitor revenue, and manage inventory in one place" btn1="Add New Sales" btn2="Log out"/>
      <StatsCards label1="🪙" title1="Total revenue" label11= {0}   label2="📦" title2="Pending Orders" label22= {0}   label3="📊" title3="Avg Order Value" label33= {0}/>
      <OrderControls/>
    </div>
  )
}

export default DashboardView
