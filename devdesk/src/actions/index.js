import {
    axiosWithAuth
} from '../utils/axiosWithAuth';
import axios from 'axios';

export const LOADING = 'LOADING';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const GET_DATA = 'GET_DATA';
export const POST_DATA = 'POST_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';


export const login = (credentials) => dispatch => {

    dispatch({
        type: LOADING
    })
    axiosWithAuth()
        // insert post endpoint when ready
        .post("api/auth/login", credentials)
        .then(res => {
            console.log(res)
            dispatch({
                type: LOGIN,
                payload: res.data
            })
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("username", res.data.username)
            window.localStorage.setItem("userType", res.data.userType)
            window.localStorage.setItem("id", res.data.id)


        })
        .catch(err => console.log("Could not complete login", err));
}

export const register = (credentials) => dispatch => {
    // dispatch({
    //     type: LOADING
    // })
    console.log(credentials)
    axios
        .post("https://dev2desk.herokuapp.com/api/auth/register", credentials)
        .then(res => {
            console.log('register response', res)
            dispatch({
                type: REGISTER,
                payload: credentials
            })
            window.localStorage.setItem("token", res.data.payload)
        })
        .catch(err => console.log("Could not complete registration", err));
}

export const getData = () => dispatch => {
    dispatch({
        type: LOADING
    })
    axiosWithAuth()
        .get("/api/tickets/")
        .then(async res => {
            dispatch({
                type: GET_DATA,
                payload: res.data
            })
        })
        .catch(err => console.log("Error fetching data", err))
}

export const postData = (id, postTicket) => dispatch => {
    console.log(postTicket)
    axiosWithAuth()
        .post(`/api/tickets/students/${id}`, postTicket)
        .then(res => {
            console.log(res)
            dispatch({
                type: POST_DATA,
                payload: res.data
            })
        })
        .catch(err => console.log("Error posting ticket", err))
}

export const editData = (id, edits) => dispatch => {
    axiosWithAuth()
        .put(`/api/tickets/${id}/students/`, edits)
        .then(res => {
            dispatch({
                type: EDIT_DATA,
                payload: res.data
            })
        })
}

export const deleteData = (id) => dispatch => {
    axiosWithAuth()
        .delete(`/api/tickets/${id}/students`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_DATA,
                payload: res.data
            })
        })
}