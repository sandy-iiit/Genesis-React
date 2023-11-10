import './App.css';
import LoginPage from './pages/Auth';
// import router from "./Router";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children: [
      {
        path: "auth",
        element: <LoginPage />,
        
      },
    ],
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
