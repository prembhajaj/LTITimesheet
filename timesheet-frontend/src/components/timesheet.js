import React, { useState } from 'react'
import Modal from './modal'
import Title from './title'
import Navbar from './navbar'
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from 'react-router-dom';
import UserComponent from './user-component'
import ApproverComponent from './approver-component'

export default function Timesheet() {

  const [entries,setEntries] = useState([{
    "Project":"Hoist Finance",
    "Activity":"Training",
    "Date":"03-05-2022",
    "StartTime":"09:00",
    "EndTime":"18:00",
    "Duration":"09:00",
    "SubActivity":"Completed Cloud Computing Certification"
  }])
  return (
    <>
    <Title />

    <Navbar />

    <Routes>
      <Route exact path='/' element={<Navigate to="/user" />}></Route>
      <Route exact path='/user' element={<UserComponent  entries={entries} setEntries={setEntries} />}></Route>
      <Route exact path='/approver' element={<ApproverComponent entries={entries} setEntries={setEntries}/>}></Route>
      
    </Routes>

  

 

    
    </>
  )
}
