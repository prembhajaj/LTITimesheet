import React, { useState } from 'react'

export default function Modal({addEntry}) {
  const [entry,setEntry] = useState({
    "Name":"Prem Bhajaj",
    "Project":"Hoist Finance",
    "CostCode":"1001",
    "Activity":"Training",
    "Date":"2022-05-08",
    "Duration":"09:00",
    "SubActivity":"Completed Cloud Computing Certification",
    "status":"submitted"
  })

  return (
    <>
    <div id="addtask" className="modal fade" role="dialog">
        <div className="modal-dialog">

    
        <div className="modal-content timesheet">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add Task</h4>
            </div>
            <div className="modal-body">
        
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Project</p>
                                </div>
                                <div className="col-md-9">
                                    <select className="js-example-basic-single" onChange={(e) => setEntry({...entry,Project:e.target.value})}>
                                      <option selected>Hoist Finance</option>
                                      <option>Citi Group</option>
                                      <option>HSBC Bank</option>
                                      
                                    </select>
                                </div>
                            </div>
                <div className="row">
                <div className="col-md-3">
                    <p>Activity</p>
                </div>
                <div className="col-md-9">
                    <select className="js-example-basic-single" onChange={(e) => setEntry({...entry,Activity:e.target.value})}>
                        <option>Training</option>
                        <option>Support</option>
                        <option>Development</option>
                        <option>QA</option>
                    </select>
                </div>
            </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Date</p>
                </div>
                <div className="col-md-9">
                  <input type="date"  onChange={(e) => setEntry({...entry,Date:e.target.value})}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Duration</p>
                </div>
                <div className="col-md-9">
                  <input type="time" value="09:00" onChange={(e) => setEntry({...entry,Duration:e.target.value})}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Sub-Activity</p>
                </div>
                <div className="col-md-9">
                  <input type="text" className="timesheet-description" onChange={(e) => setEntry({...entry,SubActivity:e.target.value})}/>
                </div>
              </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                        <div className="col-md-9">
                            <div clas="actionbutton">
                                <p className="button-container"><button className="user-aciton" onClick={() => addEntry(entry)}>Add Task</button></p>
                            </div>  
                        </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}
