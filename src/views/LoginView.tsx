import LoginForm from "../components/login/LoginForm";
import "./LoginView.css";

interface LoginViewProps {
  onLogin: (email: string, password: string) => boolean;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  return (
    <main className="login-page">
      <aside className="login-brand" aria-hidden="true">
        <p className="login-brand__name">Store Sales</p>
        <h2>See what sold today, before the store closes.</h2>
      </aside>

      <section className="login-panel">
        <div className="login-panel__inner">
          <h1>Sign in</h1>
          <p className="login-panel__lead">
            Use your store account to open the dashboard.
          </p>

          <LoginForm onLogin={onLogin} />

          <p className="login-panel__hint">
            Demo account: admin@store.com / admin123
          </p>
        </div>
      </section>
    </main>
  );
}