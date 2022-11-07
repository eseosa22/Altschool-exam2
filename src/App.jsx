import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home"
import './App.css'
import Counter from './components/Counter'


const App = () => {
  return (
    <BrowserRouter> 
    <nav>
      <Link to="/">Home</Link>
      <Link to="/customcounter">CustomCounter</Link>
    </nav>
       <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/customcounter' element={<Counter />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App