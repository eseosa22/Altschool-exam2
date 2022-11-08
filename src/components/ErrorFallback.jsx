import React from 'react'

const ErrorFallback = ({error}) => {
  return (
    <div>Oops! Something is wrong!
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorFallback