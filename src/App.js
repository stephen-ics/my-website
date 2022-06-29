import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/footer'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import Home from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
          <Route path="/projects" exact element={<Projects></Projects>}></Route>
          <Route path="/contacts" exact element={<Contacts></Contacts>}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
    
  
    
      
  );
}

export default App;
