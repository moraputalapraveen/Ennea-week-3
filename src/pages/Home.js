
import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const LaptopList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const LaptopCard = styled.div`
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
`;

const laptops = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  name: `Laptop ${index + 1}`,
  price: `$${(index + 1) * 100}`,
}));

const Home = () => {
  const { addToCart } = useCart();

  return (
    <LaptopList>
      {laptops.map((laptop) => (
        <LaptopCard key={laptop.id}>
          <h3>{laptop.name}</h3>
          <p>{laptop.price}</p>
          <button onClick={() => addToCart(laptop)}>Add to Cart</button>
        </LaptopCard>
      ))}
    </LaptopList>
  );
};

export default Home;
