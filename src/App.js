import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { useEffect } from "react";
import axiosConfiguration from "./config/axiosConfiguration";
import { authActions } from "./store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the ToastContainer

function App() {
  const dispatch = useDispatch();
  const usr = useSelector((state) => state.auth);

  async function func() {
    const res = await axiosConfiguration.get("/check");
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
      };
      console.log(res.data.type);
      dispatch(authActions.login(authUser));
    }
  }

  useEffect(() => {
    console.log("Session:::");
    console.log(usr);
    func().then((r) => {
      console.log(r);
    });
  }, []);

  return (
    <>
      <ToastContainer position="bottom-center" /> {/* Set position to bottom center */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
