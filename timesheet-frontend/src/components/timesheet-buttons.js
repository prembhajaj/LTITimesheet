import React from 'react'

export default function TimesheetButtons() {
  return (
    <>
        <section className="timesheet-buttons">
            <input type="date" id="theDate" />
            <div className="today-timesheet">
                <button type="button" className="newmsgb">Today</button>
                <button type="button" className="add-task-timesheet" data-toggle="modal" data-target="#addtask">Add New Task</button>
            </div>
        </section>

        <section style={{marginTop: "-40px"}}>
            <p className="picked-day">2016-12-30</p>
        </section>
    </>
  )
}
