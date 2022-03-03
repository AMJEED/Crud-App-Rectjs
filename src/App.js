import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar' 
import CodeForInterview from "./components/CodeForInterview"
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import NotFound from './components/NotFound';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import React, { PropTypes } from 'react'

function App() {
  return (
    <div>
  
      <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route  path="/" element={<CodeForInterview/>}></Route>
       
        <Route  path = "/all" element={<AllUsers/>}/> 
        <Route  path = "/add" element={<AddUser/>}/> 
        <Route path = "*"element={<NotFound/>}/>

       
        </Routes>
        </BrowserRouter>
     
      </div>
      
  );
}

export default App;
