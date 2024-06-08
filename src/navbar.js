import React from 'react';
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {

   


    return (
        <>
            <div className="navbar">
                <h1 id="logo">
                    <Link to="/" id="homelink">Home</Link>
                </h1>
                <div className="search2">
                    <input type="text" id="search" placeholder="search for products..." />
                    <h1 id="search1"><SearchIcon /></h1>
                </div>
                <h1><LocationOnIcon id="location1" /></h1>
                <h2 id="location" >location</h2>
                <h2 id="login" >
                    <Link to="/login" id="link">Sign in/sign up</Link>
                </h2>
                <h1><ShoppingCartIcon id="cart1" /></h1>
                <Link to="/cart">
                <h2 id="cart">Cart</h2>
                </Link>
            </div>
       
     
        </>
    );
}
