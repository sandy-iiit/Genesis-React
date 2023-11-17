import {createSlice} from "@reduxjs/toolkit";

const authUser={
   isLoggedIn:false,
    name:"",
    email:"",
    age:"",
    sex:"",
    address:"",
    phone:""
}
const authSlice=createSlice({
    name:"auth",
    initialState:authUser

})
export const authActions=createSlice.actions
export default authSlice
