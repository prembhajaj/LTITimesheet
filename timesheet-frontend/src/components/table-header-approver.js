import React from 'react'

export default function TableHeaderApprover({showTab}) {
    return (
        <section>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 tab-title">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-1">
                    <div className="statustitle">Name</div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-1">
                    <div className="statustitle">Project</div>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-1">
                    <div className="statustitle">Cost Code</div>
                </div>
                <div className="col-md-1 col-sm-2 col-xs-2">
                    <div className="projectnametitle">Activity</div>
                </div>
                    <div className="col-md-1 col-sm-2 col-xs-2">
                    <div className="completiontitle">Date</div>
                </div>
                    
                    <div className="col-md-1 col-sm-1 col-xs-1">
                    <div className="detailstitle">Duration</div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                    <div className="detailstitle">Sub-Activity</div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1">
                    <div className="tsdelete-row ">{ showTab=="submitted"?"Action":showTab=="rejected" &&"Comments" }
                     </div>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>  
        </section>
      )
}
