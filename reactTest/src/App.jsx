import { useState, useEffect } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from "framer-motion";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Scroll from './Scroll.jsx'
import Cars from './Cars.jsx';
import Review from './Review.jsx';
import History from './History.jsx';


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>}></Route>
            <Route index element={<Scroll/>}></Route>
            <Route path='/cars' element={<Cars/>}></Route>
            <Route path='/history' element={<History/>}></Route>
            <Route path='/review' element={<Review/>}></Route>
            <Route index element={<Footer/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App



