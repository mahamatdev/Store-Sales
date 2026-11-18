import DashboardView from "./views/DashboardView";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import LoginView from "./views/LoginView";

function App() {
  const { isLoggedIn, login } = useAuth();


  if (!isLoggedIn) {
    return <LoginView onLogin={login} />;
  }

  return <DashboardView />;
}

export default App;