import React, { useState } from 'react'

const useCounter = (reducer, initialState) => {
    const [count, setCount]  = useState(initialState)
    function dispatchCount(action) {
        const nextCount = reducer(count, action)
        setCount(nextCount)
    }
  return (
    [count, dispatchCount]
  )
}

export default useCounter