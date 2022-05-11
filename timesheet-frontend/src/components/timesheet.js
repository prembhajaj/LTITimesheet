import React, { useState } from 'react'
import Modal from './modal'
import Title from './title'
import Navbar from './navbar'
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from 'react-router-dom';
import UserComponent from './user-component'
import ApproverComponent from './approver-component'
import { useEffect } from 'react';
import axios from 'axios';

export default function Timesheet() {

  const [entries,setEntries] = useState([{
    "Name":"PB",
    "Project":"Hoist inance",
    "Activity":"Training",
    "Date":"2022-05-08",
    "StartTime":"09:00",
    "EndTime":"18:00",
    "Duration":"09:00",
    "SubActivity":"Completed Cloud Computing Certification",
    "status":"submitted"
  }])

  const [showTab,setShowTab] = useState("submitted")

  useEffect(() => {
    // Update the document title using the browser API
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:5000/getentries");
      const jsondata = await data.data.entries;
      setEntries(jsondata)
    }
    fetchData()
  },[]);

  return (
    <>
    <Title />

    <Navbar setShowTab={setShowTab} />

    <Routes>
      <Route exact path='/' element={<Navigate to="/user" />}></Route>
      <Route exact path='/user' element={<UserComponent showTab={showTab} entries={entries} setEntries={setEntries} />}></Route>
      <Route exact path='/approver' element={<ApproverComponent showTab={showTab} entries={entries} setEntries={setEntries}/>}></Route>
      
    </Routes>

  

 

    
    </>
  )
}
