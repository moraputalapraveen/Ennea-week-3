// Cart.js
import React,{useContext} from 'react';
import { useParams} from 'react-router-dom';
import ProductList from './records.json';
import "./singleproduct.css"
import Navbar from './navbar';
import  { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { cartcontext } from './routing';
export default function Cart() {

    var [quantity,updatequantity]= useState(1);
    var [fare,updatefare]= useState("");

 

    const { id }= useParams();
    const product = ProductList.find((item) => item.id === parseInt(id));
    const priceNumber = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));

    let {cartitems,setcartitem}=useContext(cartcontext);

   
        function increment()
        {
               if(10>quantity)
                updatequantity(quantity+1);
        }
        function decrement()
        {
            if(quantity>1)
                {
            updatequantity(quantity-1);
                }
        }
        function claculatefare()
       {
            updatefare(quantity*priceNumber)
       }

       function addcart()
        {
            console.log("befor",cartitems)
            const newItem = {
                id: product.id,
                name: product.name,
                quantity: quantity,
                img:product.img,
                price: priceNumber
            };
        

            const updatedCart = [...cartitems, newItem];
            setcartitem(updatedCart);

            console.log("add")
            console.log(cartitems)
        
            
        }

        function removecart()
        {
            console.log("before",cartitems)
            let newcart = cartitems.filter(item => item.id !== product.id);
            setcartitem(newcart)
            console.log("remove")
            console.log(cartitems)
               
        }
       
    return (
        <>
        <Navbar/>
           <div className='container'>
           <h1 id='name'>{product.name}</h1>

            <h1 id="highlights">Highlights</h1>
            <div className='details'>

                <li>{product.Highlights.ram}</li>
                <li>{product.Highlights.battery}</li>
                <li>{product.Highlights.camera}</li>
                <li>{product.Highlights.display}</li>
                <li>{product.Highlights.proce}</li>
                <li>{product.Highlights.model}</li>
               
            </div>


           <img src={product.img} id="img" alt="odbdke" width="200px" height="200px" type="audio/jpg"/>
                <h1 id="price">{product.price}</h1>
            
                <h1 id="rating">{product.rating}<span>&#9733;</span></h1>


         <h1 id="quan">quantity</h1>
            <div className='quantity'>
               
                <button id="plus"  onClick={increment}>+</button>
                <p id="value">{quantity}</p>
                <button id="minus" onClick={decrement}>-</button>
            </div>
         <button id="calculate" onClick={claculatefare}>Claculate price for {quantity} products</button>
                      
          {fare>0 &&  <h2 id="calculate2">₹{fare}</h2>}

            <div className="cart">
          {
            cartitems.some(item => item.id === product.id) ? (<button id="rembtn" onClick={removecart}> remove from cart</button>)
                : (  <button id="addbtn" onClick={addcart}> Add to Cart</button>)}
              
               
                 
                <ShoppingCartIcon id="cart3" />
                <h2 id="wishlist"><span>&#10084;</span>Add to wishlist</h2>
                
            </div>

                    
            </div>
        </>
    );
}
