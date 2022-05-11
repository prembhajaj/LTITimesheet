import React from 'react'
import TableHeaderApprover from './table-header-approver'
import TableContentsApprover from './table-contents-approver'
import axios from 'axios'

export default function ApproverComponent({showTab,entries,setEntries}) {
  async function approveEntry(id) {
    setEntries( entries.map((entry,index) => {

       return index==id ? {...entry,status:"approved"} : entry
    }))

    const res = await axios.post(`http://127.0.0.1:5000/approveentry/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }

  async function rejectEntry(id) {
    setEntries( entries.map((entry,index) => {

      return index==id ? {...entry,status:"rejected"} : entry
   }))
   const res = await axios.post(`http://127.0.0.1:5000/rejectentry/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }
  return (
    <>
        <br></br>
        <TableHeaderApprover />

        {entries.map((entry,index) => {
          if (showTab == entry.status){
            return <TableContentsApprover entry={entry} id={index} approveEntry={approveEntry} rejectEntry={rejectEntry} />
        }
})}

    </>
    )
}
