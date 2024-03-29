import React from 'react'
import TimesheetButtons from './timesheet-buttons'
import TableHeaderUser from './table-header-user'
import TableContentsUser from './table-contents-user'
import Modal from './modal'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

export default function UserComponent({showTab,entries,setEntries,selectedDate,setSelectedDate}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  async function deleteEntry(id) {
    setEntries(entries.filter((value, index)=> index != id))
    const res = await axios.delete(`http://127.0.0.1:5000/deleteentry/${id}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }  
  async function addEntry(entry) {
    entry["Name"] = searchParams.get("user") || "Prem Bhajaj"
    switch (entry["Project"]) {
      case "Hoist Finance":
        entry["CostCode"] = "1001"
        break;
      case "Citi Group":
        entry["CostCode"] = "1002"
        break;
      case "HSBC Bank":
        entry["CostCode"] = "1003"
        break;
    
      default:
        break;
    }

    setEntries([...entries,entry])
    //  await axios.post('http://127.0.0.1:5000/addentry', entry);
    const json = JSON.stringify(entry);
    const res = await axios.post('http://127.0.0.1:5000/addentry', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });



    // console.log(entries)
  }
  return (
    <>
        <TimesheetButtons selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <TableHeaderUser showTab={showTab}/>
        {entries.map((entry,index) => {
          if (showTab == entry.status && entry.Name == (searchParams.get("user") || "Prem Bhajaj")){
            if (!selectedDate || selectedDate==entry.Date)
              return <TableContentsUser showTab={showTab} deleteEntry={deleteEntry} entry={entry} id={index} />
      
            }
        })}

        

        <Modal addEntry={addEntry}/>
    </>
  )
}
