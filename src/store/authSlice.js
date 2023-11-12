import {createSlice} from "@reduxjs/toolkit";
import {useNavigation} from "react-router-dom";

const authUser={
   isLoggedIn:false,
    name:"",
    email:"",
    password:"",
    age:"",
    sex:"",
    address:"",
    phone:""
}
const authSlice=createSlice({
    name:"auth",
    initialState:authUser,
    reducers:{
        login(state,action){
            state.isLoggedIn=true
            state.name=action.payload

        }
    }

})
export const authActions=authSlice.actions
export default authSlice
