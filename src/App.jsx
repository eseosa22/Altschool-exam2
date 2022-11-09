import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import Home from "./components/Home"
import './App.css'
import Counter from './components/Counter'
import ErrorTest from './components/ErrorTest'
import ErrorFallback from './components/ErrorFallback'
import ErrorPage from './Errorpage'



const App = () => {
  return (
    <BrowserRouter> 
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <header className='header'>
    <nav className='nav container'>
      <Link className='links'  to="/">Home</Link>
      <Link className='links' to="/customcounter">Custom Counter</Link>
      <Link className='links' to="/errortest">Error Boundary</Link>
      <Link className='links' to="/errorpage">404 Page</Link>
    </nav>
    </header>
       <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/customcounter' element={<Counter />}/>
        <Route path='/errortest' element={<ErrorTest />}/>
        <Route path='/errorpage' element={<ErrorPage />}/>
       </Routes>
       </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
