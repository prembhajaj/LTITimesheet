import React, { useState } from 'react'

export default function Modal({entries,setEntries}) {
  const [entry,setEntry] = useState({
    "Project":"Hoist Finance",
    "Activity":"Training",
    "Date":"2022-05-08",
    "StartTime":"09:00",
    "EndTime":"18:00",
    "Duration":"09:00",
    "SubActivity":"Completed Cloud Computing Certification"
  })
  function onSubmit() {
    setEntries([...entries,entry])
    // console.log(entries)
  }
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
                  <p>Start Time</p>
                </div>
                <div className="col-md-9">
                  <input type="time" onChange={(e) => setEntry({...entry,StartTime:e.target.value})}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>End Time</p>
                </div>
                <div className="col-md-9">
                  <input type="time" onChange={(e) => setEntry({...entry,EndTime:e.target.value})} />
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
                                <p className="button-container"><button className="user-aciton" onClick={onSubmit}>Add Task</button></p>
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
