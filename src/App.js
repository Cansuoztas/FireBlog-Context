import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContextProvider';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App