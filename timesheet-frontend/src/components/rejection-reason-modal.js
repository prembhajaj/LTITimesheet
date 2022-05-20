import React, { useState } from 'react'

export default function RejectionReasonModal({id,rejectEntry,entry,setEntry,addEntry}) {
    const [comments,setComments] = useState("")
  return (
    <>
    <div id="rejectreason" className="modal fade" role="dialog">
        <div className="modal-dialog">

    
        <div className="modal-content timesheet">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Reject Task</h4>
            </div>
            <div className="modal-body">
        
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">




              <div className="row">
                <div className="col-md-3">
                  <p>Rejection Comments</p>
                </div>
                <div className="col-md-9">
                  <input type="text" className="timesheet-description" onChange={(e) => setComments(e.target.value)}/>
                </div>
              </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                        <div className="col-md-9">
                            <div clas="actionbutton">
                                <p className="button-container"><button className="user-aciton" onClick={() => rejectEntry(id,comments)} data-dismiss="modal">Reject Task</button></p>
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
  )}