import React from 'react';
import Login from './pages/Login/Index';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
