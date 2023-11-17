import './App.css';
import AgentDashboard from './components/AgentDashboard/AgentDashboard';
import Policies from './components/Policies/Policies';
import LoginPage from './pages/Auth';
// import router from "./Router";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'auth',
    element: <LoginPage />
  },
  {
    path: 'agentboard',
    element: <AgentDashboard />
  },
  {
    path: 'policies',
    element : <Policies/>
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
