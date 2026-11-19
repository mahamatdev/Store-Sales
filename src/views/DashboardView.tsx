
import DashboardHeader from "../components/dashboard/DashboardHeader"
import StatsCards from "../components/dashboard/StatsCards"
import AddOrderForm from "../components/dashboard/AddOrderForm";
import revenue from "../assets/revenue.png";
import pending from "../assets/pending.png";
import avg from "../assets/avg.png";
import { useOrders } from "../hooks/useOrders";

import OrderControls from "../components/dashboard/OrderControls"
function DashboardView() {
  const {
    orders,
    addOrder,
    updateOrderStatus,
    updateStock,
    totalRevenue,
    pendingOrders,
    averageOrderValue,
  } = useOrders();

  return (
    <div id="dashboard-view" className="dashboard-view">
      <DashboardHeader title="Store Sales Dashboard" para="Track orders, monitor revenue, and manage inventory in one place" btn1="Add New Sales" btn2="Log out"/>
      <StatsCards label1={revenue} title1="Total revenue" label11= {totalRevenue}   label2={pending} title2="Pending Orders" label22= {pendingOrders}   label3={avg} title3="Avg Order Value" label33= {averageOrderValue}/>
      <OrderControls h1="Filters & Search" orders={orders} updateOrderStatus={updateOrderStatus} updateStock={updateStock} p1="Refine the order list by status, stock availability, or product name to quickly find the orders you need." label1="Show Out-of-Stock Only" h2="Orders List" p2="View and manage customer orders based on the selected filters and search criteria." th1="Product Name" th2="Unit Price ($)" th3="Quantity" th4="Order Status" th5="Stock Status" td1="Orders will appear here " p3="Total Orders: " op1="All Statuses" op2="Pending" op3="Shipped" op4="Delivered" op5="Cancelled" span1={pendingOrders}/>
      <AddOrderForm h1="Add New Order" onAddOrder={addOrder} p1="Create a new customer order and instantly update your sales dashboard." label1="Product Name" label2="Unit Price ($)" label3="Quantity" p2="Order Information " p3="Fill in the product name, price, and quantity to add a new order."  h2="New Store Order" btn1="Clear" btn2="Add Order"/>
    </div>
  )
}

export default DashboardView
