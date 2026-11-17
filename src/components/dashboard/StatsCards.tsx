

function StatsCards() {
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-7">
        <div className="flex flex-3 justify-between">
            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">🪙</label>
                <h2 className="font-bold ">Total revenue</h2>
                <label htmlFor="" className="revenue">0 RWF</label>
            </div>

            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">📦</label>
                <h2 className="font-bold ">Pending Orders</h2>
                <label htmlFor="" className="pending">0</label>
            </div>

            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">📊</label>
                <h2 className="font-bold ">Avg Order Value</h2>
                <label htmlFor="" className="average">0 %</label>
            </div>
       </div>
    </div>
  )
}

export default StatsCards
