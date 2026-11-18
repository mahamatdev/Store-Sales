import { useState, type FormEvent } from "react";
import "./LoginForm.css";

interface LoginFormProps {
  onLogin: (email: string, password: string) => boolean;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }

    const success = onLogin(email, password);
    if (!success) {
      setError("Email or password is incorrect.");
      setPassword("");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      {error && (
        <div className="login-form__alert" role="alert">
          {error}
        </div>
      )}

      <div className="login-form__field">
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login-form__field">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="login-form__submit">
        Sign in
      </button>
    </form>
  );
}