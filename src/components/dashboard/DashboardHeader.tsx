type HeaderProps = {
    title?: string;
    para?: string;
    btn1?: string;
    btn2?: string;
}

function DashboardHeader({title, para, btn1, btn2}: HeaderProps) {
  

  return (
    <div className="max-w-7xl mx-auto px-6">
       <div className="flex flex-2 justify-between mt-6 h-[90px] rounded-2xl items-center bg-white px-8 shadow-lg border border-slate-200">
         <div className="">
           <h1 className="font-bold text-3xl">{title}</h1>
           <p>{para}</p>
         </div>

         <div className="flex gap-6">
           <button type="button" className="border-1 bg-blue-500 h-[50px] rounded-xl w-[140px] text-white font-bold cursor-pointer hover:bg-blue-800">{btn1}</button>
           <button type="button" className="border-1 bg-red-600 h-[50px] rounded-xl w-[140px] text-white font-bold cursor-pointer hover:bg-red-700">{btn2}</button>
         </div>
       </div>
    </div>
  )
}

export default DashboardHeader
