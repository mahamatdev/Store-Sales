type AddOrderFormProps = {
  h1?: string;
  p1?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  h2?: string;
  p2?: string;
  p3?: string;
  btn1?: string;
  btn2?: string;
}



function AddOrderForm({h1, p1, label1, label2, label3, p2, p3, h2, btn1, btn2}: AddOrderFormProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 mb-8">
      <div className="bg-blue-50 rounded-3xl shadow-lg border  border-blue-300 p-8">

        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">{h1}</h2>
          <p className="text-slate-500 mt-1">{p1}</p>
        </div>

        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> {label1} </label>
            <input type="text" placeholder="Enter product name" className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
          </div>

          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> {label2}</label>
            <input type="number" placeholder="0" className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
          </div>

          
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> {label3}</label>
            <input type="number" placeholder="0" className="border border-slate-300 rounded-xl pl-3 w-[1150px] py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"/>
          </div> <br />

          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
            <p className="text-slate-500 text-sm"> {p2}</p>
            <h3 className="text-lg font-semibold text-slate-800 mt-2"> {h2} </h3>
            <p className="text-slate-500 mt-2"> {p3} </p>
          </div>

          <div className="flex justify-end gap-4 mt-15">
          <button  type="reset" className="w-[100px] h-[60px] rounded-xl border border-slate-400 text-slate-700 font-medium cursor-pointer hover:bg-slate-300 transition" > {btn1} </button>

          <button type="submit" className=" w-[150px] h-[60px] rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-800 cursor-pointer hover:shadow-lg transition-all duration-300 " > {btn2} </button>
        </div>
        </form>

      </div>
    </div>
  );
}

export default AddOrderForm;