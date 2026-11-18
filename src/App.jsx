import DashboardView from "./views/DashboardView";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import LoginView from "./views/LoginView";

function App() {
  const { isLoggedIn, login, logout } = useAuth();


  if (!isLoggedIn) {
    return <LoginView onLogin={login} />;
  }

  return <DashboardView onLogout={logout}/>;
}

export default App;