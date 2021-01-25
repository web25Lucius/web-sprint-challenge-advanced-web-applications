import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth } from "./AuthHeader";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { response } from "express";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(()=>{
    axiosWithAuth()
    .get(server)
    .then((response) => {
     response = response => setColorList[response.colorList]
    }
)
  .catch((err)=> {
    console.log((err)
  )})}, [])


  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
