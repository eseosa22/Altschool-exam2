import React from 'react'

function ErrorFallback({ error, resetErrorBoundary }) {
  const fallbackStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"3rem"
  }
  return <div role="alert" className="fallback" style={fallbackStyle}>
    <div className="fallback">
    <p>Oops! Something is wrong!</p>
    <p style={{ color: "red", maxWidth: "30rem",lineHeight: "28px" }}>{error.message}</p>
    <button className='test' onClick={resetErrorBoundary}>Go Home</button>
    {/* <button className='test'>Home</button>
    <Link to="/">Home</Link> */}
  </div>
    </div>
}

export default ErrorFallback