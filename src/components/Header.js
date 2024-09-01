
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    font-size:30px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color:black;
  color:white;
  
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <button onClick={toggleTheme}>Change Theme</button>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
