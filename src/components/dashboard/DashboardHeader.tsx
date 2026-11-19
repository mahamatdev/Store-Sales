type HeaderProps = {
  title?: string;
  para?: string;
  btn1?: string;
  btn2?: string;
  onLogout?: () => void;
};

function DashboardHeader({ title, para, btn1, btn2, onLogout }: HeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between mt-6 py-6 rounded-3xl items-center bg-blue-50 px-8 shadow-lg border  border-blue-300">
        <div>
          <h1 className="font-bold text-4xl text-slate-800">{title} </h1>
          <p className="text-slate-500 mt-1">{para}</p>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="bg-emerald-600 px-6 h-[50px] rounded-xl cursor-pointer text-white font-semibold transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg"
          >
            {btn1}{" "}
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="bg-slate-700 px-6 h-[50px] rounded-xl cursor-pointer text-white font-semibold transition-all duration-300 hover:bg-slate-900 hover:shadow-lg"
          >
            {" "}
            {btn2}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
