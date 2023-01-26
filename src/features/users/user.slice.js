import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        isData:false,
        users:[],
        userTemporal:{},
        isTemporal:false
    },
    reducers:{
        
        setUsers:(state,action)=>{
            state.users=action.payload,
            state.isData=true
        },
        addUser:(state,action)=>{
            state.users=action.payload
        },
        setUserTemporal:(state,action)=>{
            state.userTemporal=action.payload
        },
        deleteUser:(state,action)=>{}
    }
})

export const {setUsers,setUserTemporal} = userSlice.actions

// export default userSlice.reducer