type CardsProps = {
    label1?: string;
    title1?: string;
    label11?: number;

    label2?: string;
    title2?: string;
    label22?: number;

    label3?: string;
    title3?: string;
    label33?: number;

}

function StatsCards({label1, title1, label11, label2, title2, label22, label3, title3, label33}: CardsProps) {
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-3 justify-between">
            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:scale-107 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">{label1}</label>
                <h2 className="font-bold ">{title1}</h2>
                <label htmlFor="" className="revenue">{label11} Rwf</label>
            </div>

            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:scale-107 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">{label2}</label>
                <h2 className="font-bold ">{title2}</h2>
                <label htmlFor="" className="pending">{label22}</label>
            </div>

            <div className=" bg-white px-8 shadow-xl border border-slate-200 text-2xl px-27 py-10 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <label htmlFor="" className="text-3xl">{label3}</label>
                <h2 className="font-bold ">{title3}</h2>
                <label htmlFor="" className="average">{label33} %</label>
            </div>
       </div>
    </div>
  )
}

export default StatsCards
