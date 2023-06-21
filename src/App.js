import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';

const App = () => {
  return <div >
     <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
     </Router>
  </div>;
};

export default App;

