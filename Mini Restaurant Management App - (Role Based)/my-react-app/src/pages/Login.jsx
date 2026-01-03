import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import {useNavigate} from "react-router-dom"


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
            login("Admin")
            navigate("/admin/dashboard")
            return
        }

        if(email==="customer@gmail.com" && password==="customer1234"){
            login("customer")
            navigate("/customer/dashboard")
            return
        }

        alert("wrong email or password");
    }
  return (
    <div className='box'>
      <h1>Login</h1>
      <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login
