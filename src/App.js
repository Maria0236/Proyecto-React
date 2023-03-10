import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
//import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>

      <BrowserRouter>

      <Header />
      <div className="p-3">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      </div>
      <Footer /> 
      
      </BrowserRouter>

    </div>
  );
}

export default App;
