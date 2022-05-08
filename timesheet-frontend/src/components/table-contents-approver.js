import React from 'react'

export default function TableContentsApprover() {
    return (
        <section>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row timesheet-task-row">
                <div className="col-md-2 col-sm-2 col-xs-1">
                    <div className="statustitle">Prem Bhajaj</div>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-1">
                    <div className="statustitle">Hoist Finance</div>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-2">
                    <div className="projectnametitle">Training</div>
                </div>
                    <div className="col-md-1 col-sm-2 col-xs-2">
                    <div className="completiontitle">2022-05-03</div>
                </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                    <div className="detailstitle">09:00/18:00</div>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-1">
                    <div className="detailstitle">09:00</div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                    <div className="detailstitle">Completed Cloud Computing Certification</div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1">
                    <button className="newmsgb btn">Approve</button>
                    <button className="add-task-timesheet">Reject</button>

                    </div>
                </div>
                </div>
            </div>
            </div>  
        </section>
      )
}