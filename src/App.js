import React from 'react';
import Header from './container/Header';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route>404 NOT FOUND</Route>
      </Routes>
    </div>
  );
}

export default App;
