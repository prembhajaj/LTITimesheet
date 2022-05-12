import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'



export default function Login() {
    const [username,setUsername] = useState("prem.bhajaj@lntinfotech.com")
    const [password, setPassword] = useState("password@123")
    const [role,setRole] = useState("")

    async function signin(e) {
        // e.preventDefault()
        const json = JSON.stringify({"username":username,"password":password});
        const res = await axios.post('http://127.0.0.1:5000/signin', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setRole(res.data.role)

        if(res.data.role == "approver"){
            window.location.replace('/approver');
        }
        else if(res.data.role == "user"){
            window.location.replace('/user');
        }

        
    }
  return (
    <section className='login-field panel panel-warning '>
<p className='picked-day panel-heading'>Please Sign In</p>
{role=="unauthorized" && <p className='alert alert-danger'>Invalid Credentials</p>}

<form  className="panel-body">
  <div ClassName="form-group">
    <label for="exampleInputEmail1" className='login-label'>Email address</label>
    <input type="email" className="form-control login-input " id="exampleInputEmail1" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Email" />
  </div>
  <div ClassName="form-group">
    <label for="exampleInputPassword1" className='login-label'>Password</label>
    <input type="password" className="form-control login-input " id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
  </div>
  <br></br>
  <button className="add-task-timesheet" type='submit' onClick={(e) => signin(e)}>Sign In</button>

</form>

    </section>
  )
}
