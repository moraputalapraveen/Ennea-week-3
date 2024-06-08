
import React from 'react';
import products from './records.json'; 
import "./productlist.css"
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="product-container">
            {
            products.map(product => (
                <div key={product.id} >
                    <div className='product'>
                    <Link to={`/product/${product.id}`}> <img src={product.img} width="200px" height="200px" alt={product.name}/></Link> 
                        <h2>{product.name}</h2>
                        <p><strong>{product.price}</strong></p>
                        <h6>{product.rating}<span>&#9733;</span></h6>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
