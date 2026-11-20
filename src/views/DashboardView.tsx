import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import AddOrderForm from "../components/dashboard/AddOrderForm";
import useOrders from "../hooks/useOrders";

import revenue from "../assets/revenue.png";
import pending from "../assets/pending.png";
import avg from "../assets/avg.png";

import OrderControls from "../components/dashboard/OrderControls";

type DashboardViewProps = {
  onLogout: () => void;
};

function DashboardView({ onLogout }: DashboardViewProps) {
  const {
    orders,
    loading,
    addOrder,
    totalRevenue,
    pendingOrders,
    averageOrderValue,
    updateOrderStatus,
    updateStockStatus,
  } = useOrders();

  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOutOfStock, setShowOutOfStock] = useState(false);

  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      statusFilter === "All Statuses" || order.status === statusFilter;

    const matchesSearch = order.product
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStock = !showOutOfStock || !order.inStock;

    return matchesStatus && matchesSearch && matchesStock;
  });

  const filteredRevenue = filteredOrders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0,
  );

  const filteredPendingOrders = filteredOrders.filter(
    (order) => order.status === "Pending",
  ).length;

  const filteredAverageOrderValue =
    filteredOrders.length > 0 ? filteredRevenue / filteredOrders.length : 0;

  return (
    <div id="dashboard-view" className="dashboard-view">
      <DashboardHeader
        title="Store Sales Dashboard"
        para="Track orders, monitor revenue, and manage inventory in one place"
        btn1="Add New Sales"
        btn2="Log out"
        onLogout={onLogout}
      />
      <StatsCards
        label1={revenue}
        title1="Total Revenue"
        label11={filteredRevenue}
        label2={pending}
        title2="Pending Orders"
        label22={filteredPendingOrders}
        label3={avg}
        title3="Avg Order Value"
        label33={Math.round(filteredAverageOrderValue)}
      />
      <OrderControls
        orders={filteredOrders}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showOutOfStock={showOutOfStock}
        setShowOutOfStock={setShowOutOfStock}

        updateOrderStatus={updateOrderStatus}
        updateStockStatus={updateStockStatus}
        
        h1="Filters & Search"
        p1="Refine the order list by status, stock availability, or product name to quickly find the orders you need."
        label1="Show Out-of-Stock Only"
        h2="Orders List"
        p2="View and manage customer orders based on the selected filters and search criteria."
        th1="Product Name"
        th2="Unit Price ($)"
        th3="Quantity"
        th4="Order Status"
        th5="Stock Status"
        td1="Orders will appear here "
        p3="Total Orders: "
        op1="All Statuses"
        op2="Pending"
        op3="Shipped"
        op4="Delivered"
        op5="Cancelled"
        span1="0"
      />
      <AddOrderForm
        h1="Add New Order"
        p1="Create a new customer order and instantly update your sales dashboard."
        label1="Product Name"
        label2="Unit Price ($)"
        label3="Quantity"
        p2="Order Information "
        p3="Fill in the product name, price, and quantity to add a new order."
        h2="New Store Order"
        btn1="Clear"
        btn2="Add Order"
        onAddOrder={addOrder}
      />
    </div>
  );
}

export default DashboardView;
