function AddOrderForm() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 mb-8">
      <div className="bg-blue-50 rounded-3xl shadow-lg border  border-blue-100 p-8">

        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Add New Order</h2>
          <p className="text-slate-500 mt-1">Create a new customer order and instantly update your sales dashboard.</p>
        </div>

        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> Product Name </label>
            <input type="text" placeholder="Enter product name" className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
          </div>

          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> Unit Price (RWF)</label>
            <input type="number" placeholder="0" className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
          </div>

          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> Quantity</label>
            <input type="number" placeholder="0" className="border border-slate-300 rounded-xl pl-3 w-[1150px] py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
          </div> <br />

          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
            <p className="text-slate-500 text-sm"> Order Information </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-2"> New Store Order </h3>
            <p className="text-slate-500 mt-2"> Fill in the product name, price, and quantity to add a new order. </p>
          </div>

          <div className="flex justify-end gap-4 mt-15">
          <button  type="reset" className="w-[100px] h-[60px] rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition" > Clear </button>

          <button type="submit" className=" w-[150px] h-[60px] rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 " > Add Order </button>
        </div>
        </form>

      </div>
    </div>
  );
}

export default AddOrderForm;