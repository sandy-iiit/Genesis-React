import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Offers from "./components/Home/Offers";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        children:[
            {path:'/offer',element:<Offers/>}
        ]
},
    // {
    // path:'/about-us',
    //
    // }
])


export default router
