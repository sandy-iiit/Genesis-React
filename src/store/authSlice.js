import {createSlice} from "@reduxjs/toolkit";

const authUser={
   isLoggedIn:false,
    name:"",
    email:"",
    password:"",
    age:"",
    sex:"",
    address:"",
    phone:"",
    id:"",
    type:""
}
const authSlice=createSlice({
    name:"auth",
    initialState:authUser,
    reducers:{
        login(state,action){
            
            state.isLoggedIn=true
            state.name=action.payload.name
            state.email=action.payload.email
            state.age=action.payload.age
            state.sex=action.payload.sex
            state.address=action.payload.address
            state.phone=action.payload.phone
            state.id=action.payload.id
            state.type=action.payload.type

        },

    }

})
export const authActions=authSlice.actions
export default authSlice
