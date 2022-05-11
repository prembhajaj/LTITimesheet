import React from 'react'

export default function Navbar({setShowTab}) {
  return (
    <section className="timesheet-navigation">
        <div className="nav" />
        <div className="container-fluid nopaddingmail" />
        <div className="tabbable" />
            <ul className="nav nav-tabs " data-tabs="tabs" id="myTab">
            <li className="active" onClick={() => setShowTab("submitted")}><a data-toggle="tab" href="#incoming">Submitted</a></li>
            <li onClick={() => setShowTab("approved")}><a data-toggle="tab" href="#sentmsg">Approved</a></li>
            <li onClick={() => setShowTab("rejected")}><a data-toggle="tab" href="#sentmsg">Rejected</a></li>
            </ul>
            <div className="tab-content" >
            <div className="tab-pane active" id="incoming" > 
            </div>
            </div>
    </section>
  )
}
