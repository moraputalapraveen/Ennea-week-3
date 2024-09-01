import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Router>
    <ThemeProvider>
      <CartProvider>
        <GlobalStyle />
        <App />
      </CartProvider>
    </ThemeProvider>
  </Router>
);
