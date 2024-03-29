import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Netflix from './Pages/Netflix'
import Signup from './Pages/Signup'
import Player from './Pages/Player'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Login" element={<Login />}/>
      <Route exact path="/Signup" element={<Signup />}/>
      <Route exact path="/player" element={<Player />}/>
      <Route exact path="/" element={<Netflix />}/>
    </Routes>
    </BrowserRouter>
  );
}
