import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Offers from "./components/Home/Offers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        children:[
            {path:'/offer',element:<Offers/>}
        ]
},
    {
        path:'/profile',
        element:<Profile/>,
    },
    {
    path:'/login',
    element:<Login/>
    }
])


export default router
