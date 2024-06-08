import React,{useContext} from 'react'
import './cart.css'
import Navbar from './navbar'
import { cartcontext } from './routing'


import { Link } from 'react-router-dom'
export default function Cart2(props) 
{
  

 let {cartitems,setcartitem} =useContext(cartcontext);


 const totalValue = cartitems.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);






 function removecart(id)
 {
  let newitems=cartitems.filter(item=>(item.id!==id));
      setcartitem(newitems)
 }


  return(
    <>
    <Navbar/>
    

    { cartitems.length===0?
    (<><h1>Your cart is Empty </h1>

            <Link to="/" >Shop Now </Link>  
  </>
  ):
    (<>
    <h1 style={{padding:"20px"}}>Cart Products</h1>
    <div className="cartcontainer">
      
      
            {
             

                 cartitems.map(product => (
                 
                 <div key={product.id} className='cartproduct' >
                      <div className='cartimage'>
                            <img src={product.img} width="200px" height="200px"  alt={product.name}/>
                      </div>

                      <div className="productdetails">
            
                          <h2 id="cartname">Name : {product.name}</h2>
                          <h2 id="quantity">Quantity : {product.quantity}</h2>
                          <h2 id="cartprice">Price : ₹{product.price * product.quantity}</h2>
                         
                          
                          
                         
                   
                    <div className='cartremove'>
                          <button onClick={()=>(removecart(product.id))} ><span>&#10006;</span>Remove from cart</button>
                        </div>
                        </div>
                        </div>
                   
               
          ))}
          <h1 className='total'>Total :{totalValue}</h1>
        </div>
        </>)}
        </>
  )
}
