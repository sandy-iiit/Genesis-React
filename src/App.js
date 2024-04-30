import './App.css';

// import router from "./Router";
import {RouterProvider} from "react-router-dom";
import router from "./Router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the ToastContainer
import {useEffect} from "react";
import axiosConfiguration from "./config/axiosConfiguration";
import {authActions} from "./store/authSlice";
import {useDispatch, useSelector} from "react-redux";
const getCSRFToken = async () => {
  const response = await axiosConfiguration.get('/getCSRFToken');
  axiosConfiguration.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
};
function App() {
  const dispatch=useDispatch();
  const usr=useSelector((state)=>state.auth)



  async function func() {
    const t=localStorage.getItem("token")
    console.log("Local storage: "+t)
    const url = "/check/" + t
    console.log("Url: "+url)
    // if (usr.cookie !== "") {
    const res = await axiosConfiguration.post("/check",{jwtToken:t})
    console.log(res.data);
    if (!res.data.message) {
      const authUser = {
        name: res.data.name,
        email: res.data.email,
        password: "",
        age: res.data.age,
        sex: res.data.sex,
        address: res.data.address,
        phone: res.data.phone,
        id: res.data._id,
        type: res.data.type
      }
      console.log(res.data.type)
      dispatch(authActions.login(authUser))
    }
  // }
  }
  useEffect( () => {

    console.log("Session:::")
    // const getCSRFToken = async () => {
    //   const response = await axiosConfiguration.get('/getCSRFToken');
    //   axiosConfiguration.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
    //   // Also set the token in a hidden form field if using forms
    // };
    // getCSRFToken();
    console.log(usr)
    func().then(r => {
      console.log(r)})

  })

  return <>
    <ToastContainer position="bottom-center" /> {/* Set position to bottom center */}
    <RouterProvider router={router} />
  </>
}

export default App;
