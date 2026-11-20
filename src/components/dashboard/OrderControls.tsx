import { useState } from "react";

type OrderControlsProps = {
  h1?: string;
  p1?: string;
  label1?: string;
  h2?: string;
  p2?: string;
  th1?: string;
  th2?: string;
  th3?: string;
  th4?: string;
  th5?: string;
  td1?: string;
  p3?: string;
  op1?: string;
  op2?: string;
  op3?: string;
  op4?: string;
  op5?: string;
  span1?: string;

  orders?: any[];

  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;

  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;

  showOutOfStock: boolean;
  setShowOutOfStock: React.Dispatch<React.SetStateAction<boolean>>;

  updateOrderStatus: (
  id: number,
  status: string
) => void;

updateStockStatus: (
  id: number,
  inStock: boolean
) => void;
};

function OrderControls({
  h1,
  p1,
  label1,
  h2,
  p2,
  th1,
  th2,
  th3,
  th4,
  th5,
  td1,
  p3,
  op1,
  op2,
  op3,
  op4,
  op5,

  statusFilter,
  setStatusFilter,

  searchTerm,
  setSearchTerm,

  showOutOfStock,
  setShowOutOfStock,

  updateOrderStatus,
updateStockStatus,

  orders,
}: OrderControlsProps) {
  const handleReset = () => {
    setStatusFilter("All Statuses");
    setSearchTerm("");
    setShowOutOfStock(false);
  };

  return (
    <div id="order-controls" className="order-controls max-w-7xl mx-auto px-6">
      <div className="rounded-2xl bg-blue-50 px-8 py-8 shadow-lg border border-blue-300 ">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">{h1}</h2>
          <p className="text-slate-500 mt-1">{p1}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-between ">
          <div className="flex flex-col md:flex-row gap-4 flex-1 ">
            <select
              id="status-filter"
              name="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="status-filter outline-none border border-slate-300 rounded-xl px-4 py-4 w-full md:w-72 focus:border-blue-500 "
            >
              <option value="All Statuses">{op1}</option>
              <option value="Pending">{op2}</option>
              <option value="Shipped">{op3}</option>
              <option value="Delivered">{op4}</option>
              <option value="Cancelled">{op5}</option>
            </select>

            <input
              id="search-input"
              name="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by product name..."
              className="search-input outline-none border border-slate-300 rounded-xl px-4 py-4 flex-1 focus:border-blue-500"
            />
          </div>

          <button
            id="reset-filters-btn"
            type="button"
            onClick={handleReset}
            className="reset-filters-btn bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            {" "}
            Reset Filters{" "}
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <input
            id="out-of-stock-toggle"
            name="outOfStock"
            type="checkbox"
            checked={showOutOfStock}
            onChange={(e) => setShowOutOfStock(e.target.checked)}
            className="out-of-stock-toggle scale-130 accent-blue-600"
          />

          <label className="text-lg font-semibold text-slate-800">
            {" "}
            {label1}{" "}
          </label>
        </div>

        <div className="mt-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">{h2} </h3>
            <p className="text-slate-500 mb-4"> {p2}</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table id="orders-table" className="orders-table w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th id="product-header" className="text-center px-6 py-4">
                    {th1}
                  </th>
                  <th id="price-header" className="text-center px-6 py-4">
                    {th2}
                  </th>
                  <th id="quantity-header" className="text-center px-6 py-4">
                    {th3}
                  </th>
                  <th id="status-header" className="text-center px-6 py-4">
                    {th4}
                  </th>
                  <th id="stock-header" className="text-center px-6 py-4">
                    {th5}
                  </th>
                </tr>
              </thead>

              <tbody
                id="orders-table-body"
                className="orders-table-body bg-white"
              >
                {orders && orders.length > 0 ? (
                  orders?.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-slate-200 hover:bg-slate-50"
                    >
                      <td className="px-6 py-4 text-center">{order.product}</td>

                      <td className="px-6 py-4 text-center">
                        {Number(order.price).toLocaleString()} $
                      </td>

                      <td className="px-6 py-4  text-center">
                        {order.quantity}
                      </td>

                      <td className="px-6 py-4 text-center">
  <select
    value={order.status}
    onChange={(e) =>
      updateOrderStatus(order.id, e.target.value)
    }
    className={`px-3 py-1 rounded-full text-sm font-medium border-0 cursor-pointer ${
      order.status === "Pending"
        ? "bg-yellow-100 text-yellow-700"
        : order.status === "Delivered"
        ? "bg-green-100 text-green-700"
        : order.status === "Shipped"
        ? "bg-blue-100 text-blue-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    <option value="Pending">Pending</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</td>

                      <td className="px-6 py-4 text-center">
  <select
    value={String(order.inStock)}
    onChange={(e) =>
      updateStockStatus(
        order.id,
        e.target.value === "true"
      )
    }
    className={`px-3 py-1 rounded-full text-sm font-medium border-0 cursor-pointer ${
      order.inStock
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    <option value="true">In Stock</option>
    <option value="false">Out Of Stock</option>
  </select>
</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="h-[200px] text-center text-slate-400"
                    >
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-slate-200 pt-4">
            <p
              id="total-orders"
              className="total-orders text-slate-600 font-medium"
            >
              {p3}
              <span
                id="total-orders-value"
                className="total-orders-value font-bold text-blue-600"
              >
                {orders?.length || 0}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderControls;
