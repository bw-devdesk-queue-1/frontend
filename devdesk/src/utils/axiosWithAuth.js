import axios from 'axios';

export const axiosWithAuth = () => {
    // get token from local storage
    const token = window.localStorage.getItem("token");

    return axios.create({
        header: {
            authorization: token
        },
        baseURL: "https://dev2desk.herokuapp.com"
    });
};