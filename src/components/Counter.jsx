import {useState} from 'react'
import reducer from './reducer'
import useCounter from './useCounter'

function Counter() {
  const [count, dispatch] = useCounter(reducer, 0)

  const [value, setValue] =  useState("")
  return (
    <div className="App">
      <h1>Custom Use counter hook</h1>
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

export default Counter
