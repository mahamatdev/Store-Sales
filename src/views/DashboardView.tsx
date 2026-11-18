
import DashboardHeader from "../components/dashboard/DashboardHeader"
import StatsCards from "../components/dashboard/StatsCards"
import AddOrderForm from "../components/dashboard/AddOrderForm";
import revenue from "../assets/revenue.png";
import pending from "../assets/pending.png";
import avg from "../assets/avg.png";

import OrderControls from "../components/dashboard/OrderControls"
function DashboardView() {
  

  return (
    <div>
      <DashboardHeader title="Store Sales Dashboard" para="Track orders, monitor revenue, and manage inventory in one place" btn1="Add New Sales" btn2="Log out"/>
      <StatsCards label1={revenue} title1="Total revenue" label11= {0}   label2={pending} title2="Pending Orders" label22= {0}   label3={avg} title3="Avg Order Value" label33= {0}/>
      <OrderControls/>
      <AddOrderForm/>
    </div>
  )
}

export default DashboardView
