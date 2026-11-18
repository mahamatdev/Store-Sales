import { useState } from "react";

// In-memory users. Nothing is saved to the browser.
const users = [
  { email: "admin@store.com", password: "admin123" },
  { email: "sales@store.com", password: "sales123" },
];

export function useAuth() {
  // State resets to false on every page refresh.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    const match = users.find(
      (user) =>
        user.email === email.trim().toLowerCase() && user.password === password
    );
    if (match) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsLoggedIn(false);

  return { isLoggedIn, login, logout };
}

export default useAuth;