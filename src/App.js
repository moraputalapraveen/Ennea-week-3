import "./App.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from "./navbar.js";

import ProductList from "./products.js";
import {  Link } from "react-router-dom";

export default  function App() {
  return (
    <>
    
  <Navbar/>
    <div className="navbar2">
      <h1><Link to="/mobiles/:id">Mobiles</Link></h1>
      <h1>Earphones</h1>
      <h1>Televisions</h1>
      <h1>Electronics</h1>
      <h1>fashions</h1>
      <h1>Furnitures</h1>
      <h1>Beauty</h1>
      <h1>Travel</h1>
      <h1>Grocery</h1>
      </div>
    <div className="frontpic">
      <div >< ArrowBackIosIcon id="back"/></div>
      <img  className="front" src="/front.jpg" />
      <div >< ArrowForwardIosIcon id="front2"/></div>
    </div>
    <h1 id="deals">Today Top Deals</h1>
    <div className="products"><ProductList/></div>
    </>
  )
}
