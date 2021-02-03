import React, {Fragment} from "react"
import Axios from "axios"

function LogOut(){

  const loggingOut = () => {
    Axios({
      method:"Get",
      withCredentials:true,
      url:"http://localhost:5000/logout"
    }).then((res) => {
      const response = res.data
      if (response === "Logged Out"){
        window.location = "/login"
      }
    }
  )}

  return(
    <Fragment>
    <button onClick = {() => loggingOut()}>Log Out</button>
    </Fragment>
  )
}

export default LogOut
