import React from "react";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import  "bootstrap/dist/css/bootstrap.css";
import API from "../util/API";

function Main() {
  const { logout, user } = useAuth();


  
  return (
    <div>
    <Title/>

      <h1>Hello World</h1>
      
    </div>
  );
}

export default Main;