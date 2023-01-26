
import { userApi } from "../../API/user.api";
import { setUsers } from "./user.slice";
import {v4 as uuid} from 'uuid'

export const getUsersMiddleware=()=>{
    return async(dispatch)=>{
        const {data} = await userApi.get('/users')
        dispatch(setUsers(data))
    }
}

export const addUserMiddleware=(user)=>{
    return async(dispatch)=>{
        const res = await userApi.post('/users',{...user,id:uuid()})
        const {data} = await userApi.get('/users')
        dispatch(setUsers(data))
    }
}

export const deleteUserMiddleware=(id)=>{
    return async(dispatch)=>{
        const res = await userApi.delete(`/users/${id}`)
        const {data} = await userApi.get('/users')
        dispatch(setUsers(data))
    }
}

export const updateUserMiddleware=(user,id)=>{
    return async(dispatch)=>{
        const res = await userApi.put(`/users/${id}`,user)
        const {data} = await userApi.get('/users')
        dispatch(setUsers(data))
    }
}