import LoginForm from "../components/login/LoginForm";

interface LoginViewProps {
  onLogin: (email: string, password: string) => boolean;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  return (
    
    <main className="grid min-h-screen md:grid-cols-2 bg-slate-100">
      <aside
        className="
  hidden
  md:flex
  flex-col
  justify-center
  gap-12
  bg-gradient-to-br
  from-slate-900
  via-blue-900
  to-slate-800
  text-white
  p-10
  h-[580px] 
  "
      >
        <div>
          <h1 className="text-4xl font-bold">Store Sales Dashboard</h1>

          <p className="mt-4 text-slate-300 text-lg">
            Smart sales tracking for growing businesses.
          </p>
        </div>

        <div className="">
          <h2 className="text-3xl font-bold leading-tight">
            Track orders, monitor revenue, and manage inventory from one place.
          </h2>

          <div className=" mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <span>Manage customer orders efficiently</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <span>Monitor store revenue in real time</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <span>Analyze sales performance instantly</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <span>Track stock availability with ease</span>
            </div>
          </div>
          
        </div>
        <div >
            <p className="font-bold text-3xl ">Empowering smarter sales decisions.</p>
          </div>
      
      </aside>

      <section className="flex items-center justify-center px-6 py-3">
        <div
          className="
    w-full
    h-[550px]
    max-w-md
    bg-white
    p-8
    rounded-3xl
    shadow-2xl
    border
    border-slate-200 
  "
        >
          <div className="flex flex-col items-center ">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
            <span className="text-2xl flex items-center">🔐</span>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Welcome Back</h1>

          <p className=" text-slate-500">
            Sign in to access your sales dashboard.
          </p>
          </div>

          <LoginForm onLogin={onLogin} />

          <div className="mt-4 pt-1 border-t border-slate-200">
            <p className="text-center text-sm text-slate-500">
              Secure access to your sales dashboard
            </p>
          </div>
        </div>
      </section>
    </main>
    
  );
}
