import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
      <Navbar />
      <Home />
      <Footer />
      </>
  );
}

export default App;
