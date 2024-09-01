
import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 1rem;
`;

const CartItem = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <CartContainer>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
