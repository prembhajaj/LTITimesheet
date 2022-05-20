import React from 'react'

export default function TableContentsUser({showTab,entry,id,deleteEntry}) {

  return (
    <section>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="row timesheet-task-row">
            <div className="col-md-2 col-sm-2 col-xs-1">
                <div className="statustitle">{entry.Project}</div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-1">
                <div className="statustitle">{entry.CostCode}</div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="projectnametitle">{entry.Activity}</div>
            </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="completiontitle">{entry.Date}</div>
            </div>
                <div className="col-md-1 col-sm-1 col-xs-1">
                <div className="detailstitle">{entry.Duration}</div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2">
                <div className="detailstitle">{entry.SubActivity}</div>
                </div>
                {showTab=="submitted" && <div className="col-md-1 col-sm-1 col-xs-1">
                <button className="add-task-timesheet btn-sm" title='Delete Task' onClick={() => deleteEntry(id)}>X</button>
                </div>}
                {showTab=="rejected" && <div className="col-md-1 col-sm-1 col-xs-1">
                <div className="detailstitle">{entry.comments}</div>
                </div>}
            </div>
            </div>
        </div>
        </div> 
    </section>
  )
}
