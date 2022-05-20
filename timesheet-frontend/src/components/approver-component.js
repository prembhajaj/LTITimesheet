import React, { useState } from 'react'
import TableHeaderApprover from './table-header-approver'
import TableContentsApprover from './table-contents-approver'
import axios from 'axios'
import TimesheetButtons from './timesheet-buttons'
import RejectionReasonModal from './rejection-reason-modal'

export default function ApproverComponent({showTab,entries,setEntries,selectedDate,setSelectedDate}) {

  const [rejectId,setRejectId] = useState()
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

  async function rejectEntry(id,comments) {
    setEntries( entries.map((entry,index) => {

      return index==id ? {...entry,status:"rejected","comments":comments} : entry
   }))
   const res = await axios.post(`http://127.0.0.1:5000/rejectentry/${id}`,{comments},{
      headers: {
        'Content-Type': 'application/json'
      }
    });


  }
  return (
    <>
        < TimesheetButtons role="approver" selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <TableHeaderApprover showTab={showTab} />
        <RejectionReasonModal  id={rejectId} rejectEntry={rejectEntry} />

        {entries.map((entry,index) => {
          if (showTab == entry.status){
            if (!selectedDate || selectedDate==entry.Date)
              return <TableContentsApprover setRejectId={setRejectId} showTab={showTab} entry={entry} id={index} approveEntry={approveEntry} rejectEntry={rejectEntry} />
        }

        
})}

    </>
    )
}
