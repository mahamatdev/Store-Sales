


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
            <div className="bg-green-50 border-t-4 border-green-500 shadow-lg border border-green-100  text-xl px-23 py-7 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img className=" w-24 h-24 object-contain" src={label1} alt="" />
                <h2 className="font-bold text-slate-800 text-2xl">{title1}</h2>
                <label className="text-2xl font-bold text-green-600">{label11} $ </label>
            </div>

            <div className="bg-amber-50 border-t-4 border-amber-500 shadow-lg border border-amber-100  text-xl px-23 py-7 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img className="w-24 h-24 object-contain" src={label2} alt="" />
                <h2 className="font-bold text-slate-800 text-2xl">{title2}</h2>
                <label className="text-2xl font-bold text-amber-600"> {label22} </label>
            </div>

            <div className=" bg-blue-50 border-t-4 border-blue-500 shadow-lg border border-blue-100 text-xl px-23 py-7 rounded-3xl items-center justify-center flex flex-col gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img className="w-24 h-24 object-contain" src={label3} alt="" />
                <h2 className="font-bold text-slate-800 text-2xl">{title3}</h2>
                <label className="text-2xl font-bold text-blue-600"> {label33} $ </label>
            </div>
       </div>
    </div>
  )
}

export default StatsCards
