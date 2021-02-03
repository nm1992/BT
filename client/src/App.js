import React, {useState,useEffect} from 'react'
import AuthRoutes from './components/AuthRoutes'
import SignIn from './components/SignIn'
import Axios from "axios"


function App() {
  const [user,setUser] = useState()

    useEffect(()=>{
        Axios({
        method: "Get",
        withCredentials:true,
        url:"http://localhost:5000/validation"
        }).then((res) => {
        setUser(res.data)
        })
    },[])

  if (user){
    return(
      <AuthRoutes user = {user}/>
    )} else {
      return(
      <SignIn />
      )
    }
  }

export default App
