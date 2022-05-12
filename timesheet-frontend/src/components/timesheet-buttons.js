import React, { useState } from 'react'

export default function TimesheetButtons({role}) {
  const[selectedDate,setSelectedDate] = useState()
  return (
    <>
        <section className="timesheet-buttons">
            <input type="date" id="theDate" onChange={(e) =>setSelectedDate(e.target.value)}/>
            
            <div className="today-timesheet">
                <button type="button" className="newmsgb">Today</button>
                {role!="approver" && <button type="button" className="add-task-timesheet" data-toggle="modal" data-target="#addtask">Add New Task</button>}         </div>
        </section>

        <section style={{marginTop: "-40px"}}>
          
            <p className="picked-day">Showing records for: {selectedDate || "All Dates"}</p>
        </section>
    </>
  )
}
