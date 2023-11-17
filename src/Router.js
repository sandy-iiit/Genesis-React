import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Offers from "./components/Home/Offers";
import {Details} from "@mui/icons-material";
import Profile from "./pages/Profile";
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
    }
    // {
    // path:'/about-us',
    //
    // }
])


export default router
