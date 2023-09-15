import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';


import 'bootstrap/dist/css/bootstrap.min.css'; //Boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Navbar />

      <Footer />
      
    </div>
  );
}

export default App;