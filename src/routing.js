import React ,{createContext, useState} from "react";
import {  Route, Routes } from "react-router-dom";

import Login from "./login.js";
import App from "./App.js";
import Cart  from "./singleproduct.js";
import Cart2 from "./cart.js";


export const cartcontext=createContext();
export default function Routing() {

    let [cartitems,setcartitem]=useState([])
  return (
    
      
       <cartcontext.Provider value={{cartitems,setcartitem}}>
      
        <Routes>
          <Route  path="/" element={<App/>} />
    
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Cart/>}/>
          <Route path="/cart" element={<Cart2/>}/>
          
         
        </Routes>
        </cartcontext.Provider> 
   
  );
}


