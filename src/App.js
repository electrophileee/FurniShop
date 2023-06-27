import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import Cart from './screen/cart/Cart';

const App = () => {

  
  return <div >
     <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Cart />}></Route> */}
        </Routes>
     </Router>
  </div>;
};

export default App;

