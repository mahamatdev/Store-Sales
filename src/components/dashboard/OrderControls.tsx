import type { Order, OrderStatus } from "../../types/Order";


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
  span1?: number;
  orders : Order[];
  updateOrderStatus: (id: number, status: OrderStatus) => void;
  updateStock: (id: number, inStock: boolean) => void;
}

function OrderControls({h1, p1, label1, h2, p2, th1, th2, th3, th4, th5, td1, p3, op1, op2, op3, op4, op5, span1, orders,updateOrderStatus,updateStock}: OrderControlsProps) {
  

  return (
    <div id="order-controls" className="order-controls max-w-7xl mx-auto px-6">
  <div className="rounded-2xl bg-blue-50 px-8 py-8 shadow-lg border border-blue-300 ">

    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800">{h1}</h2>
      <p className="text-slate-500 mt-1">{p1}</p>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 justify-between ">

      <div className="flex flex-col md:flex-row gap-4 flex-1 ">

        <select id="status-filter" name="status" className="status-filter outline-none border border-slate-300 rounded-xl px-4 py-4 w-full md:w-72 focus:border-blue-500 ">
          <option value="All Statuses">{op1}</option>
          <option value="Pending">{op2}</option>
          <option value="Shipped">{op3}</option>
          <option value="Delivered">{op4}</option>
          <option value="Cancelled">{op5}</option>
          
        </select>

        <input id="search-input" name="search" type="text" placeholder="Search by product name..." className="search-input outline-none border border-slate-300 rounded-xl px-4 py-4 flex-1 focus:border-blue-500"/>

      </div>

         <button id="reset-filters-btn" type="reset" className="reset-filters-btn bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"> Reset Filters </button>
      </div>

    <div className="mt-6 flex items-center gap-3">
      <input  id="out-of-stock-toggle" name="outOfStock" type="checkbox" className="out-of-stock-toggle scale-130 accent-blue-600" />

      <label className="text-lg font-semibold text-slate-800"> {label1} </label>
    </div>


        <div className="mt-8">
      <div>
         <h3 className="text-2xl font-bold text-slate-800">{h2} </h3>
         <p className="text-slate-500 mb-4"> {p2}</p>
      </div>

     <div className="overflow-x-auto rounded-2xl border border-slate-200">

      <table id="orders-table" className="orders-table w-full table-fixed border-collapse">
       <thead>
  <tr className="bg-slate-100 border-b border-slate-200">
    <th className="w-[22%] text-left px-6 py-4">Product</th>
    <th className="w-[15%] text-left px-6 py-4">Price</th>
    <th className="w-[15%] text-left px-6 py-4">Quantity</th>
    <th className="w-[13%] text-center px-6 py-4">Status</th>
    <th className="w-[13%] text-center px-6 py-4">Stock</th>
  </tr>
</thead>

        <tbody id="orders-table-body" className="orders-table-body bg-white">
  {orders.length === 0 ? (
    <tr>
      <td colSpan={5} className="h-[300px] text-center text-slate-400">
        {td1}
      </td>
    </tr>
  ) : (
    orders.map((order) => (
      <tr key={order.id} className="border-b border-slate-200">
        <td className="w-[22%] px-6 py-4 text-left">
          {order.product}
        </td>

        <td className="w-[15%] px-6 py-4 text-left">
          {order.price}
        </td>

        <td className="w-[15%] px-6 py-4 text-left">
          {order.quantity}
        </td>

        <td className="w-[24%] px-6 py-4 text-center">
          <select
            value={order.status ?? "Pending"}
            onChange={(event) =>
              updateOrderStatus(
                order.id,
                event.target.value as OrderStatus
              )
            }
            className="w-full max-w-[180px] border border-slate-300 rounded-lg px-3 py-2"
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </td>

        <td className="w-[24%] px-6 py-4 text-left">
          <select
            value={
              order.inStock === undefined
                ? ""
                : order.inStock ? "true" : "false"
            }
            onChange={(event) =>
              updateStock(order.id, event.target.value === "true")
            }
            className="w-full max-w-[180px] border border-slate-300 rounded-lg px-3 py-2"
          >
            <option value="">Select stock</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
        </td>
      </tr>
    ))
  )}
</tbody>  


      </table>

            </div>
              <div className="flex justify-between items-center mt-4 border-t border-slate-200 pt-4">
                <p id="total-orders" className="total-orders text-slate-600 font-medium">{p3}<span  id="total-orders-value" className="total-orders-value font-bold text-blue-600">{span1}</span></p>
              </div>
             </div>

             </div>
           </div>
          )
       }

    export default OrderControls
