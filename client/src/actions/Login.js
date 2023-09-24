import * as api from '../api';
import { setCurrentUser } from './currentUsers';



export const signup = (authData, navigate)=>  async (dispatch) =>{
    try {
         const { data } = await api.signUp(authData)
         dispatch({type:"AUTH",data})
         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile')) ))
         navigate('/')
    } catch (error) {
        console.log(error)
    }

}

export const login = (authData, navigate)=>  async (dispatch) =>{
    try {
         const { data } = await api.LogIn(authData)
         dispatch({type:"AUTH",data})
         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile')) ))
         navigate('/')
    } catch (error) {
        console.log(error)
    }

}
