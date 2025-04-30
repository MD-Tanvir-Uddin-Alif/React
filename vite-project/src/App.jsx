import React, { useEffect, useRef, useState } from 'react';
import Hero from './component/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Menupage from './pages/Menupage';
import Productpage from './pages/Productpage';
import NOtfounpage from './pages/NOtfounpage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/menu' element={<Menupage/>}></Route>
      <Route path='/product' element={<Productpage/>}></Route>
      <Route path='*' element={<NOtfounpage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;