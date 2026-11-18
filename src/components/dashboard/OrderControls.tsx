

function OrderControls() {
  

  return (
    <div className="max-w-7xl mx-auto px-6">
  <div className="rounded-2xl bg-blue-50 px-8 py-8 shadow-lg border border-blue-100 ">

    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800">Filters & Search</h2>
      <p className="text-slate-500 mt-1">Refine the order list by status, stock availability, or product name to quickly find the orders you need.</p>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 justify-between">

      <div className="flex flex-col md:flex-row gap-4 flex-1">

        <select className="outline-none border border-slate-300 rounded-xl px-4 py-4 w-full md:w-72 focus:border-blue-500">
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <input type="text"placeholder="Search by product name..."className="outline-none border border-slate-300 rounded-xl px-4 py-4 flex-1 focus:border-blue-500"/>

      </div>

         <button className="bg-emerald-600 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"> Reset Filters </button>
      </div>

    <div className="mt-6 flex items-center gap-3">
      <input type="checkbox"className="scale-130 accent-blue-600" />

      <label className="text-lg font-semibold text-slate-800"> Show Out-of-Stock Only </label>
    </div>


        <div className="mt-8">
      <div>
         <h3 className="text-2xl font-bold text-slate-800">Orders List </h3>
         <p className="text-slate-500 mb-4"> View and manage customer orders based on the selected filters and search criteria.</p>
      </div>

     <div className="overflow-x-auto rounded-2xl border border-slate-200">

      <table className="w-full">
       <thead>
           <tr className="bg-slate-100 border-b border-slate-200">
              <th className="text-left px-6 py-4">Product Name</th>
              <th className="text-left px-6 py-4">Unit Price ($)</th>
              <th className="text-left px-6 py-4">Quantity</th>
              <th className="text-left px-6 py-4">Order Status</th>
              <th className="text-left px-6 py-4">Stock Status</th>
           </tr>
       </thead>

          <tbody className="bg-white">
             <tr>
                <td colSpan={5} className="h-[300px] text-center text-slate-400" > Orders will appear here </td>
             </tr>
          </tbody>
      </table>

            </div>
              <div className="flex justify-between items-center mt-4 border-t border-slate-200 pt-4">
                <p className="text-slate-600 font-medium">Total Orders: <span className="font-bold text-blue-600"></span></p>
              </div>
             </div>

             </div>
           </div>
          )
       }

    export default OrderControls
