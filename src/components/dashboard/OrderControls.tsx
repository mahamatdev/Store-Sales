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
}

function OrderControls({h1, p1, label1, h2, p2, th1, th2, th3, th4, th5, td1, p3, op1, op2, op3, op4, op5}: OrderControlsProps) {
  

  return (
    <div className="max-w-7xl mx-auto px-6">
  <div className="rounded-2xl bg-blue-50 px-8 py-8 shadow-lg border border-blue-300 ">

    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800">{h1}</h2>
      <p className="text-slate-500 mt-1">{p1}</p>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 justify-between ">

      <div className="flex flex-col md:flex-row gap-4 flex-1 ">

        <select className=" outline-none border border-slate-300 rounded-xl px-4 py-4 w-full md:w-72 focus:border-blue-500 ">
          <option value="All Statuses">{op1}</option>
          <option value="Pending">{op2}</option>
          <option value="Shipped">{op3}</option>
          <option value="Delivered">{op4}</option>
          <option value="Cancelled">{op5}</option>
          
        </select>

        <input type="text"placeholder="Search by product name..."className="outline-none border border-slate-300 rounded-xl px-4 py-4 flex-1 focus:border-blue-500"/>

      </div>

         <button className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"> Reset Filters </button>
      </div>

    <div className="mt-6 flex items-center gap-3">
      <input type="checkbox"className="scale-130 accent-blue-600" />

      <label className="text-lg font-semibold text-slate-800"> {label1} </label>
    </div>


        <div className="mt-8">
      <div>
         <h3 className="text-2xl font-bold text-slate-800">{h2} </h3>
         <p className="text-slate-500 mb-4"> {p2}</p>
      </div>

     <div className="overflow-x-auto rounded-2xl border border-slate-200">

      <table className="w-full">
       <thead>
           <tr className="bg-slate-100 border-b border-slate-200">
              <th className="text-left px-6 py-4">{th1}</th>
              <th className="text-left px-6 py-4">{th2}</th>
              <th className="text-left px-6 py-4">{th3}</th>
              <th className="text-left px-6 py-4">{th4}</th>
              <th className="text-left px-6 py-4">{th5}</th>
           </tr>
       </thead>

          <tbody className="bg-white">
             <tr>
                <td colSpan={5} className="h-[300px] text-center text-slate-400" > {td1}</td>
             </tr>
          </tbody>
      </table>

            </div>
              <div className="flex justify-between items-center mt-4 border-t border-slate-200 pt-4">
                <p className="text-slate-600 font-medium">{p3}<span className="font-bold text-blue-600"></span></p>
              </div>
             </div>

             </div>
           </div>
          )
       }

    export default OrderControls
