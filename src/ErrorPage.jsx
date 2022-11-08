import {Link} from "react-router-dom"

import errorImg from "../assets/404 Page.webp"

function ErrorPage(){

  const errorStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }

  return <>
    <div className="container error-page" style={errorStyle}>
      <img src={errorImg} alt="" />
      <p>This Page doesn't exist</p>
      <p className="error-text">
        You've taken a wrong turn, pedal back to the <Link to="/">Home Page</Link>
      </p>
    </div>
  </>
}

export default ErrorPage