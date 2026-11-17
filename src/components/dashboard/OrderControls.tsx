

function OrderControls() {
  

  return (
    <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-2xl items-center bg-white px-8 shadow-lg border border-slate-200">
            <div>
                <h2 className="text-xl font-semibold">Filters & Search</h2>
                <p className="text-slate-500"> Refine the order list by status, stock availability, or product name to quickly find the orders you need.</p>
            </div>
            <div className="flex mt-6 justify-between">
                <div className="flex gap-6 justify-start">
                <select name="" id="" className="outline-none py-4 w-[380px] pl-3 bg-white border-1 rounded-2xl">
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <input type="text" placeholder="Search order" className=" outline-none py-4 w-[380px] pl-3 bg-white border-1 rounded-2xl"/>
                </div>

                <div>
                <button type="reset" className="px-10 py-4 rounded-2xl  bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold">Reset Filters</button> 
                </div>
                
            </div>


            <div className="mt-5 flex gap-4">
                <input type="checkbox" className="scale-140"/>
                <p>Show Out-of-Stock Only</p>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default OrderControls
