import axios from 'axios';

export const AuthHeader = () =>{
    axiosWithAuth =() => {
    const token = localStorage.getItem('token');}

    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};
























// import React from "react";
// import {Route, Redirect} from "react-router'dom";

// const export PrivateRoute = (token) =>{

// }