import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/footer'
import About from './pages/about'
import Experience from './pages/experience'
import Home from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/about" exact element={<About></About>}></Route>
          <Route path="/experience" exact element={<Experience></Experience>}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
    
  
    
      
  );
}

export default App;
