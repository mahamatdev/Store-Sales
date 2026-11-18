import { useState, type FormEvent } from "react";


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
  <form
    className="flex flex-col gap-5 mt-7"
    onSubmit={handleSubmit}
    noValidate
  >
    {error && (
      <div
        className="px-3 py-3 text-sm text-red-700 bg-red-100 border border-red-200 rounded-lg"
        role="alert"
      >
        {error}
      </div>
    )}

    <div className="flex flex-col gap-2">
      <label
        htmlFor="login-email"
        className="text-sm font-semibold text-slate-800"
      >
        Email
      </label>

      <input
        id="login-email"
        type="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          w-full
          px-4
          py-3
          border
          border-slate-300
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-blue-200
          focus:border-blue-500
        "
      />
    </div>

    <div className="flex flex-col gap-2">
      <label
        htmlFor="login-password"
        className="text-sm font-semibold text-slate-800"
      >
        Password
      </label>

      <input
        id="login-password"
        type="password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="
          w-full
          px-4
          py-3
          border
          border-slate-300
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-blue-200
          focus:border-blue-500
        "
      />
    </div>

    <button
      type="submit"
      className="
        py-3
        bg-emerald-600
        text-white
        font-semibold
        rounded-lg
        hover:bg-emerald-700
        transition
      "
    >
      Sign in
    </button>
  </form>
);
}