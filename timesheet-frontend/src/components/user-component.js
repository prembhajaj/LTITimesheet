import React from 'react'
import TimesheetButtons from './timesheet-buttons'
import TableHeaderUser from './table-header-user'
import TableContentsUser from './table-contents-user'
import Modal from './modal'
import axios from 'axios'

export default function UserComponent({showTab,entries,setEntries}) {
  async function deleteEntry(id) {
    setEntries(entries.filter((value, index)=> index != id))
    const res = await axios.delete(`http://127.0.0.1:5000/deleteentry/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }  
  async function addEntry(entry) {
    setEntries([...entries,entry])
    //  await axios.post('http://127.0.0.1:5000/addentry', entry);
    const json = JSON.stringify(entry);
    const res = await axios.post('http://127.0.0.1:5000/addentry', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });



    // console.log(entries)
  }
  return (
    <>
        <TimesheetButtons />
        <TableHeaderUser />
        {entries.map((entry,index) => {
          if (showTab == entry.status)
          return <TableContentsUser showTab={showTab} deleteEntry={deleteEntry} entry={entry} id={index} />
        })}

        

        <Modal addEntry={addEntry}/>
    </>
  )
}
