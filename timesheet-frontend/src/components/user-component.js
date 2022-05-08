import React from 'react'
import TimesheetButtons from './timesheet-buttons'
import TableHeaderUser from './table-header-user'
import TableContentsUser from './table-contents-user'
import Modal from './modal'

export default function UserComponent({entries,setEntries}) {
  return (
    <>
        < TimesheetButtons />
        <TableHeaderUser />
        {entries.map((entry) => {
          
          return <TableContentsUser entries={entry} setEntries={setEntries}/>
        })}

        

        <Modal entries={entries} setEntries={setEntries}/>
    </>
  )
}
