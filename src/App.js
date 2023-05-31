import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey ="ece054494eb94a549ec52e244defd45d"

 
    return (
      <div>
        <Router>
        <NavBar/> 
      
        <Routes>
            <Route path='/' element={<News key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route path='/general' element={<News key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={15} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={15} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={15} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={15} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={15} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={15} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
 
}

export default App;