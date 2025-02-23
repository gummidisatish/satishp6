import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Saved from './pages/Saved';
import Published from './pages/Published';
import Recipe from './pages/Recipe';
import NotLHome from './pages/NotLHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NotLHome />} />
        <Route path="/published" element={<Published />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </>
  );
}

export default App;