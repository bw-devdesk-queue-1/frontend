import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';

export const LOADING = 'LOADING';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';


export const login = (credentials) => dispatch => {
    // dispatch({
    //     type: LOADING
    // })
    axiosWithAuth()
    // insert post endpoint when ready
    .post("api/auth/login", credentials)
    .then(res => {
        console.log(credentials)
        dispatch({
            type: LOGIN,
            payload: credentials
        })
        window.localStorage.setItem("token", res.data.payload)
        // this.props.history.push("/dashboard")
    })
    .catch(err => console.log("Could not complete login", err));
}

export const register = (credentials) => dispatch => {
    // dispatch({
    //     type: LOADING
    // })
    axios
    .post('https://dev2desk.herokuapp.com/api/auth/register', credentials)
    .then(res => {
        dispatch({
            type: REGISTER,
            payload: credentials
        })
        window.localStorage.setItem("token", res.data.payload)
    })
    .catch(err => console.log("Could not complete registration", err));
}