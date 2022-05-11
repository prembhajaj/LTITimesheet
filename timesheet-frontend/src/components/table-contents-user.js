import React from 'react'

export default function TableContentsUser({entry,id,deleteEntry}) {

  return (
    <section>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="row timesheet-task-row">
            <div className="col-md-2 col-sm-2 col-xs-1">
                <div className="statustitle">{entry.Project}{id}</div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="projectnametitle">{entry.Activity}</div>
            </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="completiontitle">{entry.Date}</div>
            </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="detailstitle">{entry.StartTime}/{entry.EndTime}</div>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1">
                <div className="detailstitle">{entry.Duration}</div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="detailstitle">{entry.SubActivity}</div>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1">
                <button className="add-task-timesheet btn-sm" title='Delete Task' onClick={() => deleteEntry(id)}>X</button>
                </div>
            </div>
            </div>
        </div>
        </div> 
    </section>
  )
}
