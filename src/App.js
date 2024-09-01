
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
`;

const App = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContainer>
    </StyledThemeProvider>
  );
};

export default App;
