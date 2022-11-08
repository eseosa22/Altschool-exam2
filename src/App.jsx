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
    <div className='container'>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/customcounter">Custom Counter</Link>
      <Link to="/errortest">Error Boundary</Link>
      <Link to="/errorpage">404 Page</Link>
    </nav>
    </div>
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
