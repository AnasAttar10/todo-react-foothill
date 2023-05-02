import React from 'react'

function Footer({tasks_number ,Done_tasks}) {
  return (
    <div className='d-flex justify-content-evenly p-2 bg bg-dark text-white'> 
        <div>Tasks_Number  : {tasks_number} </div>
        <div> Done_Tasks : {Done_tasks} </div>
    </div>
  )
}

export default Footer