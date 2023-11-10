import './App.css';

// import router from "./Router";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
const router=createBrowserRouter([
  {
    path:'/auth',
    element:<auth />
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
