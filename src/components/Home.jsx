import React from 'react'
import { useReducer, useState } from 'react'
import reactLogo from '../assets/react.svg'
import reducer from './reducer'



const Home = () => {
      const [count, dispatch] = useReducer(reducer, 0)
          const [value, setValue] =  useState("")
  return (
    <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <h3>count is {count}</h3>
          <div className="card">
            <button className='btn' onClick={() => dispatch ({type: "increment"})}>
              Increment
            </button>
            <button className='btn' onClick={() => dispatch ({type: "decrement"})}>
              Decrement
            </button>
            <button className='btn' onClick={() => dispatch ({type: "reset"})}>
              Reset
            </button>
            <input type="number" value={value} onChange={(e) => {
              setValue(e.target.value)
            }}/>
            <button className='btn' onClick={() => {
              dispatch({type: "set", payload:+value})
            }}>Set</button>
    
          </div>
          <p className="read-the-docs">
            Click on the buttons to know your count rates!
          </p>
        </div>
  )
}

export default Home
        //   const [count, dispatch] = useReducer(reducer, 0)
        //   const [value, setValue] =  useState("")