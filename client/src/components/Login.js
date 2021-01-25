import React, {useState, useEffect} from "react";
import axios from 'axios';
import {server} from "../../../server";

export default Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [item, setItem] = useState("");
  const check = useEffect(()=>{
    axios.post(server, username, password)
      .then(res => {
        res == username && password ?
        localStorage.setItem('token', res.data.token) :
        props.history.push('/login')}
      )}, [item]);
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e)=>{preventDefault.e; check}}>
        <input type="text" placeholder="username" label="username">Username</input>
        <input type="text" placeholder="password" label="password">Password</input>
        <button>Submit</button>
      </form>
    </div>
  )
};
